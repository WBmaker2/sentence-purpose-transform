import type { Audience, SentencePiece, Purpose } from '../data/types';
import { AUDIENCE_CARDS } from '../data/audienceCards';

// 사양 10.3 독자 적합성 — 독자별 배경 설명량·말투 적합성

export type AudienceFitResult = {
  hint: string; // 이 독자에게 맞는 힌트
  needsMoreDetail: boolean; // 더 많은 배경 설명이 필요한가
  needsSimplification: boolean; // 어린 독자에게 정보량을 줄여야 하는가
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
  const hasPolite = pieces.some((p) => p.category === 'polite');

  let needsMoreDetail = false;
  let needsSimplification = false;
  let mismatch = false;

  if (audience === 'newListener' || audience === 'teacher') {
    // 처음 듣는 사람/선생님 → 한 조각만으로는 배경을 설명하기 어려움
    if (detailPieces.length < 2) needsMoreDetail = true;
    if (audience === 'teacher' && purpose === 'request' && !hasPolite) mismatch = true;
  }
  if (audience === 'youngerStudent' && detailPieces.length > 4) {
    // 어린 동생에게는 정보량을 줄여야 함
    needsSimplification = true;
  }

  return {
    hint: `${meta.name}: ${meta.detailHint}. ${meta.toneHint}.`,
    needsMoreDetail,
    needsSimplification,
    mismatch,
  };
}
