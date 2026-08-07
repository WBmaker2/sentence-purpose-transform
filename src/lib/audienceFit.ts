import type { Audience, SentencePiece, Purpose } from '../data/types';
import { AUDIENCE_CARDS } from '../data/audienceCards';

// 사양 10.3 독자 적합성 — 독자별 배경 설명량·말투 적합성

export type AudienceFitResult = {
  hint: string; // 이 독자에게 맞는 힌트
  needsMoreDetail: boolean; // 더 많은 배경 설명이 필요한가
  mismatch: boolean; // 목적과 독자가 어울리지 않는가
};

// 독자별 권장 정보량 (사양 10.3)
// 처음 듣는 사람/선생님 → 배경 더 분명히, 어린 동생 → 짧고 구체적
export function checkAudienceFit(
  audience: Audience,
  pieces: SentencePiece[],
  purpose: Purpose
): AudienceFitResult {
  const meta = AUDIENCE_CARDS[audience];
  const detailPieces = pieces.filter(
    (p) => p.category === 'coreFact' || p.category === 'reason'
  );
  const hasAction = pieces.some((p) => p.category === 'action');
  const hasPolite = pieces.some((p) => p.category === 'polite');

  let needsMoreDetail = false;
  let mismatch = false;

  if (audience === 'newListener' || audience === 'teacher') {
    // 처음 듣는 사람/선생님 → 행동이나 조건이 더 분명해야
    if (purpose === 'guide' && !hasAction) needsMoreDetail = true;
    if (audience === 'teacher' && purpose === 'request' && !hasPolite) mismatch = true;
  }
  if (audience === 'youngerStudent' && detailPieces.length > 4) {
    // 어린 동생에게 너무 길면 안 됨
    needsMoreDetail = false;
  }

  return {
    hint: `${meta.name}: ${meta.detailHint}. ${meta.toneHint}.`,
    needsMoreDetail,
    mismatch,
  };
}
