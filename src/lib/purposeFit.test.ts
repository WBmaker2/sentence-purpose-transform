import { describe, expect, it } from 'vitest';
import type { SentencePiece } from '../data/types';
import { checkPurposeFit } from './purposeFit';

const corePiece: SentencePiece = {
  id: 'test-core',
  category: 'coreFact',
  text: '핵심 사실',
  linkedFactIds: ['fact-core'],
};

const reasonPiece: SentencePiece = {
  id: 'test-reason',
  category: 'reason',
  text: '이유가 있어요',
};

const actionPiece: SentencePiece = {
  id: 'test-action',
  category: 'action',
  text: '함께 해요',
};

describe('checkPurposeFit', () => {
  it('requires a core fact for informing', () => {
    const result = checkPurposeFit('inform', []);

    expect(result.fit).toBe(false);
    expect(result.missing).toContain('핵심 사실');
  });

  it('requires an action for guiding', () => {
    const result = checkPurposeFit('guide', [corePiece]);

    expect(result.fit).toBe(false);
    expect(result.missing).toContain('행동');
  });

  it('requires a proposal in addition to a claim and reason when persuading', () => {
    const result = checkPurposeFit('persuade', [corePiece, reasonPiece]);

    expect(result.fit).toBe(false);
    expect(result.missing).toContain('제안');
  });

  it('accepts a persuasive sentence with a claim, reason, and proposal', () => {
    const result = checkPurposeFit('persuade', [corePiece, reasonPiece, actionPiece]);

    expect(result.fit).toBe(true);
    expect(result.missing).toEqual([]);
  });

  it('requires an action for a request', () => {
    const result = checkPurposeFit('request', [corePiece]);

    expect(result.fit).toBe(false);
    expect(result.missing).toContain('요청 행동');
  });
});
