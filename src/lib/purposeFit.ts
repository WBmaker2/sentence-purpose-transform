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
  const hasCore = pieces.some((p) => p.category === 'coreFact');
  const hasReason = hasCategory(pieces, 'reason');
  const hasAction = hasCategory(pieces, 'action') || hasCategory(pieces, 'polite');
  const hasConcise =
    pieces.filter((p) => p.category !== 'title' && p.category !== 'emphasis').length <= 4 &&
    !hasCategory(pieces, 'greeting');

  switch (purpose) {
    case 'inform':
      // 필수: 핵심 사실, 간결성(너무 많은 인사말 없이 핵심 포함)
      return {
        satisfied: [
          ...(hasCore ? ['핵심 사실'] : []),
          ...(hasConcise ? ['간결함'] : []),
        ],
        missing: [
          ...(hasCore ? [] : ['핵심 사실']),
          ...(hasConcise ? [] : ['간결함']),
        ],
        fit: hasCore && hasConcise,
      };
    case 'guide':
      // 필수: 대상·행동·순서·조건 → 핵심 사실 + 행동
      return {
        satisfied: [
          ...(hasCore ? ['대상', '조건'] : []),
          ...(hasAction ? ['행동', '순서'] : []),
        ],
        missing: [
          ...(hasCore ? [] : ['대상', '조건']),
          ...(hasAction ? [] : ['행동', '순서']),
        ],
        fit: hasCore && hasAction,
      };
    case 'persuade':
      // 필수: 주장·이유 또는 근거·제안
      return {
        satisfied: [
          ...(hasCore ? ['주장'] : []),
          ...(hasReason ? ['이유 또는 근거'] : []),
          ...(hasAction ? ['제안'] : []),
        ],
        missing: [
          ...(hasCore ? [] : ['주장']),
          ...(hasReason ? [] : ['이유 또는 근거']),
          ...(hasAction ? [] : ['제안']),
        ],
        fit: hasCore && hasReason && hasAction,
      };
    case 'request':
      // 필수: 요청 행동·대상·시점
      return {
        satisfied: [
          ...(hasCore ? ['대상', '시점'] : []),
          ...(hasAction ? ['요청 행동'] : []),
        ],
        missing: [
          ...(hasCore ? [] : ['대상', '시점']),
          ...(hasAction ? [] : ['요청 행동']),
        ],
        fit: hasCore && hasAction,
      };
    default:
      return { satisfied: [], missing: [], fit: false };
  }
}
