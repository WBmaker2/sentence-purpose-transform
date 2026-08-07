// 사양 7.2절 자료 모델 — 모든 변환은 '사실 층'과 '표현 층'을 분리한다 (사양 5.1)

export type Purpose = 'inform' | 'guide' | 'persuade' | 'request';
export type Audience =
  | 'friend'
  | 'class'
  | 'teacher'
  | 'youngerStudent'
  | 'newListener';

export type FactKind =
  | 'who'
  | 'what'
  | 'when'
  | 'where'
  | 'quantity'
  | 'condition'
  | 'reason';

export type FactUnit = {
  id: string;
  label: string;
  text: string;
  required: boolean;
  kind: FactKind;
};

export type SentenceVariant = {
  id: string;
  purpose: Purpose;
  audience: Audience;
  sentence: string;
  preservedFactIds: string[];
  effectTags: string[];
  explanation: string;
};

export type FactCase = {
  id: string;
  title: string;
  baseSentence: string;
  factUnits: FactUnit[];
  supportedPurposes: Purpose[];
  supportedAudiences: Audience[];
  acceptableVariants: SentenceVariant[];
};

// 목적/독자 카드 메타데이터
export type PurposeMeta = {
  id: Purpose;
  name: string;
  icon: string;
  short: string;
  description: string;
  requiredElements: string[]; // 사양 10.2 필수 요소
  optionalElements: string[]; // 사양 10.2 선택 요소
};

export type AudienceMeta = {
  id: Audience;
  name: string;
  icon: string;
  short: string;
  description: string;
  backgroundHint: string; // 사양 5.3, 10.3 — 얼마나 알고 있는가
  toneHint: string; // 어떤 말투가 관계에 맞는가
  detailHint: string; // 필요한 설명량
};

// 표현 조각 (클릭으로 조립)
export type PieceCategory =
  | 'greeting'
  | 'title'
  | 'coreFact'
  | 'reason'
  | 'action'
  | 'polite'
  | 'emphasis';

export type SentencePiece = {
  id: string;
  category: PieceCategory;
  text: string;
  // 이 조각이 어떤 사실 ID에 매달리는가 (사실 보존 검증용) — 한 조각이 여러 사실을 포함할 수 있음
  linkedFactIds?: string[];
  // 원래 사실에 없는 새 정보(사실 추가) 표시 — 사양 10.1, 17.1
  isNewFact?: boolean;
  // 과장 여부
  isExaggeration?: boolean;
};

// 목적/독자별 조각 묶음
export type PieceBundle = {
  purpose: Purpose;
  audience: Audience;
  pieces: SentencePiece[];
};

// 피드백 상황 키 (사양 11.1)
export type FeedbackKey =
  | 'missingFact'
  | 'purposeMismatch'
  | 'audienceMissing'
  | 'persuadeLacksReason'
  | 'requestLikeCommand'
  | 'addedFact'
  | 'allGood';

// 단계 (사양 8, 12.1)
export type Step =
  | 'start'
  | 'factVault'
  | 'situation'
  | 'build'
  | 'check'
  | 'compare'
  | 'result';
