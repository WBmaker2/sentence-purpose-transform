import { describe, expect, it } from 'vitest';
import { kindToKorean } from './accessibilityLabels';

describe('fact kind labels', () => {
  it('names a target as 대상 instead of the generic 무엇을 label', () => {
    expect(kindToKorean('target')).toBe('대상');
  });
});
