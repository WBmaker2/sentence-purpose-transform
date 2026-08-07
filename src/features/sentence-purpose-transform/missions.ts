import type { MissionDef } from './useSentenceTransformState';
import type { Purpose } from '../../data/types';

// 사양 9절 MVP 미션 구성
export const MISSIONS: MissionDef[] = [
  {
    id: 0,
    title: '사실 보존 금고',
    desc: '한 문장에서 반드시 지켜야 할 사실과 바꿔도 되는 표현을 나눠 보아요.',
    factCaseId: 'libraryBin',
  },
  {
    id: 1,
    title: '친구에게 빠르게 알리기',
    desc: '도서관 반납함 사실을 친구 한 명에게 한눈에 읽히게 알려요.',
    factCaseId: 'libraryBin',
    fixedPurpose: 'inform',
    fixedAudience: 'friend',
  },
  {
    id: 2,
    title: '처음 듣는 사람에게 안내하기',
    desc: '운동장 공사 사실을 처음 듣는 친구에게 알기 쉽게 안내해요.',
    factCaseId: 'playground',
    fixedPurpose: 'guide',
    fixedAudience: 'newListener',
  },
  {
    id: 3,
    title: '근거를 넣어 설득하기',
    desc: '읽기 주간 참여를 학급 친구들에게 이유와 근거로 권해요.',
    factCaseId: 'readingWeek',
    fixedPurpose: 'persuade',
    fixedAudience: 'class',
  },
  {
    id: 4,
    title: '공손하게 부탁하기',
    desc: '교실 식물에 물 주는 일을 친구에게 공손하게 부탁해요.',
    factCaseId: 'plant',
    fixedPurpose: 'request',
    fixedAudience: 'friend',
  },
  {
    id: 5,
    title: '한 사실 네 목적 변환소',
    desc: '학급 전시 사실 하나를 알리기·안내·설득·부탁 네 목적으로 바꿔 비교해요.',
    factCaseId: 'exhibit',
    purposeOrder: ['inform', 'guide', 'persuade', 'request'] as Purpose[],
  },
];

// 사양 20절 업데이트 내역
export const CHANGELOG = [
  { date: '2026-08-06', text: '최초 MVP 설계: 사실 보존과 목적·독자별 문장 변환' },
  { date: '2026-08-06', text: '사실 금고·목적 카드·5개 변환 미션 추가' },
  { date: '2026-08-06', text: '복수 정답 피드백과 독자별 설명 힌트 보강' },
  { date: '2026-08-06', text: 'gi-pulse 단계 안내·모바일·키보드 접근성 적용' },
];
