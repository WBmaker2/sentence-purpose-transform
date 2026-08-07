import type { Purpose, PurposeMeta } from './types';

// 사양 5.2 목적 카드 — MVP 목적은 네 가지로 제한
// '명령하기'/'비난하기'는 별도 성공 목적으로 만들지 않는다 (사양 5.2)
export const PURPOSE_CARDS: Record<Purpose, PurposeMeta> = {
  inform: {
    id: 'inform',
    name: '알리기',
    icon: '📢',
    short: '핵심 사실을 빠르고 분명하게',
    description: '알아야 할 사실을 한눈에 읽히도록 전합니다. 불필요한 인사말을 줄이고 시간·장소를 앞에 배치해요.',
    requiredElements: ['핵심 사실', '간결함'],
    optionalElements: ['제목', '강조'],
  },
  guide: {
    id: 'guide',
    name: '안내하기',
    icon: '🧭',
    short: '해야 할 행동과 순서를',
    description: '독자가 무엇을, 어떻게, 언제까지 해야 하는지 알 수 있게 돕습니다. 장소와 조건을 분명히 해요.',
    requiredElements: ['대상', '행동', '순서', '조건'],
    optionalElements: ['위치 설명', '주의'],
  },
  persuade: {
    id: 'persuade',
    name: '설득하기',
    icon: '💡',
    short: '주장과 이유·근거를 연결',
    description: '왜 그렇게 해야 하는지 이유와 근거를 붙여 생각이나 행동의 변화를 제안합니다. 압박이나 비난은 쓰지 않아요.',
    requiredElements: ['주장', '이유 또는 근거', '제안'],
    optionalElements: ['예상 효과', '질문'],
  },
  request: {
    id: 'request',
    name: '부탁하기',
    icon: '🙏',
    short: '공손하고 구체적으로 요청',
    description: '원하는 행동과 시점을 구체적으로, 그리고 상대에게 맞는 공손한 말투로 부탁합니다.',
    requiredElements: ['요청 행동', '대상', '시점'],
    optionalElements: ['공손 표현', '감사'],
  },
};

export const PURPOSE_ORDER: Purpose[] = [
  'inform',
  'guide',
  'persuade',
  'request',
];

export const PURPOSE_LABEL: Record<Purpose, string> = {
  inform: '알리기',
  guide: '안내하기',
  persuade: '설득하기',
  request: '부탁하기',
};
