import type { FactUnit } from '../data/types';

// 사양 13절 접근성 — 화면 낭독기가 '필수 사실: 수요일 오후 5시, 도서관 반납함'처럼 읽도록 라벨 제공

// 사실 단위 하나의 낭독용 라벨
export function factUnitAriaLabel(unit: FactUnit): string {
  const req = unit.required ? '필수 사실' : '바꿀 수 있는 표현';
  const kindLabel = kindToKorean(unit.kind);
  return `${req}, ${kindLabel}: ${unit.text}.`;
}

// 사실 종류 → 한국어
export function kindToKorean(kind: FactUnit['kind']): string {
  const map: Record<FactUnit['kind'], string> = {
    who: '누가',
    what: '무엇을',
    target: '대상',
    when: '언제',
    where: '어디서',
    quantity: '수량',
    condition: '조건',
    reason: '이유',
  };
  return map[kind];
}
