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
  { date: '2026-08-06', text: '사실을 지키며 목적과 독자에 맞게 문장을 바꾸는 연습을 시작했어요' },
  { date: '2026-08-06', text: '사실 금고에서 지킬 사실을 찾고, 목적 카드와 5개 변환 미션을 추가했어요' },
  { date: '2026-08-06', text: '여러 가지 알맞은 답과 독자별 도움말을 더했어요' },
  { date: '2026-08-06', text: '단계 버튼을 쉽게 찾고, 작은 화면과 키보드로도 편하게 사용할 수 있게 했어요' },
  { date: '2026-08-22', text: '목적에 꼭 필요한 표현과 알맞은 문장 조각을 마련하고, 미션 5를 끝내는 방법을 더 분명하게 했어요' },
  { date: '2026-08-22', text: '업데이트 창을 열고 버튼을 누르고 결과를 복사하는 방법을 더 편하게 했어요' },
  { date: '2026-08-31', text: '단계가 바뀌면 새 안내를 바로 보여 주고, 선택과 버튼 사용을 더 쉽게 했어요' },
];
