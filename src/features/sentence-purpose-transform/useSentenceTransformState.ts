import { useReducer, useCallback } from 'react';
import type {
  Purpose,
  Audience,
  Step,
  SentencePiece,
} from '../../data/types';

// 사양 8, 12.1 화면 흐름 상태 관리
// 서버 없이 새로고침 시 초기화 (사양 6절)

export type BuiltPiece = SentencePiece & { uid: string };

export type MissionId = 0 | 1 | 2 | 3 | 4 | 5;

export type MissionDef = {
  id: MissionId;
  title: string;
  desc: string;
  factCaseId: string;
  // 미션 5(네 목적 변환소)는 고정 목적/독자 없이 순차 진행
  fixedPurpose?: Purpose;
  fixedAudience?: Audience;
  purposeOrder?: Purpose[]; // 미션 5용
};

export type ReasonAnswer = {
  audience: string;
  purposeText: string;
  keptFact: string;
  changedExpression: string;
  helpText: string;
  evidence: string;
};

type State = {
  missionId: MissionId | null;
  step: Step;
  factCaseId: string | null;
  // 사실 금고: 학생이 확인한 필수 사실 ID
  lockedFactIds: string[];
  factVaultConfirmed: boolean;
  // 상황 설정
  purpose: Purpose | null;
  audience: Audience | null;
  // 문장 조립
  built: BuiltPiece[];
  history: BuiltPiece[][]; // 되돌리기용 (사양 12.3)
  // 미션 5: 목적별 변환 결과를 모으는 곳
  multiResults: Array<{ purpose: Purpose; audience: Audience; sentence: string }>;
  multiPurposeIndex: number; // 미션 5 현재 목적 순서
  purposeOrder?: Purpose[]; // 미션 5용 목적 순서
  // 근거·결과
  reason: ReasonAnswer;
  reasonTemplateId: string | null;
};

type Action =
  | { type: 'SELECT_MISSION'; mission: MissionDef }
  | { type: 'GO_STEP'; step: Step }
  | { type: 'TOGGLE_LOCK_FACT'; factId: string }
  | { type: 'CONFIRM_FACT_VAULT' }
  | { type: 'SET_PURPOSE'; purpose: Purpose }
  | { type: 'SET_AUDIENCE'; audience: Audience }
  | { type: 'CONFIRM_SITUATION' }
  | { type: 'ADD_PIECE'; piece: SentencePiece }
  | { type: 'REMOVE_PIECE'; uid: string }
  | { type: 'MOVE_PIECE'; uid: string; dir: 'up' | 'down' }
  | { type: 'UNDO' }
  | { type: 'CLEAR_BUILT' }
  | { type: 'CONFIRM_PRESERVATION' }
  | { type: 'SET_REASON'; reason: Partial<ReasonAnswer> }
  | { type: 'SET_REASON_TEMPLATE'; id: string }
  | { type: 'SUBMIT_RESULT' }
  | { type: 'SAVE_MULTI_RESULT'; result: { purpose: Purpose; audience: Audience; sentence: string } }
  | { type: 'ADVANCE_MULTI' }
  | { type: 'RESTART' }
  | { type: 'RESET_BUILT_KEEP_CONTEXT' };

