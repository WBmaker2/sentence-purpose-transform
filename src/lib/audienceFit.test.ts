import { describe, expect, it } from 'vitest';
import type { SentencePiece } from '../data/types';
import { checkAudienceFit } from './audienceFit';

const corePiece: SentencePiece = {
  id: 'audience-core',
  category: 'coreFact',
  text: '핵심 사실',
  linkedFactIds: ['fact-core'],
};

describe('checkAudienceFit', () => {
  it('asks for more context when a new listener receives only one detail piece', () => {
    expect(checkAudienceFit('newListener', [corePiece], 'inform').needsMoreDetail).toBe(true);
  });

  it('asks for simplification when a younger student receives too many detail pieces', () => {
    const pieces = Array.from({ length: 5 }, (_, index) => ({
      ...corePiece,
      id: `audience-core-${index}`,
    }));

    expect(checkAudienceFit('youngerStudent', pieces, 'inform').needsSimplification).toBe(true);
  });
});
