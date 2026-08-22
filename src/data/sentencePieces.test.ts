import { describe, expect, it } from 'vitest';
import { getAvailableAudiences, getPieceBundle } from './sentencePieces';

describe('getPieceBundle', () => {
  it('does not silently reuse another audience bundle', () => {
    expect(getPieceBundle('libraryBin', 'guide', 'friend')).toEqual([]);
  });

  it('lists only audiences with an exact bundle for the selected purpose', () => {
    expect(getAvailableAudiences('libraryBin', 'guide')).toEqual(['class']);
  });
});
