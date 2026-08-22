import type { FactCase } from './types';

// 사양 7.1 가상 사실 자료 — 모두 가상 '학교 소식 편집실' 설정
// 시간·요일·장소·수량은 변환 전후에 동일해야 한다 (사양 7.1)
// required=true 인 사실은 반드시 보존해야 한다 (사양 5.1, 10.1)
export const FACT_CASES: Record<string, FactCase> = {
  libraryBin: {
    id: 'libraryBin',
    title: '도서관 반납함',
    baseSentence: '도서관 반납함은 수요일 오후 5시에 비웁니다.',
    supportedPurposes: ['inform', 'guide', 'request'],
    supportedAudiences: ['friend', 'class', 'teacher', 'youngerStudent', 'newListener'],
    factUnits: [
      { id: 'lb-what', label: '무엇', text: '도서관 반납함을 비운다', required: true, kind: 'what' },
      { id: 'lb-when', label: '언제', text: '수요일 오후 5시', required: true, kind: 'when' },
      { id: 'lb-who', label: '누가', text: '도서관 당번', required: false, kind: 'who' },
      { id: 'lb-where', label: '어디서', text: '도서관', required: true, kind: 'where' },
    ],
    acceptableVariants: [
      {
        id: 'lb-v1',
        purpose: 'inform',
        audience: 'friend',
        sentence: '수요일 5시에 도서관 반납함 비운다!',
        preservedFactIds: ['lb-what', 'lb-when', 'lb-where'],
        effectTags: ['빠르게 이해됨'],
        explanation: '시간과 장소를 앞에 두어 한눈에 읽혀요.',
      },
    ],
  },

  playground: {
    id: 'playground',
    title: '운동장 공사',
    baseSentence: '금요일까지 서쪽 운동장을 사용할 수 없습니다.',
    supportedPurposes: ['inform', 'guide', 'persuade'],
    supportedAudiences: ['friend', 'class', 'teacher', 'youngerStudent', 'newListener'],
    factUnits: [
      { id: 'pg-what', label: '무엇', text: '운동장 사용 금지', required: true, kind: 'what' },
      { id: 'pg-when', label: '기간', text: '금요일까지', required: true, kind: 'when' },
      { id: 'pg-where', label: '어디', text: '서쪽 운동장', required: true, kind: 'where' },
      { id: 'pg-alt', label: '대안', text: '동쪽 운동장 이용', required: false, kind: 'condition' },
    ],
    acceptableVariants: [
      {
        id: 'pg-v1',
        purpose: 'guide',
        audience: 'newListener',
        sentence: '금요일까지는 서쪽 운동장을 쓸 수 없으니, 동쪽 운동장으로 가 주세요.',
        preservedFactIds: ['pg-what', 'pg-when', 'pg-where', 'pg-alt'],
        effectTags: ['행동 순서가 분명함'],
        explanation: '처음 듣는 사람에게 조건과 대안 행동을 분명히 알려 줘요.',
      },
    ],
  },

  umbrella: {
    id: 'umbrella',
    title: '우산 보관',
    baseSentence: '비가 오는 날에는 우산을 현관 우산꽂이에 꽂습니다.',
    supportedPurposes: ['guide', 'request'],
    supportedAudiences: ['friend', 'class', 'teacher', 'youngerStudent', 'newListener'],
    factUnits: [
      { id: 'um-what', label: '무엇', text: '우산을 우산꽂이에 꽂는다', required: true, kind: 'what' },
      { id: 'um-when', label: '조건', text: '비가 오는 날', required: true, kind: 'condition' },
      { id: 'um-where', label: '어디', text: '현관 우산꽂이', required: true, kind: 'where' },
    ],
    acceptableVariants: [
      {
        id: 'um-v1',
        purpose: 'request',
        audience: 'class',
        sentence: '비가 오는 날에는 우산을 현관 우산꽂이에 꽂아 주세요.',
        preservedFactIds: ['um-what', 'um-when', 'um-where'],
        effectTags: ['공손하게 요청함'],
        explanation: '조건과 장소를 남기면서 공손한 요청으로 바꿨어요.',
      },
    ],
  },

  exhibit: {
    id: 'exhibit',
    title: '학급 전시',
    baseSentence: '다음 주 월요일까지 학급 전시 작품의 제목표를 제출합니다.',
    supportedPurposes: ['inform', 'guide', 'request'],
    supportedAudiences: ['friend', 'class', 'teacher', 'youngerStudent', 'newListener'],
    factUnits: [
      { id: 'ex-what', label: '무엇', text: '작품 제목표 제출', required: true, kind: 'what' },
      { id: 'ex-when', label: '기한', text: '다음 주 월요일까지', required: true, kind: 'when' },
      { id: 'ex-who', label: '대상', text: '학급 전시 작품', required: true, kind: 'target' },
    ],
    acceptableVariants: [
      {
        id: 'ex-v1',
        purpose: 'inform',
        audience: 'class',
        sentence: '다음 주 월요일까지 전시 작품 제목표를 내 주세요.',
        preservedFactIds: ['ex-what', 'ex-when', 'ex-who'],
        effectTags: ['빠르게 이해됨'],
        explanation: '기한과 행동을 앞에 두어 한눈에 읽혀요.',
      },
    ],
  },

  plant: {
    id: 'plant',
    title: '교실 식물',
    baseSentence: '금요일 오후에 창가 식물에 물을 한 컵 줍니다.',
    supportedPurposes: ['guide', 'request', 'persuade'],
    supportedAudiences: ['friend', 'class', 'teacher', 'youngerStudent', 'newListener'],
    factUnits: [
      { id: 'pl-what', label: '무엇', text: '식물에 물을 준다', required: true, kind: 'what' },
      { id: 'pl-when', label: '언제', text: '금요일 오후', required: true, kind: 'when' },
      { id: 'pl-where', label: '대상', text: '창가 식물', required: true, kind: 'where' },
      { id: 'pl-qty', label: '수량', text: '물 한 컵', required: true, kind: 'quantity' },
    ],
    acceptableVariants: [
      {
        id: 'pl-v1',
        purpose: 'request',
        audience: 'friend',
        sentence: '금요일 오후에 창가 식물에 물 한 컵만 부탁해!',
        preservedFactIds: ['pl-what', 'pl-when', 'pl-where', 'pl-qty'],
        effectTags: ['공손하게 요청함'],
        explanation: '시간·대상·수량을 그대로 두면서 친구에게 맞는 부탁으로 바꿨어요.',
      },
    ],
  },

  readingWeek: {
    id: 'readingWeek',
    title: '읽기 주간',
    baseSentence: '이번 주에는 매일 책을 20분씩 읽고 한 줄씩 기록합니다.',
    supportedPurposes: ['inform', 'persuade'],
    supportedAudiences: ['friend', 'class', 'teacher', 'youngerStudent', 'newListener'],
    factUnits: [
      { id: 'rw-what', label: '무엇', text: '책 읽고 한 줄 기록', required: true, kind: 'what' },
      { id: 'rw-when', label: '기간', text: '이번 주 매일', required: true, kind: 'when' },
      { id: 'rw-qty', label: '수량', text: '20분씩', required: true, kind: 'quantity' },
    ],
    acceptableVariants: [
      {
        id: 'rw-v1',
        purpose: 'persuade',
        audience: 'class',
        sentence: '20분씩 읽고 한 줄을 기록하면 읽은 내용을 다시 떠올릴 수 있어요. 이번 주 함께 해 봐요.',
        preservedFactIds: ['rw-what', 'rw-when', 'rw-qty'],
        effectTags: ['믿을 만한 근거가 보임'],
        explanation: '주장과 근거, 행동 제안을 연결했어요.',
      },
    ],
  },
};

export type FactCaseId =
  | 'libraryBin'
  | 'playground'
  | 'umbrella'
  | 'exhibit'
  | 'plant'
  | 'readingWeek';

export const FACT_ORDER: FactCaseId[] = [
  'libraryBin',
  'playground',
  'umbrella',
  'exhibit',
  'plant',
  'readingWeek',
];