const initialState: State = {
  missionId: null,
  step: 'start',
  factCaseId: null,
  lockedFactIds: [],
  factVaultConfirmed: false,
  purpose: null,
  audience: null,
  built: [],
  history: [],
  multiResults: [],
  multiPurposeIndex: 0,
  reason: {
    audience: '',
    purposeText: '',
    keptFact: '',
    changedExpression: '',
    helpText: '',
    evidence: '',
  },
  reasonTemplateId: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SELECT_MISSION': {
      const m = action.mission;
      return {
        ...initialState,
        missionId: m.id,
        step: 'factVault',
        factCaseId: m.factCaseId,
        purpose: m.fixedPurpose ?? null,
        audience: m.fixedAudience ?? null,
        purposeOrder: m.purposeOrder,
      };
    }
    case 'GO_STEP':
      return { ...state, step: action.step };
    case 'TOGGLE_LOCK_FACT': {
      const exists = state.lockedFactIds.includes(action.factId);
      return {
        ...state,
        lockedFactIds: exists
          ? state.lockedFactIds.filter((id) => id !== action.factId)
          : [...state.lockedFactIds, action.factId],
      };
    }
    case 'CONFIRM_FACT_VAULT':
      return { ...state, factVaultConfirmed: true, step: 'situation' };
    case 'SET_PURPOSE':
      return { ...state, purpose: action.purpose };
    case 'SET_AUDIENCE':
      return { ...state, audience: action.audience };
    case 'CONFIRM_SITUATION':
      return { ...state, step: 'build' };
    case 'ADD_PIECE':
      return {
        ...state,
        history: [...state.history, state.built],
        built: [...state.built, { ...action.piece, uid: `${action.piece.id}-${Date.now()}-${Math.random()}` }],
      };
    case 'REMOVE_PIECE':
      return {
        ...state,
        history: [...state.history, state.built],
        built: state.built.filter((p) => p.uid !== action.uid),
      };
    case 'MOVE_PIECE': {
      const idx = state.built.findIndex((p) => p.uid === action.uid);
      if (idx < 0) return state;
      const target = action.dir === 'up' ? idx - 1 : idx + 1;
      if (target < 0 || target >= state.built.length) return state;
      const next = [...state.built];
      const [item] = next.splice(idx, 1);
      next.splice(target, 0, item);
      return { ...state, history: [...state.history, state.built], built: next };
    }
    case 'UNDO': {
      if (state.history.length === 0) return state;
      const prev = state.history[state.history.length - 1];
      return { ...state, built: prev, history: state.history.slice(0, -1) };
    }
    case 'CLEAR_BUILT':
      return { ...state, history: [...state.history, state.built], built: [] };
    case 'CONFIRM_PRESERVATION':
      return { ...state, step: 'compare' };
    case 'SET_REASON':
      return { ...state, reason: { ...state.reason, ...action.reason } };
    case 'SET_REASON_TEMPLATE':
      return { ...state, reasonTemplateId: action.id };
    case 'SUBMIT_RESULT':
      return { ...state, step: 'result' };
    case 'SAVE_MULTI_RESULT':
      return {
        ...state,
        multiResults: [...state.multiResults, action.result],
      };
    case 'ADVANCE_MULTI':
      return { ...state, multiPurposeIndex: state.multiPurposeIndex + 1 };
    case 'RESET_BUILT_KEEP_CONTEXT':
      return { ...state, built: [], history: [] };
    case 'RESTART':
      return { ...initialState };
    default:
      return state;
  }
}

export function useSentenceTransformState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectMission = useCallback((m: MissionDef) => dispatch({ type: 'SELECT_MISSION', mission: m }), []);
  const goStep = useCallback((step: Step) => dispatch({ type: 'GO_STEP', step }), []);
  const toggleLockFact = useCallback((factId: string) => dispatch({ type: 'TOGGLE_LOCK_FACT', factId }), []);
  const confirmFactVault = useCallback(() => dispatch({ type: 'CONFIRM_FACT_VAULT' }), []);
  const setPurpose = useCallback((purpose: Purpose) => dispatch({ type: 'SET_PURPOSE', purpose }), []);
  const setAudience = useCallback((audience: Audience) => dispatch({ type: 'SET_AUDIENCE', audience }), []);
  const confirmSituation = useCallback(() => dispatch({ type: 'CONFIRM_SITUATION' }), []);
  const addPiece = useCallback((piece: SentencePiece) => dispatch({ type: 'ADD_PIECE', piece }), []);
  const removePiece = useCallback((uid: string) => dispatch({ type: 'REMOVE_PIECE', uid }), []);
  const movePiece = useCallback((uid: string, dir: 'up' | 'down') => dispatch({ type: 'MOVE_PIECE', uid, dir }), []);
  const undo = useCallback(() => dispatch({ type: 'UNDO' }), []);
  const clearBuilt = useCallback(() => dispatch({ type: 'CLEAR_BUILT' }), []);
  const confirmPreservation = useCallback(() => dispatch({ type: 'CONFIRM_PRESERVATION' }), []);
  const setReason = useCallback((reason: Partial<ReasonAnswer>) => dispatch({ type: 'SET_REASON', reason }), []);
  const setReasonTemplate = useCallback((id: string) => dispatch({ type: 'SET_REASON_TEMPLATE', id }), []);
  const submitResult = useCallback(() => dispatch({ type: 'SUBMIT_RESULT' }), []);
  const saveMultiResult = useCallback(
    (result: { purpose: Purpose; audience: Audience; sentence: string }) =>
      dispatch({ type: 'SAVE_MULTI_RESULT', result }),
    []
  );
  const advanceMulti = useCallback(() => dispatch({ type: 'ADVANCE_MULTI' }), []);
  const resetBuiltKeepContext = useCallback(() => dispatch({ type: 'RESET_BUILT_KEEP_CONTEXT' }), []);
  const restart = useCallback(() => dispatch({ type: 'RESTART' }), []);

  return {
    state,
    actions: {
      selectMission,
      goStep,
      toggleLockFact,
      confirmFactVault,
      setPurpose,
      setAudience,
      confirmSituation,
      addPiece,
      removePiece,
      movePiece,
      undo,
      clearBuilt,
      confirmPreservation,
      setReason,
      setReasonTemplate,
      submitResult,
      saveMultiResult,
      advanceMulti,
      resetBuiltKeepContext,
      restart,
    },
  };
}
