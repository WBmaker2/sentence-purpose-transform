import type { Purpose, Audience, SentencePiece } from './types';

// 사양 9절 미션에 사용할 표현 조각 묶음.
// 사실 카드(factCaseId) × 목적(purpose) × 독자(audience) 조합별 조각.
// linkedFactIds 가 없는 조각은 '표현', isNewFact=true 는 새 사실 추가 (사양 10.1, 17.1).
// isExaggeration=true 는 과장 (사양 10.1, 22절).
// 한 조각이 여러 사실을 포함할 수 있다 (예: '도서관 반납함' = what + where).
// 모든 required 사실은 적어도 하나의 (정상) 조각으로 커버되어야 한다 — 완수 가능성 보장.

type BundleKey = `${string}-${Purpose}-${Audience}`;
const BUNDLES: Record<BundleKey, SentencePiece[]> = {
  // ============ libraryBin (도서관 반납함) ============
  'libraryBin-inform-friend': [
    { id: 'lb-if-title', category: 'title', text: '[안내]' },
    { id: 'lb-if-core', category: 'coreFact', text: '수요일 오후 5시에', linkedFactIds: ['lb-when'] },
    { id: 'lb-if-core2', category: 'coreFact', text: '도서관 반납함을 비워요', linkedFactIds: ['lb-what', 'lb-where'] },
    { id: 'lb-if-emph', category: 'emphasis', text: '잊지 마!' },
    { id: 'lb-if-new', category: 'coreFact', text: '반납함이 아주 크게 막혀요', isNewFact: true },
  ],
  'libraryBin-inform-class': [
    { id: 'lb-ic-title', category: 'title', text: '[도서관 안내]' },
    { id: 'lb-ic-core', category: 'coreFact', text: '수요일 오후 5시에', linkedFactIds: ['lb-when'] },
    { id: 'lb-ic-core2', category: 'coreFact', text: '도서관 반납함을 비웁니다', linkedFactIds: ['lb-what', 'lb-where'] },
    { id: 'lb-ic-emph', category: 'emphasis', text: '꼭 확인해 주세요.' },
  ],
  'libraryBin-inform-newListener': [
    { id: 'lb-in-title', category: 'title', text: '[우리 학교 도서관 안내]' },
    { id: 'lb-in-core', category: 'coreFact', text: '수요일 오후 5시에', linkedFactIds: ['lb-when'] },
    { id: 'lb-in-core2', category: 'coreFact', text: '도서관 반납함을 비웁니다', linkedFactIds: ['lb-what', 'lb-where'] },
    {
      id: 'lb-in-detail',
      category: 'coreFact',
      text: '도서관 입구에 있는 반납함이에요',
      isNewFact: true,
    },
  ],
  'libraryBin-inform-teacher': [
    { id: 'lb-it-core', category: 'coreFact', text: '수요일 오후 5시에', linkedFactIds: ['lb-when'] },
    { id: 'lb-it-core2', category: 'coreFact', text: '도서관 반납함을 비웁니다', linkedFactIds: ['lb-what', 'lb-where'] },
    { id: 'lb-it-emph', category: 'polite', text: '안내해 주셔서 감사합니다.' },
  ],
  'libraryBin-inform-youngerStudent': [
    { id: 'lb-iy-core', category: 'coreFact', text: '수요일 5시에', linkedFactIds: ['lb-when'] },
    { id: 'lb-iy-core2', category: 'coreFact', text: '도서관 반납함을 비워요', linkedFactIds: ['lb-what', 'lb-where'] },
    { id: 'lb-iy-emph', category: 'emphasis', text: '기억해 줘!' },
  ],
  'libraryBin-guide-class': [
    { id: 'lb-gc-core', category: 'coreFact', text: '수요일 오후 5시까지', linkedFactIds: ['lb-when'] },
    { id: 'lb-gc-core2', category: 'coreFact', text: '도서관 반납함에 책을 넣어 주세요', linkedFactIds: ['lb-what', 'lb-where'] },
    { id: 'lb-gc-act', category: 'action', text: '반납함은 5시에 비워져요' },
  ],
  'libraryBin-request-class': [
    { id: 'lb-rc-core', category: 'coreFact', text: '수요일 오후 5시 전에', linkedFactIds: ['lb-when'] },
    { id: 'lb-rc-core2', category: 'coreFact', text: '도서관 반납함을 비우니까', linkedFactIds: ['lb-what', 'lb-where'] },
    { id: 'lb-rc-act', category: 'action', text: '미리 책을 넣어 주세요' },
    { id: 'lb-rc-thanks', category: 'polite', text: '감사합니다.' },
  ],

  // ============ playground (운동장 공사) ============
  'playground-guide-friend': [
    { id: 'pg-gf-core', category: 'coreFact', text: '금요일까지', linkedFactIds: ['pg-when'] },
    { id: 'pg-gf-core2', category: 'coreFact', text: '서쪽 운동장은 안 돼', linkedFactIds: ['pg-what', 'pg-where'] },
    { id: 'pg-gf-act', category: 'action', text: '동쪽 운동장으로 가자', linkedFactIds: ['pg-alt'] },
  ],
  'playground-guide-newListener': [
    { id: 'pg-gn-core', category: 'coreFact', text: '금요일까지는', linkedFactIds: ['pg-when'] },
    { id: 'pg-gn-core2', category: 'coreFact', text: '서쪽 운동장을 쓸 수 없어서', linkedFactIds: ['pg-what', 'pg-where'] },
    { id: 'pg-gn-act', category: 'action', text: '동쪽 운동장으로 가 주세요', linkedFactIds: ['pg-alt'] },
    {
      id: 'pg-gn-detail',
      category: 'coreFact',
      text: '동쪽 운동장은 본관 뒤편이에요',
      isNewFact: true,
    },
  ],
  'playground-guide-class': [
    { id: 'pg-gc-core', category: 'coreFact', text: '금요일까지', linkedFactIds: ['pg-when'] },
    { id: 'pg-gc-core2', category: 'coreFact', text: '서쪽 운동장 사용을 금지합니다', linkedFactIds: ['pg-what', 'pg-where'] },
    { id: 'pg-gc-act', category: 'action', text: '동쪽 운동장을 이용해 주세요', linkedFactIds: ['pg-alt'] },
  ],
  'playground-inform-class': [
    { id: 'pg-ic-title', category: 'title', text: '[운동장 안내]' },
    { id: 'pg-ic-core', category: 'coreFact', text: '금요일까지', linkedFactIds: ['pg-when'] },
    { id: 'pg-ic-core2', category: 'coreFact', text: '서쪽 운동장을 못 써요', linkedFactIds: ['pg-what', 'pg-where'] },
    { id: 'pg-ic-emph', category: 'emphasis', text: '동쪽으로 가 주세요.' },
  ],
  'playground-persuade-class': [
    { id: 'pg-pc-claim', category: 'coreFact', text: '금요일까지는', linkedFactIds: ['pg-when'] },
    { id: 'pg-pc-core2', category: 'coreFact', text: '서쪽 운동장을 사용할 수 없어서', linkedFactIds: ['pg-what', 'pg-where'] },
    { id: 'pg-pc-reason', category: 'reason', text: '안전하게 놀려면' },
    { id: 'pg-pc-act', category: 'action', text: '동쪽 운동장에서 놀아요', linkedFactIds: ['pg-alt'] },
  ],

  // ============ umbrella (우산 보관) ============
  'umbrella-guide-class': [
    { id: 'um-gc-core', category: 'coreFact', text: '비가 오는 날에는', linkedFactIds: ['um-when'] },
    { id: 'um-gc-core2', category: 'coreFact', text: '우산을 현관 우산꽂이에 꽂아요', linkedFactIds: ['um-what', 'um-where'] },
  ],
  'umbrella-request-class': [
    { id: 'um-rc-core', category: 'coreFact', text: '비가 오는 날에는', linkedFactIds: ['um-when'] },
    { id: 'um-rc-core2', category: 'coreFact', text: '우산을 현관 우산꽂이에', linkedFactIds: ['um-what', 'um-where'] },
    { id: 'um-rc-act', category: 'action', text: '꽂아 주세요' },
    { id: 'um-rc-thanks', category: 'polite', text: '감사합니다.' },
  ],

  // ============ exhibit (학급 전시) ============
  'exhibit-inform-class': [
    { id: 'ex-ic-title', category: 'title', text: '[학급 전시 안내]' },
    { id: 'ex-ic-core', category: 'coreFact', text: '다음 주 월요일까지', linkedFactIds: ['ex-when'] },
    { id: 'ex-ic-core2', category: 'coreFact', text: '전시 작품 제목표를 내 주세요', linkedFactIds: ['ex-what', 'ex-who'] },
    { id: 'ex-ic-emph', category: 'emphasis', text: '늦지 마세요.' },
  ],
  'exhibit-inform-newListener': [
    { id: 'ex-in-title', category: 'title', text: '[우리 반 전시 안내]' },
    { id: 'ex-in-core', category: 'coreFact', text: '다음 주 월요일까지', linkedFactIds: ['ex-when'] },
    { id: 'ex-in-core2', category: 'coreFact', text: '전시 작품 제목표를 내 주세요', linkedFactIds: ['ex-what', 'ex-who'] },
    {
      id: 'ex-in-detail',
      category: 'coreFact',
      text: '제목표에는 작품 이름을 적어요',
      isNewFact: true,
    },
  ],
  'exhibit-guide-class': [
    { id: 'ex-gc-core', category: 'coreFact', text: '다음 주 월요일까지', linkedFactIds: ['ex-when'] },
    { id: 'ex-gc-core2', category: 'coreFact', text: '전시 작품의 제목표를 적어서', linkedFactIds: ['ex-what', 'ex-who'] },
    { id: 'ex-gc-act', category: 'action', text: '선생님께 제출해 주세요' },
  ],
  'exhibit-guide-newListener': [
    { id: 'ex-gn-core', category: 'coreFact', text: '다음 주 월요일까지', linkedFactIds: ['ex-when'] },
    { id: 'ex-gn-core2', category: 'coreFact', text: '전시할 작품의 제목표를', linkedFactIds: ['ex-what', 'ex-who'] },
    { id: 'ex-gn-act', category: 'action', text: '작성해서 내 주세요' },
    {
      id: 'ex-gn-detail',
      category: 'coreFact',
      text: '제목표 양식은 교탁에 있어요',
      isNewFact: true,
    },
  ],
  'exhibit-persuade-class': [
    { id: 'ex-pc-claim', category: 'coreFact', text: '다음 주 월요일까지', linkedFactIds: ['ex-when'] },
    { id: 'ex-pc-core2', category: 'coreFact', text: '전시 작품 제목표를 내요', linkedFactIds: ['ex-what', 'ex-who'] },
    { id: 'ex-pc-reason', category: 'reason', text: '제목표가 있어야 관람객이 작품을 잘 이해할 수 있거든요' },
    { id: 'ex-pc-act', category: 'action', text: '함께 준비해요' },
  ],
  'exhibit-request-friend': [
    { id: 'ex-rf-core', category: 'coreFact', text: '다음 주 월요일까지', linkedFactIds: ['ex-when'] },
    { id: 'ex-rf-core2', category: 'coreFact', text: '네 작품 제목표를', linkedFactIds: ['ex-what', 'ex-who'] },
    { id: 'ex-rf-act', category: 'action', text: '부탁해!' },
    { id: 'ex-rf-polite', category: 'polite', text: '미리 고마워!' },
  ],
  'exhibit-request-class': [
    { id: 'ex-rc-core', category: 'coreFact', text: '다음 주 월요일까지', linkedFactIds: ['ex-when'] },
    { id: 'ex-rc-core2', category: 'coreFact', text: '전시 작품 제목표를', linkedFactIds: ['ex-what', 'ex-who'] },
    { id: 'ex-rc-act', category: 'polite', text: '부탁드립니다' },
  ],
  'exhibit-request-teacher': [
    { id: 'ex-rt-core', category: 'coreFact', text: '다음 주 월요일까지', linkedFactIds: ['ex-when'] },
    { id: 'ex-rt-core2', category: 'coreFact', text: '전시 작품 제목표를', linkedFactIds: ['ex-what', 'ex-who'] },
    { id: 'ex-rt-act', category: 'polite', text: '제출하겠습니다' },
  ],

  // ============ plant (교실 식물) ============
  // 핵심: '물을 주다' 행동 = pl-what. action 조각이 pl-what 를 커버.
  'plant-request-friend': [
    { id: 'pl-rf-core', category: 'coreFact', text: '금요일 오후에', linkedFactIds: ['pl-when'] },
    { id: 'pl-rf-core2', category: 'coreFact', text: '창가 식물에', linkedFactIds: ['pl-where'] },
    { id: 'pl-rf-core3', category: 'coreFact', text: '물 한 컵을', linkedFactIds: ['pl-qty'] },
    { id: 'pl-rf-act', category: 'action', text: '부탁해!', linkedFactIds: ['pl-what'] },
    { id: 'pl-rf-cmd', category: 'action', text: '당장 물 줘!', isExaggeration: true },
  ],
  'plant-request-class': [
    { id: 'pl-rc-core', category: 'coreFact', text: '금요일 오후에', linkedFactIds: ['pl-when'] },
    { id: 'pl-rc-core2', category: 'coreFact', text: '창가 식물에', linkedFactIds: ['pl-where'] },
    { id: 'pl-rc-core3', category: 'coreFact', text: '물 한 컵을', linkedFactIds: ['pl-qty'] },
    { id: 'pl-rc-act', category: 'action', text: '부탁드립니다', linkedFactIds: ['pl-what'] },
    { id: 'pl-rc-thanks', category: 'polite', text: '감사합니다.' },
  ],
  'plant-guide-class': [
    { id: 'pl-gc-core', category: 'coreFact', text: '금요일 오후에', linkedFactIds: ['pl-when'] },
    { id: 'pl-gc-core2', category: 'coreFact', text: '창가 식물에 물 한 컵을', linkedFactIds: ['pl-where', 'pl-qty'] },
    { id: 'pl-gc-act', category: 'action', text: '주세요', linkedFactIds: ['pl-what'] },
  ],
  'plant-persuade-class': [
    { id: 'pl-pc-claim', category: 'coreFact', text: '금요일 오후에', linkedFactIds: ['pl-when'] },
    { id: 'pl-pc-core2', category: 'coreFact', text: '창가 식물에 물 한 컵을 줘요', linkedFactIds: ['pl-where', 'pl-qty', 'pl-what'] },
    { id: 'pl-pc-reason', category: 'reason', text: '식물이 마르지 않게 하려면 물이 필요해요' },
    { id: 'pl-pc-act', category: 'action', text: '함께 돌봐요' },
  ],

  // ============ readingWeek (읽기 주간) ============
  'readingWeek-persuade-class': [
    { id: 'rw-pc-claim', category: 'coreFact', text: '이번 주 매일 책을 읽어 봐요', linkedFactIds: ['rw-what', 'rw-when'] },
    { id: 'rw-pc-reason', category: 'reason', text: '20분씩 읽고 한 줄을 기록하면', linkedFactIds: ['rw-qty'] },
    { id: 'rw-pc-effect', category: 'reason', text: '읽은 내용을 다시 떠올릴 수 있어요' },
    { id: 'rw-pc-act', category: 'action', text: '함께 시작해 봐요' },
  ],
  'readingWeek-persuade-friend': [
    { id: 'rw-pf-claim', category: 'coreFact', text: '이번 주 매일 책을 읽자', linkedFactIds: ['rw-what', 'rw-when'] },
    { id: 'rw-pf-reason', category: 'reason', text: '20분씩 읽고 한 줄 적으면', linkedFactIds: ['rw-qty'] },
    { id: 'rw-pf-effect', category: 'reason', text: '읽은 내용이 더 오래 남아' },
    { id: 'rw-pf-bad', category: 'reason', text: '안 하면 후회할걸', isExaggeration: true },
  ],
  'readingWeek-inform-class': [
    { id: 'rw-ic-title', category: 'title', text: '[읽기 주간 안내]' },
    { id: 'rw-ic-core', category: 'coreFact', text: '이번 주에는 매일', linkedFactIds: ['rw-when'] },
    { id: 'rw-ic-core2', category: 'coreFact', text: '20분씩 읽고 한 줄을 적어요', linkedFactIds: ['rw-what', 'rw-qty'] },
  ],
};

// 사실 카드 × 목적 × 독자 조합의 조각을 반환
export function getPieceBundle(
  factCaseId: string,
  purpose: Purpose,
  audience: Audience
): SentencePiece[] {
  const key = `${factCaseId}-${purpose}-${audience}` as BundleKey;
  return BUNDLES[key] ?? [];
}

// 실제로 준비된 조합만 선택 화면에 노출하기 위한 독자 목록
export function getAvailableAudiences(
  factCaseId: string,
  purpose: Purpose
): Audience[] {
  const prefix = `${factCaseId}-${purpose}-`;
  return Object.keys(BUNDLES)
    .filter((key) => key.startsWith(prefix))
    .map((key) => key.slice(prefix.length) as Audience);
}

// 콘텐츠 계약 테스트와 개발 검증에서 모든 조각을 순회할 수 있도록 제공
export function getAllSentencePieces(): SentencePiece[] {
  return Object.values(BUNDLES).flat();
}
