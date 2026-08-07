import { useState } from 'react';
import type { FactCase, Purpose, Audience, SentencePiece } from '../../data/types';
import type { BuiltPiece, ReasonAnswer, MissionDef } from './useSentenceTransformState';
import { PURPOSE_CARDS, PURPOSE_LABEL, PURPOSE_ORDER } from '../../data/purposeCards';
import { AUDIENCE_CARDS, AUDIENCE_LABEL } from '../../data/audienceCards';
import { SentenceBuilder } from './SentenceBuilder';
import { FactPreservationPanel } from './FactPreservationPanel';
import { EffectComparePanel } from './EffectComparePanel';
import { checkPreservation } from '../../lib/factPreservation';

// 사양 9절 미션 5 — 한 사실 네 목적 변환소
// 학급 전시 사실을 알리기·안내·설득·부탁 네 목적으로 순차 변환하고 비교
// 마지막에 가장 효과적이라고 생각한 변환 하나를 선택하고 이유를 작성

type SubState = 'build' | 'check' | 'compare';
type SavedResult = {
  purpose: Purpose;
  audience: Audience;
  built: BuiltPiece[];
  reason: ReasonAnswer;
  reasonTemplateId: string | null;
};

type Props = {
  factCase: FactCase;
  mission: MissionDef;
  onRestart: () => void;
};

// 미션 5에서 각 목적에 권장하는 독자
const SUGGESTED_AUDIENCE: Record<Purpose, Audience> = {
  inform: 'class',
  guide: 'newListener',
  persuade: 'class',
  request: 'friend',
};

export function Mission5MultiTransform({ factCase, mission, onRestart }: Props) {
  const purposeOrder = (mission.purposeOrder ?? PURPOSE_ORDER) as Purpose[];
  const [purposeIndex, setPurposeIndex] = useState(0);
  const [results, setResults] = useState<SavedResult[]>([]);
  const [subState, setSubState] = useState<SubState>('build');
  const [built, setBuilt] = useState<BuiltPiece[]>([]);
  const [history, setHistory] = useState<BuiltPiece[][]>([]);
  const [reason, setReason] = useState<ReasonAnswer>({
    audience: '', purposeText: '', keptFact: '', changedExpression: '', helpText: '', evidence: '',
  });
  const [reasonTemplateId, setReasonTemplateId] = useState<string | null>(null);
  const [phase, setPhase] = useState<'transform' | 'final'>('transform');
  const [bestPick, setBestPick] = useState<number | null>(null);
  const [bestReason, setBestReason] = useState('');

  const currentPurpose = purposeOrder[purposeIndex];
  const currentAudience = SUGGESTED_AUDIENCE[currentPurpose];

  // 문장 조립 핸들러 (로컬 상태)
  const addPiece = (piece: SentencePiece) => {
    setHistory((h) => [...h, built]);
    setBuilt((b) => [...b, { ...piece, uid: `${piece.id}-${Date.now()}-${Math.random()}` }]);
  };
  const removePiece = (uid: string) => {
    setHistory((h) => [...h, built]);
    setBuilt((b) => b.filter((p) => p.uid !== uid));
  };
  const movePiece = (uid: string, dir: 'up' | 'down') => {
    setHistory((h) => [...h, built]);
    setBuilt((b) => {
      const idx = b.findIndex((p) => p.uid === uid);
      if (idx < 0) return b;
      const target = dir === 'up' ? idx - 1 : idx + 1;
      if (target < 0 || target >= b.length) return b;
      const next = [...b];
      const [item] = next.splice(idx, 1);
      next.splice(target, 0, item);
      return next;
    });
  };
  const undo = () => {
    if (history.length === 0) return;
    setBuilt(history[history.length - 1]);
    setHistory((h) => h.slice(0, -1));
  };
  const clearBuilt = () => {
    setHistory((h) => [...h, built]);
    setBuilt([]);
  };

  // 한 목적 변환 완료 → 다음 목적으로
  const finishCurrent = () => {
    const newResult: SavedResult = {
      purpose: currentPurpose,
      audience: currentAudience,
      built: [...built],
      reason: { ...reason },
      reasonTemplateId,
    };
    const nextResults = [...results, newResult];
    setResults(nextResults);

    if (purposeIndex < purposeOrder.length - 1) {
      setPurposeIndex(purposeIndex + 1);
      setBuilt([]);
      setHistory([]);
      setReason({ audience: '', purposeText: '', keptFact: '', changedExpression: '', helpText: '', evidence: '' });
      setReasonTemplateId(null);
      setSubState('build');
    } else {
      setPhase('final');
    }
  };

  // 변환 단계
  if (phase === 'transform') {
    return (
      <>
        <Mission5Progress
          purposeOrder={purposeOrder}
          currentIndex={purposeIndex}
          results={results}
        />
        {subState === 'build' && (
          <SentenceBuilder
            factCase={factCase}
            purpose={currentPurpose}
            audience={currentAudience}
            built={built}
            onAdd={addPiece}
            onRemove={removePiece}
            onMove={movePiece}
            onUndo={undo}
            onClear={clearBuilt}
            onCheck={() => setSubState('check')}
            canUndo={history.length > 0}
          />
        )}
        {subState === 'check' && (
          <FactPreservationPanel
            factCase={factCase}
            purpose={currentPurpose}
            audience={currentAudience}
            built={built}
            onConfirm={() => setSubState('compare')}
            onBack={() => setSubState('build')}
          />
        )}
        {subState === 'compare' && (
          <>
            <EffectComparePanel
              factCase={factCase}
              purpose={currentPurpose}
              audience={currentAudience}
              built={built}
              reason={reason}
              reasonTemplateId={reasonTemplateId}
              onSetReason={(r) => setReason((prev) => ({ ...prev, ...r }))}
              onSetReasonTemplate={setReasonTemplateId}
              onSubmit={finishCurrent}
              onBack={() => setSubState('check')}
            />
            <div className="feedback feedback--info" style={{ marginTop: 'var(--sp-3)' }} role="status">
              <span aria-hidden="true">📌</span>
              <span>
                {purposeIndex < purposeOrder.length - 1
                  ? `이 목적 변환을 마치면 다음 목적(${PURPOSE_LABEL[purposeOrder[purposeIndex + 1]]})으로 넘어가요.`
                  : '마지막 목적이에요! 제출하면 네 변환을 비교해요.'}
              </span>
            </div>
          </>
        )}
      </>
    );
  }

  // 최종 비교 단계 — 네 변환을 나란히 보고 가장 효과적인 것 선택
  return (
    <Mission5FinalCompare
      factCase={factCase}
      results={results}
      bestPick={bestPick}
      onPick={setBestPick}
      bestReason={bestReason}
      onReasonChange={setBestReason}
      onRestart={onRestart}
    />
  );
}

