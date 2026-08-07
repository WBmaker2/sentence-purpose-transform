import type { Audience, AudienceMeta } from './types';

// 사양 5.3 독자 카드 — 나이만이 아니라 '얼마나 알고 있는가'·'어떤 행동을 해야 하는가'·'어떤 말투가 맞는가'를 함께 제시
export const AUDIENCE_CARDS: Record<Audience, AudienceMeta> = {
  friend: {
    id: 'friend',
    name: '친한 친구 한 명',
    icon: '🧑‍🤝‍🧑',
    short: '이미 아는 사이',
    description: '이미 공유된 맥락이 있어 짧게 써도 통합니다.',
    backgroundHint: '상황을 대부분 알고 있어요',
    toneHint: '편안하고 친근한 말투',
    detailHint: '배경 설명을 짧게 줄여도 돼요',
  },
  newListener: {
    id: 'newListener',
    name: '처음 만나는 학급 친구',
    icon: '👋',
    short: '상황을 모르는 사람',
    description: '장소·시간·행동의 배경을 더 분명히 알려 주어야 해요.',
    backgroundHint: '상황을 처음 들어요',
    toneHint: '정중하면서 친절한 말투',
    detailHint: '어디서 무엇을 해야 하는지 더 자세히',
  },
  class: {
    id: 'class',
    name: '학급 전체',
    icon: '🏫',
    short: '여러 명에게 동시에',
    description: '여러 사람이 한꺼번에 이해하고 행동할 수 있도록 정리합니다.',
    backgroundHint: '상황을 아는 사람과 모르는 사람이 섞여 있어요',
    toneHint: '차분하고 공적인 말투',
    detailHint: '행동 순서와 조건을 분명히',
  },
  teacher: {
    id: 'teacher',
    name: '선생님·관리자',
    icon: '👩‍🏫',
    short: '공손한 요청이 필요한 대상',
    description: '공손한 요청과 이유를 함께 전합니다.',
    backgroundHint: '상황을 잘 모를 수 있어요',
    toneHint: '공손하고 정중한 말투',
    detailHint: '이유와 근거를 함께',
  },
  youngerStudent: {
    id: 'youngerStudent',
    name: '어린 동생',
    icon: '🧒',
    short: '어려운 말은 피하기',
    description: '어려운 말 대신 짧고 구체적인 표현을 써요.',
    backgroundHint: '글자나 개념이 어려울 수 있어요',
    toneHint: '부드럽고 알기 쉬운 말투',
    detailHint: '짧은 문장과 구체적인 행동',
  },
};

export const AUDIENCE_ORDER: Audience[] = [
  'friend',
  'newListener',
  'class',
  'teacher',
  'youngerStudent',
];

export const AUDIENCE_LABEL: Record<Audience, string> = {
  friend: '친한 친구 한 명',
  newListener: '처음 만나는 학급 친구',
  class: '학급 전체',
  teacher: '선생님·관리자',
  youngerStudent: '어린 동생',
};
