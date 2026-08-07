import type { Purpose, SentencePiece } from '../data/types';

// 사양 10.2 목적 적합성 — 목적별 필수 요소 충족 여부 판정

// 조각 카테고리로 요소 존재 여부 판단
function hasCategory(pieces: SentencePiece[], cat: SentencePiece['category']): boolean {
  return pieces.some((p) => p.category === cat);
}

export type PurposeFitResult = {
  satisfied: string[]; // 충족된 필수 요소
  missing: string[]; // 빠진 필수 요소
  fit: boolean; // 필수 요소 모두 충족
};

// 사양 10.2 표 기반 판정
export function checkPurposeFit(
  purpose: Purpose,
  pieces: SentencePiece[]
): PurposeFitResult {
  let required: string[];
  const hasCore = pieces.some((p) => p.category === 'coreFact');
  const hasReason = hasCategory(pieces, 'reason');
  const hasAction = hasCategory(pieces, 'action') || hasCategory(pieces, 'polite');

  switch (purpose) {
    case 'inform':
      // 필수: 핵심 사실, 간결성(너무 많은 인사말 없이 핵심 포함)
      required = hasCore ? ['핵심 사실'] : [];
      return {
        satisfied: required,
        missing: hasCore ? [] : ['핵심 사실'],
        fit: hasCore,
      };
    case 'guide':
      // 필수: 대상·행동·순서·조건 → 핵심 사실 + 행동
      required = [];
      const missing: string[] = [];
      if (hasCore) required.push('대상·조건'); else missing.push('대상·조건');
      if (hasAction) required.push('행동'); else missing.push('행동');
      return { satisfied: required, missing, fit: hasCore && hasAction };
    case 'persuade':
      // 필수: 주장·이유 또는 근거·제안
      required = [];
      const pmiss: string[] = [];
      if (hasCore) required.push('주장'); else pmiss.push('주장');
      if (hasReason) required.push('이유·근거'); else pmiss.push('이유·근거');
      if (hasAction) required.push('제안'); else pmiss.push('제안');
      return { satisfied: required, missing: pmiss, fit: hasCore && hasReason };
    case 'request':
      // 필수: 요청 행동·대상·시점
      required = [];
      const rmiss: string[] = [];
      if (hasCore) required.push('요청 대상·시점'); else rmiss.push('요청 대상·시점');
      if (hasAction) required.push('요청 행동'); else rmiss.push('요청 행동');
      return { satisfied: required, missing: rmiss, fit: hasCore && hasAction };
    default:
      return { satisfied: [], missing: [], fit: false };
  }
}