// 진행 표시
function Mission5Progress({
  purposeOrder,
  currentIndex,
  results,
}: {
  purposeOrder: Purpose[];
  currentIndex: number;
  results: SavedResult[];
}) {
  return (
    <div className="panel" style={{ padding: 'var(--sp-4)', marginBottom: 'var(--sp-4)' }}>
      <p className="panel__eyebrow">한 사실 네 목적 변환소</p>
      <div className="row" style={{ gap: 'var(--sp-2)' }}>
        {purposeOrder.map((p, i) => {
          const done = i < results.length;
          const current = i === currentIndex;
          return (
            <span
              key={p}
              className={`tag ${done ? 'tag--required' : current ? `tag--${p}` : ''}`}
              style={{ fontSize: 'var(--fs-small)', padding: '6px var(--sp-3)' }}
            >
              {done ? '✅' : current ? '👉' : `${i + 1}.`}{' '}
              {PURPOSE_CARDS[p].icon} {PURPOSE_LABEL[p]}
            </span>
          );
        })}
      </div>
      <p className="muted" style={{ fontSize: 'var(--fs-small)', marginTop: 'var(--sp-2)' }}>
        지금 {PURPOSE_LABEL[purposeOrder[currentIndex]]} 목적으로 변환 중이에요. (
        {currentIndex + 1}/{purposeOrder.length})
      </p>
    </div>
  );
}

