import { describe, expect, it } from 'vitest';
import { canProceedAfterCheck } from './learningGate';

describe('learning gate', () => {
  it('requires both preserved facts and a matching purpose', () => {
    expect(canProceedAfterCheck(true, false)).toBe(false);
    expect(canProceedAfterCheck(false, true)).toBe(false);
    expect(canProceedAfterCheck(true, true)).toBe(true);
    expect(canProceedAfterCheck(true, true, false)).toBe(false);
  });
});
