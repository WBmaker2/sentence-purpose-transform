import type { FactCase, SentencePiece } from '../data/types';

export type ContentContractIssueCode = 'unknown-fact-id' | 'unexplained-fact';

export type ContentContractIssue = {
  code: ContentContractIssueCode;
  pieceId: string;
  message: string;
};

export function validateSentencePieces(
  factCases: Record<string, FactCase>,
  pieces: SentencePiece[]
): ContentContractIssue[] {
  const factIds = new Set(
    Object.values(factCases).flatMap((factCase) =>
      factCase.factUnits.map((factUnit) => factUnit.id)
    )
  );

  return pieces.flatMap((piece) => {
    const issues: ContentContractIssue[] = [];
    const linkedFactIds = piece.linkedFactIds ?? [];

    if (linkedFactIds.some((factId) => !factIds.has(factId))) {
      issues.push({
        code: 'unknown-fact-id',
        pieceId: piece.id,
        message: '조각이 존재하지 않는 사실 ID를 가리킵니다.',
      });
    }

    if (piece.category === 'coreFact' && linkedFactIds.length === 0 && !piece.isNewFact) {
      issues.push({
        code: 'unexplained-fact',
        pieceId: piece.id,
        message: '핵심 사실 조각은 기존 사실 연결 또는 새 사실 표식이 필요합니다.',
      });
    }

    return issues;
  });
}
