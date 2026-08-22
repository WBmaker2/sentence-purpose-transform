import { describe, expect, it } from 'vitest';
import { canCompleteMission5 } from './mission5';

describe('mission 5 completion', () => {
  it('requires a selected transformation and a written reason', () => {
    expect(canCompleteMission5(null, '이유가 있어요')).toBe(false);
    expect(canCompleteMission5(1, '   ')).toBe(false);
    expect(canCompleteMission5(1, '목적과 독자에 잘 맞아서요.')).toBe(true);
  });
});
