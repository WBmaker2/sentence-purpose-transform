import type { FeedbackKey } from './types';

// 사양 11.1 선택 피드백 — 절차 중심 문구 ('틀렸어요' 금지, 사양 13절)
export const FEEDBACK_MESSAGES: Record<FeedbackKey, string> = {
  missingFact:
    '시간·장소·수량 중 빠진 정보가 있는지 확인해 보세요.',
  purposeElementsMissing:
    '선택한 목적에 필요한 요소를 모두 넣어야 다음 단계로 갈 수 있어요.',
  audienceMissing:
    '처음 듣는 사람이라면 어디에서 무엇을 해야 하는지 더 알려 주세요.',
  audienceTooDetailed:
    '어린 독자에게는 핵심 사실과 해야 할 행동만 짧고 구체적으로 남겨 보세요.',
  requestLikeCommand:
    '원하는 행동과 시점을 남기면서 공손한 요청으로 바꿔 보세요.',
  addedFact:
    '표현은 바꿀 수 있지만 원래 사실보다 크게 말하면 안 돼요.',
  allGood:
    '사실을 지키면서 목적과 독자에 맞게 표현했어요.',
};