// 최종 비교 화면
function Mission5FinalCompare({
  factCase,
  results,
  bestPick,
  onPick,
  bestReason,
  onReasonChange,
  onRestart,
}: {
  factCase: FactCase;
  results: SavedResult[];
  bestPick: number | null;
  onPick: (i: number) => void;
  bestReason: string;
  onReasonChange: (s: string) => void;
  onRestart: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const copyText = [
    `【한 사실 네 목적 변환 결과】`,
    `원래 사실: ${factCase.baseSentence}`,
    ``,
    ...results.map((r, i) => {
      const sentence = r.built.map((p) => p.text).join(' ');
      return `${i + 1}. ${PURPOSE_LABEL[r.purpose]} (${AUDIENCE_LABEL[r.audience]})\n   ${sentence}`;
    }),
    ``,
    `가장 효과적이라고 생각한 변환: ${bestPick !== null ? `${bestPick + 1}번 (${PURPOSE_LABEL[results[bestPick].purpose]})` : '미선택'}`,
    `이유: ${bestReason}`,
  ].join('\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section aria-labelledby="m5-final-title">
      <div className="panel" style={{ marginBottom: 'var(--sp-4)' }}>
        <p className="panel__eyebrow">비교 완료!</p>
        <h2 id="m5-final-title" className="panel__title">
          🎨 한 사실, 네 가지 표현 비교
        </h2>
        <p className="panel__lead">
          같은 사실을 네 목적으로 바꿔 보았어요. 사실은 같은데 표현이 어떻게 달라졌는지 비교해요.
        </p>
      </div>

      <div className="stack stack--normal">
        {results.map((r, i) => {
          const sentence = r.built.map((p) => p.text).join(' ');
          const preservation = checkPreservation(r.built, factCase);
          return (
            <button
              key={i}
              className={`panel ${bestPick === i ? 'choice-card--selected' : ''}`}
              style={{ textAlign: 'left', cursor: 'pointer', borderColor: bestPick === i ? 'var(--coral)' : undefined }}
              onClick={() => onPick(i)}
              aria-pressed={bestPick === i}
              aria-label={`${i + 1}번 변환. ${PURPOSE_LABEL[r.purpose]} 목적. ${sentence}`}
            >
              <div className="row row--between" style={{ marginBottom: 'var(--sp-2)' }}>
                <div className="row" style={{ gap: 'var(--sp-1)' }}>
                  <span className={`tag tag--${r.purpose}`}>
                    {PURPOSE_CARDS[r.purpose].icon} {PURPOSE_LABEL[r.purpose]}
                  </span>
                  <span className="tag">
                    {AUDIENCE_CARDS[r.audience].icon} {AUDIENCE_LABEL[r.audience]}
                  </span>
                  {preservation.allPreserved && <span className="tag tag--required">🔒 사실 보존</span>}
                </div>
                <span className="muted" style={{ fontSize: 'var(--fs-tiny)' }}>
                  {bestPick === i ? '⭐ 선택됨' : '눌러서 선택'}
                </span>
              </div>
              <p style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, lineHeight: 1.6 }}>
                {sentence}
              </p>
            </button>
          );
        })}
      </div>

      <div className="panel" style={{ marginTop: 'var(--sp-4)' }}>
        <h3 className="panel__title" style={{ fontSize: 'var(--fs-h3)' }}>
          ⭐ 가장 효과적인 변환 고르기
        </h3>
        <p className="panel__lead">
          네 표현 중 어느 것이 가장 목적과 독자에 잘 맞는지 골라보고, 왜 그렇게 생각하는지 적어요.
        </p>
        <textarea
          className="reason-row"
          style={{ minHeight: '80px', width: '100%', cursor: 'text', resize: 'vertical' }}
          value={bestReason}
          onChange={(e) => onReasonChange(e.target.value)}
          placeholder="예: 친구에게 빠르게 알려야 해서 핵심 사실을 앞에 둔 표현이 가장 효과적이었어요."
          aria-label="가장 효과적인 변환을 고른 이유"
        />
      </div>

      <div className="row row--between" style={{ marginTop: 'var(--sp-4)' }}>
        <button className="btn" onClick={onRestart} aria-label="새 미션 시작하기">
          ← 새 미션 하기
        </button>
        <button className="btn btn--primary" onClick={handleCopy}>
          {copied ? '✅ 복사됨!' : '📋 결과 복사하기'}
        </button>
      </div>
    </section>
  );
}
