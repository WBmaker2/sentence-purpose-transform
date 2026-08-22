import { describe, expect, it } from 'vitest';
import { FACT_CASES } from '../data/factCases';
import { getAllSentencePieces } from '../data/sentencePieces';
import type { SentencePiece } from '../data/types';
import { validateSentencePieces } from './contentContract';

describe('sentence content contract', () => {
  it('accepts the authored sentence pieces when every factual addition is explained', () => {
    expect(validateSentencePieces(FACT_CASES, getAllSentencePieces())).toEqual([]);
  });

  it('reports a linked fact id that does not exist in the fact case data', () => {
    const piece: SentencePiece = {
      id: 'test-unknown-fact',
      category: 'coreFact',
      text: '알 수 없는 사실',
      linkedFactIds: ['not-in-fact-cases'],
    };

    expect(validateSentencePieces(FACT_CASES, [piece])).toContainEqual(
      expect.objectContaining({ code: 'unknown-fact-id', pieceId: piece.id })
    );
  });
});
