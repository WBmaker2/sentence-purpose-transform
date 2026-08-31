# Learner Text Inventory

- Root: `/Volumes/ External Drive 256G/Dev2/z-ai/sentence-purpose-transform`
- Files scanned: `36`
- Candidates: `787`
- Status: `triage only`; not a grade-level certification or automatic rewrite.

## Candidate strings

| Source | Surface | Text | Role hints | Review signals |
| --- | --- | --- | --- | --- |
| index.html:8:16 | text | 문장 목적 변환소 — 같은 사실을 목적과 독자에 맞게 바꾸는 국어 학습 앱 | learner-text-candidate | — |
| index.html:11:12 | text | 문장 목적 변환소 | learner-text-candidate | repeated-text |
| src/data/audienceCards.ts:3:29 | text | 얼마나 알고 있는가 | learner-text-candidate | — |
| src/data/audienceCards.ts:3:42 | text | 어떤 행동을 해야 하는가 | learner-text-candidate | — |
| src/data/audienceCards.ts:3:58 | text | 어떤 말투가 맞는가 | learner-text-candidate | — |
| src/data/audienceCards.ts:4:60 | text | = { friend: { id: 'friend', name: '친한 친구 한 명', icon: '🧑‍🤝‍🧑', short: '이미 아는 사이', description: '이미 공유된 맥락이 있어 짧게 써도 통합니다.', backgroundHint: '상황을 대부분 알고 있어요', toneHint: '편안하고 친근한 말투', detailHint: '배경 설명을 짧게 줄여도 돼요', }, newListener: { id: 'newListener', name: '처음 만나는 학급 친구', icon: '👋', short: '상황을 모르는 사람', description: '장소·시간·행동의 배경을 더 분명히 알려 주어야 해요.', backgroundHint: '상황을 처음 들어요', toneHint: '정중하면서 친절한 말투', detailHint: '어디서 무엇을 해야 하는지 더 자세히', }, class: { id: 'class', name: '학급 전체', icon: '🏫', short: '여러 명에게 동시에', description: '여러 사람이 한꺼번에 이해하고 행동할 수 있도록 정리합니다.', backgroundHint: '상황을 아는 사람과 모르는 사람이 섞여 있어요', toneHint: '차분하고 공적인 말투', detailHint: '행동 순서와 조건을 분명히', }, teacher: { id: 'teacher', name: '선생님·관리자', icon: '👩‍🏫', short: '공손한 요청이 필요한 대상', description: '공손한 요청과 이유를 함께 전합니다.', backgroundHint: '상황을 잘 모를 수 있어요', toneHint: '공손하고 정중한 말투', detailHint: '이유와 근거를 함께', }, youngerStudent: { id: 'youngerStudent', name: '어린 동생', icon: '🧒', short: '어려운 말은 피하기', description: '어려운 말 대신 짧고 구체적인 표현을 써요.', backgroundHint: '글자나 개념이 어려울 수 있어요', toneHint: '부드럽고 알기 쉬운 말투', detailHint: '짧은 문장과 구체적인 행동', }, }; export const AUDIENCE_ORDER: Audience[] = [ 'friend', 'newListener', 'class', 'teacher', 'youngerStudent', ]; export const AUDIENCE_LABEL: Record | hint | long-or-dense, technical-or-internal |
| src/data/audienceCards.ts:7:12 | text | 친한 친구 한 명 | learner-text-candidate | repeated-text |
| src/data/audienceCards.ts:9:13 | text | 이미 아는 사이 | learner-text-candidate | — |
| src/data/audienceCards.ts:10:19 | text | 이미 공유된 맥락이 있어 짧게 써도 통합니다. | learner-text-candidate | — |
| src/data/audienceCards.ts:11:22 | text | 상황을 대부분 알고 있어요 | hint | — |
| src/data/audienceCards.ts:12:16 | text | 편안하고 친근한 말투 | hint | — |
| src/data/audienceCards.ts:13:18 | text | 배경 설명을 짧게 줄여도 돼요 | hint | — |
| src/data/audienceCards.ts:17:12 | text | 처음 만나는 학급 친구 | learner-text-candidate | repeated-text |
| src/data/audienceCards.ts:19:13 | text | 상황을 모르는 사람 | learner-text-candidate | — |
| src/data/audienceCards.ts:20:19 | text | 장소·시간·행동의 배경을 더 분명히 알려 주어야 해요. | learner-text-candidate | — |
| src/data/audienceCards.ts:21:22 | text | 상황을 처음 들어요 | hint | — |
| src/data/audienceCards.ts:22:16 | text | 정중하면서 친절한 말투 | hint | — |
| src/data/audienceCards.ts:23:18 | text | 어디서 무엇을 해야 하는지 더 자세히 | hint | — |
| src/data/audienceCards.ts:27:12 | text | 학급 전체 | learner-text-candidate | repeated-text |
| src/data/audienceCards.ts:29:13 | text | 여러 명에게 동시에 | learner-text-candidate | — |
| src/data/audienceCards.ts:30:19 | text | 여러 사람이 한꺼번에 이해하고 행동할 수 있도록 정리합니다. | learner-text-candidate | — |
| src/data/audienceCards.ts:31:22 | text | 상황을 아는 사람과 모르는 사람이 섞여 있어요 | hint | — |
| src/data/audienceCards.ts:32:16 | text | 차분하고 공적인 말투 | hint | — |
| src/data/audienceCards.ts:33:18 | text | 행동 순서와 조건을 분명히 | hint | — |
| src/data/audienceCards.ts:37:12 | text | 선생님·관리자 | learner-text-candidate | repeated-text |
| src/data/audienceCards.ts:39:13 | text | 공손한 요청이 필요한 대상 | learner-text-candidate | — |
| src/data/audienceCards.ts:40:19 | text | 공손한 요청과 이유를 함께 전합니다. | learner-text-candidate | — |
| src/data/audienceCards.ts:41:22 | text | 상황을 잘 모를 수 있어요 | hint | — |
| src/data/audienceCards.ts:42:16 | text | 공손하고 정중한 말투 | hint | — |
| src/data/audienceCards.ts:43:18 | text | 이유와 근거를 함께 | hint | — |
| src/data/audienceCards.ts:47:12 | text | 어린 동생 | learner-text-candidate | repeated-text |
| src/data/audienceCards.ts:49:13 | text | 어려운 말은 피하기 | learner-text-candidate | — |
| src/data/audienceCards.ts:50:19 | text | 어려운 말 대신 짧고 구체적인 표현을 써요. | learner-text-candidate | — |
| src/data/audienceCards.ts:51:22 | text | 글자나 개념이 어려울 수 있어요 | hint | — |
| src/data/audienceCards.ts:52:16 | text | 부드럽고 알기 쉬운 말투 | hint | — |
| src/data/audienceCards.ts:53:18 | text | 짧은 문장과 구체적인 행동 | hint | — |
| src/data/audienceCards.ts:66:12 | text | 친한 친구 한 명 | learner-text-candidate | repeated-text |
| src/data/audienceCards.ts:67:17 | text | 처음 만나는 학급 친구 | learner-text-candidate | repeated-text |
| src/data/audienceCards.ts:68:11 | text | 학급 전체 | learner-text-candidate | repeated-text |
| src/data/audienceCards.ts:69:13 | text | 선생님·관리자 | learner-text-candidate | repeated-text |
| src/data/audienceCards.ts:70:20 | text | 어린 동생 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:3:29 | text | 학교 소식 편집실 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:9:13 | text | 도서관 반납함 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:10:20 | text | 도서관 반납함은 수요일 오후 5시에 비웁니다. | learner-text-candidate | — |
| src/data/factCases.ts:14:14 | text | lb-what | learner-text-candidate | — |
| src/data/factCases.ts:14:32 | text | 무엇 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:14:44 | text | 도서관 반납함을 비운다 | learner-text-candidate | — |
| src/data/factCases.ts:14:82 | text | what | learner-text-candidate | repeated-text |
| src/data/factCases.ts:15:14 | text | lb-when | learner-text-candidate | — |
| src/data/factCases.ts:15:32 | text | 언제 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:15:44 | text | 수요일 오후 5시 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:15:79 | text | when | learner-text-candidate | repeated-text |
| src/data/factCases.ts:16:14 | text | lb-who | learner-text-candidate | — |
| src/data/factCases.ts:16:31 | text | 누가 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:16:43 | text | 도서관 당번 | learner-text-candidate | — |
| src/data/factCases.ts:16:76 | text | who | learner-text-candidate | — |
| src/data/factCases.ts:17:14 | text | lb-where | learner-text-candidate | — |
| src/data/factCases.ts:17:33 | text | 어디서 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:17:46 | text | 도서관 | learner-text-candidate | — |
| src/data/factCases.ts:17:75 | text | where | learner-text-candidate | repeated-text |
| src/data/factCases.ts:24:20 | text | 수요일 5시에 도서관 반납함 비운다! | learner-text-candidate | — |
| src/data/factCases.ts:26:23 | text | 빠르게 이해됨 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:27:23 | text | 시간과 장소를 앞에 두어 한눈에 읽혀요. | learner-text-candidate | — |
| src/data/factCases.ts:34:13 | text | 운동장 공사 | learner-text-candidate | — |
| src/data/factCases.ts:35:20 | text | 금요일까지 서쪽 운동장을 사용할 수 없습니다. | learner-text-candidate | — |
| src/data/factCases.ts:39:14 | text | pg-what | learner-text-candidate | — |
| src/data/factCases.ts:39:32 | text | 무엇 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:39:44 | text | 운동장 사용 금지 | learner-text-candidate | — |
| src/data/factCases.ts:39:79 | text | what | learner-text-candidate | repeated-text |
| src/data/factCases.ts:40:14 | text | pg-when | learner-text-candidate | — |
| src/data/factCases.ts:40:32 | text | 기간 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:40:44 | text | 금요일까지 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:40:75 | text | when | learner-text-candidate | repeated-text |
| src/data/factCases.ts:41:14 | text | pg-where | learner-text-candidate | — |
| src/data/factCases.ts:41:33 | text | 어디 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:41:45 | text | 서쪽 운동장 | learner-text-candidate | — |
| src/data/factCases.ts:41:77 | text | where | learner-text-candidate | repeated-text |
| src/data/factCases.ts:42:14 | text | pg-alt | learner-text-candidate | — |
| src/data/factCases.ts:42:31 | text | 대안 | learner-text-candidate | — |
| src/data/factCases.ts:42:43 | text | 동쪽 운동장 이용 | learner-text-candidate | — |
| src/data/factCases.ts:42:79 | text | condition | learner-text-candidate | repeated-text |
| src/data/factCases.ts:49:20 | text | 금요일까지는 서쪽 운동장을 쓸 수 없으니, 동쪽 운동장으로 가 주세요. | learner-text-candidate | — |
| src/data/factCases.ts:51:23 | text | 행동 순서가 분명함 | learner-text-candidate | — |
| src/data/factCases.ts:52:23 | text | 처음 듣는 사람에게 조건과 대안 행동을 분명히 알려 줘요. | learner-text-candidate | — |
| src/data/factCases.ts:59:13 | text | 우산 보관 | learner-text-candidate | — |
| src/data/factCases.ts:60:20 | text | 비가 오는 날에는 우산을 현관 우산꽂이에 꽂습니다. | learner-text-candidate | — |
| src/data/factCases.ts:64:14 | text | um-what | learner-text-candidate | — |
| src/data/factCases.ts:64:32 | text | 무엇 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:64:44 | text | 우산을 우산꽂이에 꽂는다 | learner-text-candidate | — |
| src/data/factCases.ts:64:83 | text | what | learner-text-candidate | repeated-text |
| src/data/factCases.ts:65:14 | text | um-when | learner-text-candidate | — |
| src/data/factCases.ts:65:32 | text | 조건 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:65:44 | text | 비가 오는 날 | learner-text-candidate | — |
| src/data/factCases.ts:65:77 | text | condition | learner-text-candidate | repeated-text |
| src/data/factCases.ts:66:14 | text | um-where | learner-text-candidate | — |
| src/data/factCases.ts:66:33 | text | 어디 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:66:45 | text | 현관 우산꽂이 | learner-text-candidate | — |
| src/data/factCases.ts:66:78 | text | where | learner-text-candidate | repeated-text |
| src/data/factCases.ts:73:20 | text | 비가 오는 날에는 우산을 현관 우산꽂이에 꽂아 주세요. | learner-text-candidate | — |
| src/data/factCases.ts:75:23 | text | 공손하게 요청함 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:76:23 | text | 조건과 장소를 남기면서 공손한 요청으로 바꿨어요. | learner-text-candidate | — |
| src/data/factCases.ts:83:13 | text | 학급 전시 | learner-text-candidate | — |
| src/data/factCases.ts:84:20 | text | 다음 주 월요일까지 학급 전시 작품의 제목표를 제출합니다. | learner-text-candidate | abstract-or-formal |
| src/data/factCases.ts:88:14 | text | ex-what | learner-text-candidate | — |
| src/data/factCases.ts:88:32 | text | 무엇 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:88:44 | text | 작품 제목표 제출 | learner-text-candidate | abstract-or-formal |
| src/data/factCases.ts:88:79 | text | what | learner-text-candidate | repeated-text |
| src/data/factCases.ts:89:14 | text | ex-when | learner-text-candidate | — |
| src/data/factCases.ts:89:32 | text | 기한 | learner-text-candidate | — |
| src/data/factCases.ts:89:44 | text | 다음 주 월요일까지 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:89:80 | text | when | learner-text-candidate | repeated-text |
| src/data/factCases.ts:90:14 | text | ex-who | learner-text-candidate | — |
| src/data/factCases.ts:90:31 | text | 대상 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:90:43 | text | 학급 전시 작품 | learner-text-candidate | — |
| src/data/factCases.ts:90:77 | text | target | learner-text-candidate | — |
| src/data/factCases.ts:97:20 | text | 다음 주 월요일까지 전시 작품 제목표를 내 주세요. | learner-text-candidate | — |
| src/data/factCases.ts:99:23 | text | 빠르게 이해됨 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:100:23 | text | 기한과 행동을 앞에 두어 한눈에 읽혀요. | learner-text-candidate | — |
| src/data/factCases.ts:107:13 | text | 교실 식물 | learner-text-candidate | — |
| src/data/factCases.ts:108:20 | text | 금요일 오후에 창가 식물에 물을 한 컵 줍니다. | learner-text-candidate | — |
| src/data/factCases.ts:112:14 | text | pl-what | learner-text-candidate | — |
| src/data/factCases.ts:112:32 | text | 무엇 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:112:44 | text | 식물에 물을 준다 | learner-text-candidate | — |
| src/data/factCases.ts:112:79 | text | what | learner-text-candidate | repeated-text |
| src/data/factCases.ts:113:14 | text | pl-when | learner-text-candidate | — |
| src/data/factCases.ts:113:32 | text | 언제 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:113:44 | text | 금요일 오후 | learner-text-candidate | — |
| src/data/factCases.ts:113:76 | text | when | learner-text-candidate | repeated-text |
| src/data/factCases.ts:114:14 | text | pl-where | learner-text-candidate | — |
| src/data/factCases.ts:114:33 | text | 대상 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:114:45 | text | 창가 식물 | learner-text-candidate | — |
| src/data/factCases.ts:114:76 | text | where | learner-text-candidate | repeated-text |
| src/data/factCases.ts:115:14 | text | pl-qty | learner-text-candidate | — |
| src/data/factCases.ts:115:31 | text | 수량 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:115:43 | text | 물 한 컵 | learner-text-candidate | — |
| src/data/factCases.ts:115:74 | text | quantity | learner-text-candidate | repeated-text |
| src/data/factCases.ts:122:20 | text | 금요일 오후에 창가 식물에 물 한 컵만 부탁해! | learner-text-candidate | — |
| src/data/factCases.ts:124:23 | text | 공손하게 요청함 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:125:23 | text | 시간·대상·수량을 그대로 두면서 친구에게 맞는 부탁으로 바꿨어요. | learner-text-candidate | — |
| src/data/factCases.ts:132:13 | text | 읽기 주간 | learner-text-candidate | — |
| src/data/factCases.ts:133:20 | text | 이번 주에는 매일 책을 20분씩 읽고 한 줄씩 기록합니다. | learner-text-candidate | — |
| src/data/factCases.ts:137:14 | text | rw-what | learner-text-candidate | — |
| src/data/factCases.ts:137:32 | text | 무엇 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:137:44 | text | 책 읽고 한 줄 기록 | learner-text-candidate | — |
| src/data/factCases.ts:137:81 | text | what | learner-text-candidate | repeated-text |
| src/data/factCases.ts:138:14 | text | rw-when | learner-text-candidate | — |
| src/data/factCases.ts:138:32 | text | 기간 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:138:44 | text | 이번 주 매일 | learner-text-candidate | — |
| src/data/factCases.ts:138:77 | text | when | learner-text-candidate | repeated-text |
| src/data/factCases.ts:139:14 | text | rw-qty | learner-text-candidate | — |
| src/data/factCases.ts:139:31 | text | 수량 | learner-text-candidate | repeated-text |
| src/data/factCases.ts:139:43 | text | 20분씩 | learner-text-candidate | — |
| src/data/factCases.ts:139:73 | text | quantity | learner-text-candidate | repeated-text |
| src/data/factCases.ts:146:20 | text | 20분씩 읽고 한 줄을 기록하면 읽은 내용을 다시 떠올릴 수 있어요. 이번 주 함께 해 봐요. | learner-text-candidate | — |
| src/data/factCases.ts:148:23 | text | 믿을 만한 근거가 보임 | learner-text-candidate | — |
| src/data/factCases.ts:149:23 | text | 주장과 근거, 행동 제안을 연결했어요. | learner-text-candidate | — |
| src/data/feedbackRules.ts:3:32 | text | 틀렸어요 | feedback-or-error | shaming-tone |
| src/data/feedbackRules.ts:6:6 | text | 시간·장소·수량 중 빠진 정보가 있는지 확인해 보세요. | learner-text-candidate | — |
| src/data/feedbackRules.ts:8:6 | text | 선택한 목적에 필요한 요소를 모두 넣어야 다음 단계로 갈 수 있어요. | learner-text-candidate | — |
| src/data/feedbackRules.ts:10:6 | text | 처음 듣는 사람이라면 어디에서 무엇을 해야 하는지 더 알려 주세요. | learner-text-candidate | — |
| src/data/feedbackRules.ts:12:6 | text | 어린 독자에게는 핵심 사실과 해야 할 행동만 짧고 구체적으로 남겨 보세요. | learner-text-candidate | — |
| src/data/feedbackRules.ts:14:6 | text | 원하는 행동과 시점을 남기면서 공손한 요청으로 바꿔 보세요. | learner-text-candidate | — |
| src/data/feedbackRules.ts:16:6 | text | 표현은 바꿀 수 있지만 원래 사실보다 크게 말하면 안 돼요. | learner-text-candidate | — |
| src/data/feedbackRules.ts:18:6 | text | 사실을 지키면서 목적과 독자에 맞게 표현했어요. | learner-text-candidate | — |
| src/data/purposeCards.ts:4:5 | text | 명령하기 | learner-text-candidate | — |
| src/data/purposeCards.ts:4:12 | text | 비난하기 | learner-text-candidate | — |
| src/data/purposeCards.ts:5:57 | text | = { inform: { id: 'inform', name: '알리기', icon: '📢', short: '핵심 사실을 빠르고 분명하게', description: '알아야 할 사실을 한눈에 읽히도록 전합니다. 불필요한 인사말을 줄이고 시간·장소를 앞에 배치해요.', requiredElements: ['핵심 사실', '간결함'], optionalElements: ['제목', '강조'], }, guide: { id: 'guide', name: '안내하기', icon: '🧭', short: '해야 할 행동과 순서를', description: '독자가 무엇을, 어떻게, 언제까지 해야 하는지 알 수 있게 돕습니다. 장소와 조건을 분명히 해요.', requiredElements: ['대상', '행동', '순서', '조건'], optionalElements: ['위치 설명', '주의'], }, persuade: { id: 'persuade', name: '설득하기', icon: '💡', short: '주장과 이유·근거를 연결', description: '왜 그렇게 해야 하는지 이유와 근거를 붙여 생각이나 행동의 변화를 제안합니다. 압박이나 비난은 쓰지 않아요.', requiredElements: ['주장', '이유 또는 근거', '제안'], optionalElements: ['예상 효과', '질문'], }, request: { id: 'request', name: '부탁하기', icon: '🙏', short: '공손하고 구체적으로 요청', description: '원하는 행동과 시점을 구체적으로, 그리고 상대에게 맞는 공손한 말투로 부탁합니다.', requiredElements: ['요청 행동', '대상', '시점'], optionalElements: ['공손 표현', '감사'], }, }; export const PURPOSE_ORDER: Purpose[] = [ 'inform', 'guide', 'persuade', 'request', ]; export const PURPOSE_LABEL: Record | instruction | long-or-dense, multiple-conditions, technical-or-internal |
| src/data/purposeCards.ts:8:12 | text | 알리기 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:10:13 | text | 핵심 사실을 빠르고 분명하게 | learner-text-candidate | — |
| src/data/purposeCards.ts:11:19 | text | 알아야 할 사실을 한눈에 읽히도록 전합니다. 불필요한 인사말을 줄이고 시간·장소를 앞에 배치해요. | learner-text-candidate | — |
| src/data/purposeCards.ts:12:25 | text | 핵심 사실 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:12:34 | text | 간결함 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:13:25 | text | 제목 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:13:31 | text | 강조 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:17:12 | text | 안내하기 | instruction | repeated-text |
| src/data/purposeCards.ts:19:13 | text | 해야 할 행동과 순서를 | learner-text-candidate | — |
| src/data/purposeCards.ts:20:19 | text | 독자가 무엇을, 어떻게, 언제까지 해야 하는지 알 수 있게 돕습니다. 장소와 조건을 분명히 해요. | learner-text-candidate | — |
| src/data/purposeCards.ts:21:25 | text | 대상 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:21:31 | text | 행동 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:21:37 | text | 순서 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:21:43 | text | 조건 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:22:25 | text | 위치 설명 | learner-text-candidate | — |
| src/data/purposeCards.ts:22:34 | text | 주의 | learner-text-candidate | — |
| src/data/purposeCards.ts:26:12 | text | 설득하기 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:28:13 | text | 주장과 이유·근거를 연결 | learner-text-candidate | — |
| src/data/purposeCards.ts:29:19 | text | 왜 그렇게 해야 하는지 이유와 근거를 붙여 생각이나 행동의 변화를 제안합니다. 압박이나 비난은 쓰지 않아요. | learner-text-candidate | long-or-dense |
| src/data/purposeCards.ts:30:25 | text | 주장 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:30:31 | text | 이유 또는 근거 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:30:43 | text | 제안 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:31:25 | text | 예상 효과 | learner-text-candidate | — |
| src/data/purposeCards.ts:31:34 | text | 질문 | learner-text-candidate | — |
| src/data/purposeCards.ts:35:12 | text | 부탁하기 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:37:13 | text | 공손하고 구체적으로 요청 | learner-text-candidate | — |
| src/data/purposeCards.ts:38:19 | text | 원하는 행동과 시점을 구체적으로, 그리고 상대에게 맞는 공손한 말투로 부탁합니다. | learner-text-candidate | — |
| src/data/purposeCards.ts:39:25 | text | 요청 행동 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:39:34 | text | 대상 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:39:40 | text | 시점 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:40:25 | text | 공손 표현 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:40:34 | text | 감사 | learner-text-candidate | — |
| src/data/purposeCards.ts:52:12 | text | 알리기 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:53:11 | text | 안내하기 | instruction | repeated-text |
| src/data/purposeCards.ts:54:14 | text | 설득하기 | learner-text-candidate | repeated-text |
| src/data/purposeCards.ts:55:13 | text | 부탁하기 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:5:28 | text | 표현 | learner-text-candidate | — |
| src/data/sentencePieces.ts:7:31 | text | 도서관 반납함 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:14:12 | text | lb-if-title | instruction | — |
| src/data/sentencePieces.ts:14:37 | text | title | instruction | repeated-text |
| src/data/sentencePieces.ts:14:52 | text | [안내] | instruction | — |
| src/data/sentencePieces.ts:15:54 | text | 수요일 오후 5시에 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:16:55 | text | 도서관 반납함을 비워요 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:17:54 | text | 잊지 마! | learner-text-candidate | — |
| src/data/sentencePieces.ts:18:53 | text | 반납함이 아주 크게 막혀요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:21:12 | text | lb-ic-title | instruction | — |
| src/data/sentencePieces.ts:21:37 | text | title | instruction | repeated-text |
| src/data/sentencePieces.ts:21:52 | text | [도서관 안내] | instruction | — |
| src/data/sentencePieces.ts:22:54 | text | 수요일 오후 5시에 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:23:55 | text | 도서관 반납함을 비웁니다 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:24:54 | text | 꼭 확인해 주세요. | learner-text-candidate | — |
| src/data/sentencePieces.ts:27:12 | text | lb-in-title | instruction | — |
| src/data/sentencePieces.ts:27:37 | text | title | instruction | repeated-text |
| src/data/sentencePieces.ts:27:52 | text | [우리 학교 도서관 안내] | instruction | — |
| src/data/sentencePieces.ts:28:54 | text | 수요일 오후 5시에 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:29:55 | text | 도서관 반납함을 비웁니다 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:33:14 | text | 도서관 입구에 있는 반납함이에요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:38:54 | text | 수요일 오후 5시에 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:39:55 | text | 도서관 반납함을 비웁니다 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:40:52 | text | 안내해 주셔서 감사합니다. | instruction | — |
| src/data/sentencePieces.ts:43:54 | text | 수요일 5시에 | learner-text-candidate | — |
| src/data/sentencePieces.ts:44:55 | text | 도서관 반납함을 비워요 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:45:54 | text | 기억해 줘! | learner-text-candidate | — |
| src/data/sentencePieces.ts:48:54 | text | 수요일 오후 5시까지 | learner-text-candidate | — |
| src/data/sentencePieces.ts:49:55 | text | 도서관 반납함에 책을 넣어 주세요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:50:51 | text | 반납함은 5시에 비워져요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:53:54 | text | 수요일 오후 5시 전에 | learner-text-candidate | — |
| src/data/sentencePieces.ts:54:55 | text | 도서관 반납함을 비우니까 | learner-text-candidate | — |
| src/data/sentencePieces.ts:55:51 | text | 미리 책을 넣어 주세요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:56:54 | text | 감사합니다. | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:61:54 | text | 금요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:62:55 | text | 서쪽 운동장은 안 돼 | learner-text-candidate | — |
| src/data/sentencePieces.ts:63:51 | text | 동쪽 운동장으로 가자 | learner-text-candidate | — |
| src/data/sentencePieces.ts:66:54 | text | 금요일까지는 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:67:55 | text | 서쪽 운동장을 쓸 수 없어서 | learner-text-candidate | — |
| src/data/sentencePieces.ts:68:51 | text | 동쪽 운동장으로 가 주세요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:72:14 | text | 동쪽 운동장은 본관 뒤편이에요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:77:54 | text | 금요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:78:55 | text | 서쪽 운동장 사용을 금지합니다 | learner-text-candidate | — |
| src/data/sentencePieces.ts:79:51 | text | 동쪽 운동장을 이용해 주세요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:82:12 | text | pg-ic-title | instruction | — |
| src/data/sentencePieces.ts:82:37 | text | title | instruction | repeated-text |
| src/data/sentencePieces.ts:82:52 | text | [운동장 안내] | instruction | — |
| src/data/sentencePieces.ts:83:54 | text | 금요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:84:55 | text | 서쪽 운동장을 못 써요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:85:54 | text | 동쪽으로 가 주세요. | learner-text-candidate | — |
| src/data/sentencePieces.ts:88:55 | text | 금요일까지는 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:89:55 | text | 서쪽 운동장을 사용할 수 없어서 | learner-text-candidate | — |
| src/data/sentencePieces.ts:90:54 | text | 안전하게 놀려면 | learner-text-candidate | — |
| src/data/sentencePieces.ts:91:51 | text | 동쪽 운동장에서 놀아요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:96:54 | text | 비가 오는 날에는 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:97:55 | text | 우산을 현관 우산꽂이에 꽂아요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:100:54 | text | 비가 오는 날에는 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:101:55 | text | 우산을 현관 우산꽂이에 | learner-text-candidate | — |
| src/data/sentencePieces.ts:102:51 | text | 꽂아 주세요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:103:54 | text | 감사합니다. | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:108:12 | text | ex-ic-title | instruction | — |
| src/data/sentencePieces.ts:108:37 | text | title | instruction | repeated-text |
| src/data/sentencePieces.ts:108:52 | text | [학급 전시 안내] | instruction | — |
| src/data/sentencePieces.ts:109:54 | text | 다음 주 월요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:110:55 | text | 전시 작품 제목표를 내 주세요 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:111:54 | text | 늦지 마세요. | learner-text-candidate | — |
| src/data/sentencePieces.ts:114:12 | text | ex-in-title | instruction | — |
| src/data/sentencePieces.ts:114:37 | text | title | instruction | repeated-text |
| src/data/sentencePieces.ts:114:52 | text | [우리 반 전시 안내] | instruction | — |
| src/data/sentencePieces.ts:115:54 | text | 다음 주 월요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:116:55 | text | 전시 작품 제목표를 내 주세요 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:120:14 | text | 제목표에는 작품 이름을 적어요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:125:54 | text | 다음 주 월요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:126:55 | text | 전시 작품의 제목표를 적어서 | learner-text-candidate | — |
| src/data/sentencePieces.ts:127:51 | text | 선생님께 제출해 주세요 | learner-text-candidate | abstract-or-formal |
| src/data/sentencePieces.ts:130:54 | text | 다음 주 월요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:131:55 | text | 전시할 작품의 제목표를 | learner-text-candidate | — |
| src/data/sentencePieces.ts:132:51 | text | 작성해서 내 주세요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:136:14 | text | 제목표 양식은 교탁에 있어요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:141:55 | text | 다음 주 월요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:142:55 | text | 전시 작품 제목표를 내요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:143:54 | text | 제목표가 있어야 관람객이 작품을 잘 이해할 수 있거든요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:144:51 | text | 함께 준비해요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:147:54 | text | 다음 주 월요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:148:55 | text | 네 작품 제목표를 | learner-text-candidate | — |
| src/data/sentencePieces.ts:149:51 | text | 부탁해! | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:150:54 | text | 미리 고마워! | learner-text-candidate | — |
| src/data/sentencePieces.ts:153:54 | text | 다음 주 월요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:154:55 | text | 전시 작품 제목표를 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:155:51 | text | 부탁드립니다 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:158:54 | text | 다음 주 월요일까지 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:159:55 | text | 전시 작품 제목표를 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:160:51 | text | 제출하겠습니다 | learner-text-candidate | abstract-or-formal |
| src/data/sentencePieces.ts:164:11 | text | 물을 주다 | learner-text-candidate | — |
| src/data/sentencePieces.ts:166:54 | text | 금요일 오후에 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:167:55 | text | 창가 식물에 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:168:55 | text | 물 한 컵을 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:169:51 | text | 부탁해! | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:170:51 | text | 당장 물 줘! | learner-text-candidate | — |
| src/data/sentencePieces.ts:173:54 | text | 금요일 오후에 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:174:55 | text | 창가 식물에 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:175:55 | text | 물 한 컵을 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:176:51 | text | 부탁드립니다 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:177:54 | text | 감사합니다. | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:180:54 | text | 금요일 오후에 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:181:55 | text | 창가 식물에 물 한 컵을 | learner-text-candidate | — |
| src/data/sentencePieces.ts:182:51 | text | 주세요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:185:55 | text | 금요일 오후에 | learner-text-candidate | repeated-text |
| src/data/sentencePieces.ts:186:55 | text | 창가 식물에 물 한 컵을 줘요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:187:54 | text | 식물이 마르지 않게 하려면 물이 필요해요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:188:51 | text | 함께 돌봐요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:193:55 | text | 이번 주 매일 책을 읽어 봐요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:194:54 | text | 20분씩 읽고 한 줄을 기록하면 | learner-text-candidate | — |
| src/data/sentencePieces.ts:195:54 | text | 읽은 내용을 다시 떠올릴 수 있어요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:196:51 | text | 함께 시작해 봐요 | learner-text-candidate | — |
| src/data/sentencePieces.ts:199:55 | text | 이번 주 매일 책을 읽자 | learner-text-candidate | — |
| src/data/sentencePieces.ts:200:54 | text | 20분씩 읽고 한 줄 적으면 | learner-text-candidate | — |
| src/data/sentencePieces.ts:201:54 | text | 읽은 내용이 더 오래 남아 | learner-text-candidate | — |
| src/data/sentencePieces.ts:202:51 | text | 안 하면 후회할걸 | learner-text-candidate | — |
| src/data/sentencePieces.ts:205:12 | text | rw-ic-title | instruction | — |
| src/data/sentencePieces.ts:205:37 | text | title | instruction | repeated-text |
| src/data/sentencePieces.ts:205:52 | text | [읽기 주간 안내] | instruction | — |
| src/data/sentencePieces.ts:206:54 | text | 이번 주에는 매일 | learner-text-candidate | — |
| src/data/sentencePieces.ts:207:55 | text | 20분씩 읽고 한 줄을 적어요 | learner-text-candidate | — |
| src/data/types.ts:1:28 | text | 사실 층 | learner-text-candidate | — |
| src/data/types.ts:1:36 | text | 표현 층 | learner-text-candidate | — |
| src/data/types.ts:74:6 | text | title | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/ChangelogModal.tsx:12:17 | text | void; triggerRef?: RefObject | learner-text-candidate | technical-or-internal |
| src/features/sentence-purpose-transform/ChangelogModal.tsx:13:51 | text | ; }) { const closeRef = useRef | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ChangelogModal.tsx:15:45 | text | (null); const modalRef = useRef | learner-text-candidate | technical-or-internal |
| src/features/sentence-purpose-transform/ChangelogModal.tsx:32:12 | text | button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"]) | button-or-action, input | long-or-dense |
| src/features/sentence-purpose-transform/ChangelogModal.tsx:62:24 | text | changelog-title | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ChangelogModal.tsx:66:61 | text | 📋 업데이트 내역 | heading | repeated-text |
| src/features/sentence-purpose-transform/ChangelogModal.tsx:74:25 | aria-label | 업데이트 내역 닫기 | aria-label | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:11:77 | text | ; }; const REASON_TEMPLATES: ReasonTemplate[] = [ { id: 't1', template: '이 문장은 {{audience}}에게 {{purposeText}}하려고 만들었습니다.', fields: [ { key: 'audience', label: '독자', example: '친한 친구' }, { key: 'purposeText', label: '목적', example: '빠르게 알리' }, ], }, { id: 't2', template: '{{keptFact}} 사실은 그대로 두고, {{changedExpression}} 표현을 바꾸었습니다.', fields: [ { key: 'keptFact', label: '그대로 둔 사실', example: '수요일 오후 5시' }, { key: 'changedExpression', label: '바꾼 표현', example: '인사말과 강조를' }, ], }, { id: 't3', template: '이 표현은 {{audience}} 독자가 {{helpText}}하기 쉽도록 돕습니다.', fields: [ { key: 'audience', label: '독자', example: '처음 듣는' }, { key: 'helpText', label: '돕는 일', example: '어디로 가야 할지 알' }, ], }, { id: 't4', template: '나는 {{evidence}}을(를) 근거로 이 문장이 목적에 맞다고 생각합니다.', fields: [ { key: 'evidence', label: '근거', example: '핵심 사실을 지키면서 공손하게 부탁한 점' }, ], }, ]; type Props = { factCase: FactCase; purpose: Purpose; audience: Audience; built: BuiltPiece[]; reason: ReasonAnswer; reasonTemplateId: string \| null; onSetReason: (r: Partial | hint | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:17:16 | text | 이 문장은 {{audience}}에게 {{purposeText}}하려고 만들었습니다. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:19:15 | text | audience | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:19:34 | text | 독자 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:19:49 | text | 친한 친구 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:20:15 | text | purposeText | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:20:37 | text | 목적 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:20:52 | text | 빠르게 알리 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:25:16 | text | {{keptFact}} 사실은 그대로 두고, {{changedExpression}} 표현을 바꾸었습니다. | learner-text-candidate | long-or-dense, repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:27:15 | text | keptFact | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:27:34 | text | 그대로 둔 사실 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:27:55 | text | 수요일 오후 5시 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:28:15 | text | changedExpression | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:28:43 | text | 바꾼 표현 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:28:61 | text | 인사말과 강조를 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:33:16 | text | 이 표현은 {{audience}} 독자가 {{helpText}}하기 쉽도록 돕습니다. | hint | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:35:15 | text | audience | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:35:34 | text | 독자 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:35:49 | text | 처음 듣는 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:36:15 | text | helpText | hint | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:36:34 | text | 돕는 일 | hint | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:36:51 | text | 어디로 가야 할지 알 | hint | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:41:16 | text | 나는 {{evidence}}을(를) 근거로 이 문장이 목적에 맞다고 생각합니다. | learner-text-candidate | repeated-text, technical-or-internal |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:43:15 | text | evidence | learner-text-candidate | missing-term-explanation, repeated-text, technical-or-internal |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:43:34 | text | 근거 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:43:49 | text | 핵심 사실을 지키면서 공손하게 부탁한 점 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:79:52 | text | 시간과 장소 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:84:18 | text | 이 문장은 {{audience}}에게 {{purposeText}} 목적으로 만들었습니다. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:86:17 | text | audience | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:86:36 | text | 독자 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:87:17 | text | purposeText | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:87:39 | text | 목적 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:92:18 | text | {{keptFact}} 사실은 그대로 두고, {{changedExpression}} 표현을 바꾸었습니다. | learner-text-candidate | long-or-dense, repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:94:17 | text | keptFact | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:94:36 | text | 그대로 둔 사실 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:95:17 | text | changedExpression | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:95:45 | text | 바꾼 표현 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:95:63 | text | 말투와 강조 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:100:18 | text | 이 표현은 {{audience}} 독자가 {{helpText}} 쉽도록 만들었어요. | hint | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:102:17 | text | audience | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:102:36 | text | 독자 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:103:17 | text | helpText | hint | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:103:36 | text | 돕는 일 | hint | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:103:53 | text | 무엇을 해야 할지 아는 | hint | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:108:18 | text | 나는 {{evidence}}을(를) 근거로 이 문장이 목적에 맞다고 생각합니다. | learner-text-candidate | repeated-text, technical-or-internal |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:110:17 | text | evidence | learner-text-candidate | missing-term-explanation, repeated-text, technical-or-internal |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:110:36 | text | 근거 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:110:51 | text | 핵심 사실을 지키면서 ${PURPOSE_LABEL[purpose]}에 맞게 쓴 점 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:126:20 | text | acc.replace(`{{${f.key}}}`, reason[f.key]?.trim() \|\| `___`), selectedTemplate.template ) : '아래에서 근거 틀을 하나 골라 빈칸을 채워 보세요.'; return ( | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:129:8 | text | 아래에서 근거 틀을 하나 골라 빈칸을 채워 보세요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:132:49 | text | compare-title | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:133:37 | text | 5단계 · 효과 비교와 근거 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:134:55 | text | 🎨 효과를 비교하고 이유 말하기 | heading | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:137:34 | text | 원문과 내가 만든 문장을 나란히 보고, 왜 이 표현을 골랐는지 이유를 적어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:139:11 | text | {/* 비교 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:144:47 | text | 📰 원문 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:147:35 | text | 원본 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:151:47 | text | ✨ 변환문 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:154:53 | text | {PURPOSE_CARDS[purpose].icon} {PURPOSE_LABEL[purpose]} | learner-text-candidate | long-or-dense, repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:157:35 | text | {AUDIENCE_CARDS[audience].icon} {AUDIENCE_LABEL[audience]} | learner-text-candidate | long-or-dense, repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:164:33 | text | {/* 근거 문장 틀 (사양 11.2) */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:168:58 | text | var(--fs-h3) | heading | repeated-text |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:168:75 | text | ✍️ 변환 이유 적기 | heading | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:171:70 | text | 근거 틀 하나를 골라 빈칸을 채워요. 자유 입력 대신 틀을 활용해도 좋아요. | input | abstract-or-formal |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:185:32 | text | ${t.id} 근거 틀 ${isSelected ? '선택됨' : '선택'} | learner-text-candidate | multiple-actions, technical-or-internal |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:187:44 | text | {isSelected ? '◉' : '◯'} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:202:40 | text | ${f.label} 빈칸 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:214:15 | text | {/* 완성된 근거 문장 미리보기 */} | feedback-or-error | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:217:75 | text | polite | feedback-or-error | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:220:15 | text | {referenceVariant && ( | feedback-or-error | technical-or-internal |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:225:23 | text | 참고 효과: | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:226:56 | text | `#${tag}`).join(' ')} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:226:58 | text | #${tag} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:235:62 | aria-label | 다시 점검하기 | aria-label, button-or-action | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:235:71 | text | ← 다시 점검하기 | button-or-action | — |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:243:10 | text | 변환 결과 제출 → | button-or-action | abstract-or-formal |
| src/features/sentence-purpose-transform/EffectComparePanel.tsx:248:70 | text | 근거 틀을 하나 골라 모든 빈칸을 채워야 결과를 볼 수 있어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:41:54 | text | allGood | feedback-or-error | repeated-text |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:42:44 | text | 0) feedbackKey = 'missingFact'; else if (preservation.addedFact \|\| preservation.exaggeration) feedbackKey = 'addedFact'; else if (!purposeFit.fit) { feedbackKey = 'purposeElementsMissing'; } else if (purpose === 'request' && audienceFit.mismatch) feedbackKey = 'requestLikeCommand'; else if (audienceFit.needsMoreDetail) feedbackKey = 'audienceMissing'; else if (audienceFit.needsSimplification) feedbackKey = 'audienceTooDetailed'; const audienceFits = !audienceFit.needsMoreDetail && !audienceFit.needsSimplification && !audienceFit.mismatch; const canProceed = canProceedAfterCheck( preservation.allPreserved, purposeFit.fit, audienceFits ); return ( | feedback-or-error | long-or-dense |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:42:63 | text | missingFact | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:43:80 | text | addedFact | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:45:20 | text | purposeElementsMissing | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:46:27 | text | request | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:46:76 | text | requestLikeCommand | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:47:56 | text | audienceMissing | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:48:60 | text | audienceTooDetailed | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:59:49 | text | check-title | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:60:37 | text | 4단계 · 사실 보존 점검 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:61:53 | text | 🔍 사실이 잘 보존되었나요? | heading | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:64:34 | text | 만든 문장을 원문 사실과 비교해, 시간·장소·수량·조건이 그대로인지 확인해요. | learner-text-candidate | multiple-actions |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:66:11 | text | {/* 만든 문장 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:70:45 | text | 내가 만든 문장 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:72:13 | text | {/* 사실 보존 체크리스트 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:76:58 | text | var(--fs-h3) | heading | repeated-text |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:76:75 | text | 📋 필수 사실 보존 확인 | heading | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:89:72 | text | {preserved ? '✅' : '⚠️'} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:92:53 | text | {kindToKorean(unit.kind)}: {unit.text} {preserved ? ' — 보존됨' : ' — 빠짐'} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:94:35 | text | — 보존됨 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:94:46 | text | — 빠짐 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:99:14 | text | {/* 사실 추가 / 과장 경고 */} {(preservation.addedFact \|\| preservation.exaggeration) && ( | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:105:47 | text | {preservation.addedFact && '원래 없던 새 정보를 추가하는 조각이 있어요. '} {preservation.exaggeration && '원래 사실보다 크게 말하는(과장) 조각이 있어요.'} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:106:43 | text | 원래 없던 새 정보를 추가하는 조각이 있어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:107:46 | text | 원래 사실보다 크게 말하는(과장) 조각이 있어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:113:33 | text | {/* 목적 적합성 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:117:58 | text | var(--fs-h3) | heading | repeated-text |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:117:75 | text | {PURPOSE_CARDS[purpose].icon} {PURPOSE_CARDS[purpose].name} 목적의 요소 | heading | long-or-dense |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:133:72 | text | 아직 채우지 못한 요소: {purposeFit.missing.join(', ')} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:139:33 | text | {/* 독자 적합성 힌트 */} | feedback-or-error, hint | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:143:34 | text | {AUDIENCE_CARDS[audience].icon} | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:145:19 | text | {AUDIENCE_CARDS[audience].name} | hint | repeated-text |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:145:59 | text | — {audienceFit.hint} | hint | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:147:13 | text | {/* 종합 피드백 (사양 11.1) */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:152:28 | text | allGood | feedback-or-error | repeated-text |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:153:16 | text | feedback--ok | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:155:16 | text | feedback--warn | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:156:16 | text | feedback--info | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:161:34 | text | {feedbackKey === 'allGood' ? '🎉' : preservation.allPreserved ? '✏️' : '💡'} | feedback-or-error | long-or-dense |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:162:29 | text | allGood | feedback-or-error | repeated-text |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:164:15 | text | {FEEDBACK_MESSAGES[feedbackKey]} | feedback-or-error | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:170:62 | aria-label | 문장 다시 고치기 | aria-label, button-or-action | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:170:73 | text | ← 다시 고치기 | button-or-action | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:178:10 | text | 사실 보존 확인 → | button-or-action | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:183:70 | text | {!preservation.allPreserved ? '필수 사실을 모두 보존하고, 새 사실 추가나 과장을 빼야 다음으로 넘어갈 수 있어요.' : !purposeFit.fit ? `${PURPOSE_CARDS[purpose].name}에 필요한 요소(${purposeFit.missing.join(', ')})를 채워야 다음으로 넘어갈 수 있어요.` : !audienceFits ? '사실·목적·독자에 맞는 표현을 모두 확인한 뒤 다음으로 넘어갈 수 있어요.' : ''} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:185:16 | text | 필수 사실을 모두 보존하고, 새 사실 추가나 과장을 빼야 다음으로 넘어갈 수 있어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:187:16 | text | ${PURPOSE_CARDS[purpose].name}에 필요한 요소(${purposeFit.missing.join(', ')})를 채워야 다음으로 넘어갈 수 있어요. | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/FactPreservationPanel.tsx:189:16 | text | 사실·목적·독자에 맞는 표현을 모두 확인한 뒤 다음으로 넘어갈 수 있어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:5:12 | text | 표현을 바꿔도 반드시 그대로 남아야 하는 정보는 무엇인가요? | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/FactVault.tsx:23:55 | text | lockedFactIds.includes(u.id) ); return ( | learner-text-candidate | technical-or-internal |
| src/features/sentence-purpose-transform/FactVault.tsx:28:60 | text | factvault-title | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:29:37 | text | 1단계 · 사실 보존 금고 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:30:57 | text | 🔒 반드시 지켜야 할 사실 확인하기 | heading | — |
| src/features/sentence-purpose-transform/FactVault.tsx:33:34 | text | {isTutorial ? '문장에서 표현을 바꿔도 그대로 남아야 하는 사실을 먼저 찾아보아요. 필수 사실을 모두 잠그면 다음으로 넘어가요.' : '이 사실에서 바꾸면 안 되는 정보를 확인하고 잠가 두어요.'} | learner-text-candidate | long-or-dense, multiple-actions |
| src/features/sentence-purpose-transform/FactVault.tsx:35:14 | text | 문장에서 표현을 바꿔도 그대로 남아야 하는 사실을 먼저 찾아보아요. 필수 사실을 모두 잠그면 다음으로 넘어가요. | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/FactVault.tsx:36:14 | text | 이 사실에서 바꾸면 안 되는 정보를 확인하고 잠가 두어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:37:11 | text | {/* 원문 사실 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:40:47 | text | 원문 사실: ${factCase.baseSentence} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:41:104 | text | 📰 원문 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/FactVault.tsx:45:13 | text | {/* 핵심 질문 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:51:21 | aria-label | 핵심 질문 | aria-label | — |
| src/features/sentence-purpose-transform/FactVault.tsx:54:15 | text | 표현을 바꿔도 반드시 그대로 남아야 하는 정보는 무엇인가요? | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/FactVault.tsx:55:13 | text | {/* 필수 사실 (잠금 대상) */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:59:58 | text | var(--fs-h3) | heading | repeated-text |
| src/features/sentence-purpose-transform/FactVault.tsx:59:75 | text | 🟡 반드시 보존할 사실 | heading | — |
| src/features/sentence-purpose-transform/FactVault.tsx:63:39 | text | { const locked = lockedFactIds.includes(unit.id); return ( | button-or-action | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/FactVault.tsx:71:66 | text | 잠금 완료. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:73:70 | text | {locked ? '🔒' : '🔓'} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:87:60 | text | var(--fs-h3) | heading | repeated-text |
| src/features/sentence-purpose-transform/FactVault.tsx:87:77 | text | ✏️ 바꿀 수 있는 표현 | heading | — |
| src/features/sentence-purpose-transform/FactVault.tsx:112:16 | text | ✅ 필수 사실을 모두 잠갔어요! | learner-text-candidate | — |
| src/features/sentence-purpose-transform/FactVault.tsx:114:42 | text | u.id === id) ).length}개 잠금`} | learner-text-candidate | technical-or-internal |
| src/features/sentence-purpose-transform/FactVault.tsx:122:10 | text | 🔒 필수 사실 잠금 | button-or-action | — |
| src/features/sentence-purpose-transform/FactVault.tsx:127:70 | text | 필수 사실을 모두 눌러 잠가야 다음 단계로 넘어갈 수 있어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:29:21 | text | void; }; // 미션 5에서 각 목적에 권장하는 독자 const SUGGESTED_AUDIENCE: Record | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:162:75 | text | var(--sp-3) | feedback-or-error | repeated-text |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:166:22 | text | 이 목적 변환을 마치면 다음 목적(${PURPOSE_LABEL[purposeOrder[purposeIndex + 1]]})으로 넘어가요. | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:167:22 | text | 마지막 목적이에요! 제출하면 네 변환을 비교해요. | learner-text-candidate | abstract-or-formal, multiple-actions |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:172:10 | text | ); } // 최종 비교 단계 — 네 변환을 나란히 보고 가장 효과적인 것 선택 return ( | learner-text-candidate | multiple-actions |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:187:7 | text | ); } // 진행 표시 function Mission5Progress({ purposeOrder, currentIndex, results, }: { purposeOrder: Purpose[]; currentIndex: number; results: SavedResult[]; }) { return ( | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:203:37 | text | 한 사실 네 목적 변환소 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:213:14 | text | {done ? '✅' : current ? '👉' : `${i + 1}.`}{' '} {PURPOSE_CARDS[p].icon} {PURPOSE_LABEL[p]} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:220:94 | text | 지금 {PURPOSE_LABEL[purposeOrder[currentIndex]]} 목적으로 변환 중이에요. ( {currentIndex + 1}/{purposeOrder.length}) | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:252:6 | text | 【한 사실 네 목적 변환 결과】 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:253:6 | text | 원래 사실: ${factCase.baseSentence} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:257:15 | text | ${i + 1}. ${PURPOSE_LABEL[r.purpose]} (${AUDIENCE_LABEL[r.audience]}) ${sentence} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:260:6 | text | 가장 효과적이라고 생각한 변환: ${bestPick !== null ? | learner-text-candidate | technical-or-internal |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:260:110 | text | : '미선택'} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:261:6 | text | 이유: ${bestReason} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:274:31 | text | { if (!canComplete) return; setCompleted(true); onComplete?.(); }; return ( | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:281:31 | text | m5-final-title | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:283:39 | text | 비교 완료! | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:284:58 | text | 🎨 한 사실, 네 가지 표현 비교 | heading | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:287:36 | text | 같은 사실을 네 목적으로 바꿔 보았어요. 사실은 같은데 표현이 어떻게 달라졌는지 비교해요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:294:46 | text | p.text).join(' '); const preservation = checkPreservation(r.built, factCase); return ( | button-or-action | long-or-dense |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:303:28 | text | ${i + 1}번 변환. ${PURPOSE_LABEL[r.purpose]} 목적. ${sentence} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:307:61 | text | {PURPOSE_CARDS[r.purpose].icon} {PURPOSE_LABEL[r.purpose]} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:310:41 | text | {AUDIENCE_CARDS[r.audience].icon} {AUDIENCE_LABEL[r.audience]} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:313:85 | text | 🔒 사실 보존 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:315:80 | text | {bestPick === i ? '⭐ 선택됨' : '눌러서 선택'} | learner-text-candidate | multiple-actions |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:316:38 | text | ⭐ 선택됨 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:316:48 | text | 눌러서 선택 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:328:58 | text | var(--fs-h3) | heading | repeated-text |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:328:75 | text | ⭐ 가장 효과적인 변환 고르기 | heading | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:331:36 | text | 네 표현 중 어느 것이 가장 목적과 독자에 잘 맞는지 골라보고, 왜 그렇게 생각하는지 적어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:339:24 | placeholder | 예: 친구에게 빠르게 알려야 해서 핵심 사실을 앞에 둔 표현이 가장 효과적이었어요. | placeholder, input | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:340:23 | aria-label | 가장 효과적인 변환을 고른 이유 | aria-label | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:344:105 | text | var(--sp-4) | feedback-or-error | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:345:34 | text | {completed ? '🎊' : '✏️'} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:346:15 | text | {completed ? '모든 미션을 마쳤어요! 같은 사실을 목적과 독자에 맞게 바꾸는 연습을 다 해보았어요.' : '네 변환 중 하나를 고르고, 왜 효과적인지 이유를 적은 뒤 최종 완료를 눌러 보세요.'} | learner-text-candidate | long-or-dense, multiple-actions |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:348:16 | text | 모든 미션을 마쳤어요! 같은 사실을 목적과 독자에 맞게 바꾸는 연습을 다 해보았어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:349:16 | text | 네 변환 중 하나를 고르고, 왜 효과적인지 이유를 적은 뒤 최종 완료를 눌러 보세요. | learner-text-candidate | multiple-actions |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:354:65 | aria-label | 새 미션 시작하기 | aria-label, button-or-action | repeated-text |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:354:76 | text | ← 새 미션 하기 | button-or-action | repeated-text |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:358:56 | text | {copied ? '✅ 복사됨!' : '📋 결과 복사하기'} | button-or-action | repeated-text |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:359:24 | text | ✅ 복사됨! | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:359:35 | text | 📋 결과 복사하기 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:366:12 | text | {completed ? '✅ 미션 완료' : '🎓 최종 성찰 완료'} | button-or-action | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:367:27 | text | ✅ 미션 완료 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:367:39 | text | 🎓 최종 성찰 완료 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:372:96 | text | {bestPick === null ? '먼저 가장 효과적인 변환을 하나 골라 주세요. ' : ''} {!bestReason.trim() ? '선택한 이유를 한 문장 이상 적어 주세요.' : ''} | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:373:33 | text | 먼저 가장 효과적인 변환을 하나 골라 주세요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/Mission5MultiTransform.tsx:374:34 | text | 선택한 이유를 한 문장 이상 적어 주세요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:46:6 | text | 【문장 목적 변환소 결과】 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:48:6 | text | 📰 원래 사실: ${factCase.baseSentence} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:49:6 | text | 🎯 목적: ${PURPOSE_LABEL[purpose]} (${PURPOSE_CARDS[purpose].short}) | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/ResultCard.tsx:50:6 | text | 👥 독자: ${AUDIENCE_LABEL[audience]} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:52:6 | text | ✨ 변환된 문장: | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:55:6 | text | 🔒 보존한 필수 사실: | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:58:6 | text | ✏️ 내가 고른 표현 조각: | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:67:23 | text | setCopied(false), 2000); } catch { setCopied(false); setCopyError(true); } }; return ( | feedback-or-error | long-or-dense |
| src/features/sentence-purpose-transform/ResultCard.tsx:75:31 | text | result-title | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:76:69 | text | 변환 완료! | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:79:49 | text | 결과 카드 | heading | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:86:49 | text | 🎉 변환 결과 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:92:53 | text | {PURPOSE_CARDS[purpose].icon} {PURPOSE_LABEL[purpose]} | learner-text-candidate | long-or-dense, repeated-text |
| src/features/sentence-purpose-transform/ResultCard.tsx:95:35 | text | {AUDIENCE_CARDS[audience].icon} {AUDIENCE_LABEL[audience]} | learner-text-candidate | long-or-dense, repeated-text |
| src/features/sentence-purpose-transform/ResultCard.tsx:99:15 | text | {/* 원래 사실 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:103:50 | text | 📰 원래 사실 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:105:15 | text | {/* 변환된 문장 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:110:15 | text | {/* 보존한 필수 사실 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:114:50 | text | 🔒 보존한 필수 사실 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:124:15 | text | {/* 바꾼 표현 요소 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:128:50 | text | ✏️ 내가 고른 표현 조각 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:136:15 | text | {/* 근거 문장 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:140:50 | text | 💭 내가 쓴 근거 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:141:72 | text | {reasonTemplateId ? buildReasonPreview(reasonTemplateId, reason) : '근거를 작성하지 않았어요.'} | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/ResultCard.tsx:144:18 | text | 근거를 작성하지 않았어요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:147:13 | text | {/* 다음 미션 이어가기 (있을 때 강조) */} {nextMissionTitle && onNextMission && ( | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/ResultCard.tsx:152:53 | text | 다음 미션 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:158:26 | text | 다음 미션으로 이동: ${nextMissionTitle} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:159:12 | text | 다음 미션으로 이동 → | button-or-action | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:166:65 | aria-label | 새 미션 시작하기 | aria-label, button-or-action | repeated-text |
| src/features/sentence-purpose-transform/ResultCard.tsx:166:76 | text | ← 새 미션 하기 | button-or-action | repeated-text |
| src/features/sentence-purpose-transform/ResultCard.tsx:169:67 | text | {copied ? '✅ 복사됨!' : '📋 결과 복사하기'} | button-or-action | repeated-text |
| src/features/sentence-purpose-transform/ResultCard.tsx:170:22 | text | ✅ 복사됨! | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/ResultCard.tsx:170:33 | text | 📋 결과 복사하기 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/ResultCard.tsx:172:13 | text | {copyError && ( | feedback-or-error | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:174:130 | text | 복사하지 못했어요. 결과 문장을 길게 눌러 직접 복사해 보세요. | learner-text-candidate | shaming-tone |
| src/features/sentence-purpose-transform/ResultCard.tsx:178:115 | text | 결과는 저장되지 않고 새로고침하면 사라져요. 필요하면 복사해 두세요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/ResultCard.tsx:181:15 | text | ); } // 근거 틀 미리보기 (EffectComparePanel과 동일 로직) function buildReasonPreview(templateId: string, reason: ReasonAnswer): string { const templates: Record | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/ResultCard.tsx:188:17 | text | 이 문장은 ${r.audience \|\| '___'}에게 ${r.purposeText \|\| '___'} 목적으로 만들었습니다. | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/ResultCard.tsx:189:17 | text | ${r.keptFact \|\| '___'} 사실은 그대로 두고, ${r.changedExpression \|\| '___'} 표현을 바꾸었습니다. | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/ResultCard.tsx:190:17 | text | 이 표현은 ${r.audience \|\| '___'} 독자가 ${r.helpText \|\| '___'} 쉽도록 만들었어요. | hint | long-or-dense |
| src/features/sentence-purpose-transform/ResultCard.tsx:191:17 | text | 나는 ${r.evidence \|\| '___'}을(를) 근거로 이 문장이 목적에 맞다고 생각합니다. | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:23:17 | text | void; canUndo: boolean; }; const CATEGORY_LABEL: Record | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:28:14 | text | 인사말 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:29:11 | text | 제목 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:30:14 | text | 핵심 사실 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:31:12 | text | 이유·근거 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:32:12 | text | 행동·요청 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:33:12 | text | 공손 표현 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:34:14 | text | 강조 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:58:43 | text | p.id)); // 카테고리별로 그룹화 const grouped = pieces.reduce | learner-text-candidate | technical-or-internal |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:66:49 | text | ); return ( | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:70:49 | text | builder-title | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:71:37 | text | 3단계 · 문장 변환 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:72:55 | text | ✨ 표현 조각으로 문장 만들기 | heading | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:75:34 | text | 조각을 눌러 문장을 만들어요. 순서를 올리고 내리고, 지우고, 되돌릴 수 있어요. 원문과 나란히 비교하며 사실이 그대로인지 확인해요. | learner-text-candidate | long-or-dense, multiple-actions |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:80:32 | text | {/* 원문 vs 조립문 나란히 비교 (사양 12.3) */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:84:49 | text | 📰 원문 사실 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:88:49 | text | ✨ 내가 만든 문장 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:89:65 | text | {builtSentence \|\| | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:90:63 | text | 아직 조각을 추가하지 않았어요. 아래 조각을 눌러 보세요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:93:15 | text | {/* 조립된 조각 목록 (순서 변경·삭제) */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:98:62 | text | var(--fs-h3) | heading | repeated-text |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:98:79 | text | 🧩 만들어진 문장 순서 | heading | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:106:29 | aria-label | 되돌리기 | aria-label | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:107:16 | text | ↩ 되돌리기 | button-or-action | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:114:29 | aria-label | 전체 지우기 | aria-label | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:115:16 | text | 🗑 전체 지우기 | button-or-action | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:119:17 | text | {built.length === 0 ? ( | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:121:53 | aria-label | 빈 문장 영역 | aria-label | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:122:45 | text | 여기에 조각이 쌓여요. | learner-text-candidate | ambiguous-reference |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:125:53 | text | 현재 ${built.length}개 조각 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:128:44 | text | {i + 1}. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:135:36 | text | ${i + 1}번 조각을 앞으로 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:143:36 | text | ${i + 1}번 조각을 뒤로 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:150:36 | text | ${i + 1}번 조각 삭제 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:161:35 | text | {/* 표현 조각 트레이 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:165:60 | text | var(--fs-h3) | heading | repeated-text |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:165:77 | text | ➕ 추가할 수 있는 표현 조각 | heading | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:168:72 | text | 📌 핵심 사실 조각은 그대로 써요. ⚠️ 표시가 있는 조각은 새 정보를 추가하거나 과장하는 조각이에요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:171:39 | text | {!hasBundle && ( | feedback-or-error | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:175:23 | text | 이 목적과 독자 조합의 표현 조각은 아직 준비되지 않았어요. 상황 선택으로 돌아가 다른 조합을 골라 주세요. | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:180:52 | text | {CATEGORY_LABEL[cat]} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:182:47 | text | { const used = usedIds.has(piece.id); return ( | button-or-action | technical-or-internal |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:190:38 | text | ${CATEGORY_LABEL[cat]} 조각: ${piece.text}${piece.isNewFact ? '. 주의: 새 사실을 추가하는 조각이에요.' : ''}${piece.isExaggeration ? '. 주의: 과장하는 조각이에요.' : ''} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:191:24 | text | {piece.isNewFact && '⚠️ '} {piece.isExaggeration && '⚠️ '} {piece.text} | button-or-action | long-or-dense |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:208:28 | text | 0 ? `지금까지 ${built.length}개 조각. 사실이 잘 보존되었는지 점검해 보아요.` : '최소 한 개의 핵심 사실 조각을 추가해 보세요.'} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:209:18 | text | 지금까지 ${built.length}개 조각. 사실이 잘 보존되었는지 점검해 보아요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:210:18 | text | 최소 한 개의 핵심 사실 조각을 추가해 보세요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentenceBuilder.tsx:217:12 | text | 🔍 사실 보존 점검하기 → | button-or-action | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:21:56 | text | (null); return ( | learner-text-candidate | technical-or-internal |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:27:38 | text | 학교 소식 편집실 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:28:37 | text | 문장 목적 변환소 | heading | repeated-text |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:29:39 | text | 같은 사실을 목적과 독자에 맞게 바꿔 보아요 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:33:112 | text | dialog | button-or-action | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:33:120 | text | 📋 업데이트 내역 | button-or-action | repeated-text |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:72:39 | text | 시작하기 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:73:38 | text | 어떤 변환을 해 볼까요? | heading | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:74:36 | text | 하나의 사실에서 시작해, 목적과 독자에 맞춰 문장을 다시 설계해 보아요. 시간·장소·수량 같은 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:76:31 | text | 사실은 그대로 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:76:47 | text | 두고,{' '} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:77:19 | text | 표현만 바꾸는 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:77:35 | text | 연습이에요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:80:71 | text | var(--sp-3) | feedback-or-error | repeated-text |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:82:19 | text | 지금까지 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:82:32 | text | {completedCount}개 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:82:58 | text | 미션을 완료했어요! 계속 해볼까요? | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:96:28 | text | 미션 ${m.id}: ${m.title}. ${m.desc}${done ? '. 완료한 미션입니다.' : ''} | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:97:14 | text | {done && ( | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:99:74 | text | ✓ 완료 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:107:39 | text | 📰 {fact.title} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:107:60 | text | {m.fixedPurpose && ( | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:109:66 | text | {PURPOSE_CARDS[m.fixedPurpose].icon} {PURPOSE_LABEL[m.fixedPurpose]} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:114:41 | text | {AUDIENCE_CARDS[m.fixedAudience].icon} {AUDIENCE_LABEL[m.fixedAudience]} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:118:54 | text | 🔄 네 목적 비교 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:126:88 | text | 미션 0은 연습용이에요. 먼저 해 보아도 좋아요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:130:8 | text | ); } // 활성 미션 — 단계 라우터 function ActiveMission({ state, actions, }: { state: ReturnType | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:143:39 | text | m.id === state.missionId)!; // 다음 미션 (마지막 미션이면 undefined) const nextMission = mission.id | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:160:81 | text | ← 미션 선택으로 | button-or-action | — |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:163:31 | text | 미션 {mission.id} · {mission.title} | learner-text-candidate | missing-term-explanation, technical-or-internal |
| src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx:174:11 | text | )} {/* 미션 5: 사실 금고 이후 자체 네 목적 순차 흐름으로 전환 (사양 9절 미션 5) */} {mission.id === 5 && state.step !== 'factVault' && ( | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/SituationSelector.tsx:12:43 | text | ( event: KeyboardEvent | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:60:56 | text | { onSelectPurpose(nextPurpose); if ( audience !== null && !getAvailableAudiences(factCase.id, nextPurpose).includes(audience) ) { onSelectAudience(null); } }; return ( | learner-text-candidate | long-or-dense, technical-or-internal |
| src/features/sentence-purpose-transform/SituationSelector.tsx:71:49 | text | situation-title | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:72:37 | text | 2단계 · 상황 설정 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:73:57 | text | 🎯 누구에게, 무엇을 하려고 하나요? | heading | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:76:34 | text | 목적과 독자를 정하면 그에 맞는 표현 조각이 나타나요. 이 사실:{' '} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:79:11 | text | {/* 목적 카드 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:83:58 | text | var(--fs-h3) | heading | repeated-text |
| src/features/sentence-purpose-transform/SituationSelector.tsx:83:75 | text | 무엇을 하려고 하나요? | heading | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:84:76 | text | (목적) | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:87:72 | text | 📌 이 미션에서는 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/SituationSelector.tsx:88:70 | text | 목적으로 진행해요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:91:89 | aria-label | 목적 선택 | aria-label | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:92:97 | text | { const meta = PURPOSE_CARDS[p]; const selected = purpose === p; const disabled = hasFixedPurpose && mission.fixedPurpose !== p; return ( | button-or-action | long-or-dense |
| src/features/sentence-purpose-transform/SituationSelector.tsx:105:30 | text | 목적 ${meta.name}. ${meta.description} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:115:15 | text | {purpose && ( | feedback-or-error | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:117:73 | text | var(--sp-2) | feedback-or-error | repeated-text |
| src/features/sentence-purpose-transform/SituationSelector.tsx:118:38 | text | {PURPOSE_CARDS[purpose].icon} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:120:61 | text | 의 필수 요소:{' '} {PURPOSE_CARDS[purpose].requiredElements.join(' · ')} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/SituationSelector.tsx:127:33 | text | {/* 독자 카드 */} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:131:58 | text | var(--fs-h3) | heading | repeated-text |
| src/features/sentence-purpose-transform/SituationSelector.tsx:131:75 | text | 누구에게 말하나요? | heading | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:132:74 | text | (독자) | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:135:72 | text | 📌 이 미션에서는 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/SituationSelector.tsx:136:72 | text | 에게 말해요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:139:90 | aria-label | 독자 선택 | aria-label | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:140:99 | text | { const meta = AUDIENCE_CARDS[a]; const selected = audience === a; const disabled = hasFixedAudience && mission.fixedAudience !== a; return ( | button-or-action | long-or-dense |
| src/features/sentence-purpose-transform/SituationSelector.tsx:153:30 | text | 독자 ${meta.name}. ${meta.description} | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:164:15 | text | {audience && ( | feedback-or-error | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:166:73 | text | var(--sp-2) | feedback-or-error | repeated-text |
| src/features/sentence-purpose-transform/SituationSelector.tsx:167:38 | text | {AUDIENCE_CARDS[audience].icon} | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/SituationSelector.tsx:169:23 | text | {AUDIENCE_CARDS[audience].name} | hint | repeated-text |
| src/features/sentence-purpose-transform/SituationSelector.tsx:169:63 | text | — {AUDIENCE_CARDS[audience].backgroundHint}.{' '} {AUDIENCE_CARDS[audience].toneHint}. | hint | long-or-dense |
| src/features/sentence-purpose-transform/SituationSelector.tsx:179:52 | text | {bothSelected ? '✅ 목적과 독자가 정해졌어요!' : '목적과 독자를 모두 선택해 주세요.'} | learner-text-candidate | long-or-dense |
| src/features/sentence-purpose-transform/SituationSelector.tsx:181:16 | text | ✅ 목적과 독자가 정해졌어요! | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:182:16 | text | 목적과 독자를 모두 선택해 주세요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/SituationSelector.tsx:189:10 | text | 목적·독자 정하기 → | button-or-action | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:5:10 | text | factVault | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:5:30 | text | 사실 금고 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:6:10 | text | situation | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:6:30 | text | 목적·독자 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:7:10 | text | build | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:7:26 | text | 문장 변환 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:8:10 | text | check | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:8:26 | text | 사실 점검 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:9:10 | text | compare | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:9:28 | text | 효과 비교 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:10:10 | text | result | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:10:27 | text | 결과 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:14:46 | text | s.id === current); return ( | learner-text-candidate | technical-or-internal |
| src/features/sentence-purpose-transform/StepIndicator.tsx:16:40 | aria-label | 학습 단계 | aria-label | — |
| src/features/sentence-purpose-transform/StepIndicator.tsx:25:20 | text | {i | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:8:13 | text | 사실 보존 금고 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:9:12 | text | 한 문장에서 반드시 지켜야 할 사실과 바꿔도 되는 표현을 나눠 보아요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:14:13 | text | 친구에게 빠르게 알리기 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:15:12 | text | 도서관 반납함 사실을 친구 한 명에게 한눈에 읽히게 알려요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:22:13 | text | 처음 듣는 사람에게 안내하기 | instruction | — |
| src/features/sentence-purpose-transform/missions.ts:23:12 | text | 운동장 공사 사실을 처음 듣는 친구에게 알기 쉽게 안내해요. | instruction | — |
| src/features/sentence-purpose-transform/missions.ts:30:13 | text | 근거를 넣어 설득하기 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:31:12 | text | 읽기 주간 참여를 학급 친구들에게 이유와 근거로 권해요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:38:13 | text | 공손하게 부탁하기 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:39:12 | text | 교실 식물에 물 주는 일을 친구에게 공손하게 부탁해요. | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:46:13 | text | 한 사실 네 목적 변환소 | learner-text-candidate | repeated-text |
| src/features/sentence-purpose-transform/missions.ts:47:12 | text | 학급 전시 사실 하나를 알리기·안내·설득·부탁 네 목적으로 바꿔 비교해요. | instruction | — |
| src/features/sentence-purpose-transform/missions.ts:55:32 | text | 최초 MVP 설계: 사실 보존과 목적·독자별 문장 변환 | learner-text-candidate | technical-or-internal |
| src/features/sentence-purpose-transform/missions.ts:56:32 | text | 사실 금고·목적 카드·5개 변환 미션 추가 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:57:32 | text | 복수 정답 피드백과 독자별 설명 힌트 보강 | feedback-or-error, hint | — |
| src/features/sentence-purpose-transform/missions.ts:58:32 | text | gi-pulse 단계 안내·모바일·키보드 접근성 적용 | instruction | abstract-or-formal |
| src/features/sentence-purpose-transform/missions.ts:59:32 | text | 목적 필수 요소·정확한 콘텐츠 조합·미션 5 완료 조건 보강 | learner-text-candidate | — |
| src/features/sentence-purpose-transform/missions.ts:60:32 | text | 모달 키보드 접근성·44px 터치 영역·결과 복사 실패 안내 개선 | feedback-or-error, instruction | — |
| src/features/sentence-purpose-transform/useSentenceTransformState.ts:50:82 | text | ; multiPurposeIndex: number; // 미션 5 현재 목적 순서 purposeOrder?: Purpose[]; // 미션 5용 목적 순서 // 근거·결과 reason: ReasonAnswer; reasonTemplateId: string \| null; // 완료한 미션 ID 목록 (RESTART 시에도 유지 — 진행도 표시용) completedMissionIds: MissionId[]; }; type Action = \| { type: 'SELECT_MISSION'; mission: MissionDef } \| { type: 'GO_STEP'; step: Step } \| { type: 'TOGGLE_LOCK_FACT'; factId: string } \| { type: 'CONFIRM_FACT_VAULT' } \| { type: 'SET_PURPOSE'; purpose: Purpose } \| { type: 'SET_AUDIENCE'; audience: Audience \| null } \| { type: 'CONFIRM_SITUATION' } \| { type: 'ADD_PIECE'; piece: SentencePiece } \| { type: 'REMOVE_PIECE'; uid: string } \| { type: 'MOVE_PIECE'; uid: string; dir: 'up' \| 'down' } \| { type: 'UNDO' } \| { type: 'CLEAR_BUILT' } \| { type: 'CONFIRM_PRESERVATION' } \| { type: 'SET_REASON'; reason: Partial | learner-text-candidate | long-or-dense, technical-or-internal |
| src/lib/accessibilityLabels.test.ts:4:11 | text | fact kind labels | learner-text-candidate | — |
| src/lib/accessibilityLabels.test.ts:5:7 | text | names a target as 대상 instead of the generic 무엇을 label | learner-text-candidate | — |
| src/lib/accessibilityLabels.test.ts:6:42 | text | 대상 | learner-text-candidate | repeated-text |
| src/lib/accessibilityLabels.ts:3:26 | text | 필수 사실: 수요일 오후 5시, 도서관 반납함 | learner-text-candidate | — |
| src/lib/accessibilityLabels.ts:7:32 | text | 필수 사실 | learner-text-candidate | — |
| src/lib/accessibilityLabels.ts:7:42 | text | 바꿀 수 있는 표현 | learner-text-candidate | — |
| src/lib/accessibilityLabels.ts:9:11 | text | ${req}, ${kindLabel}: ${unit.text}. | learner-text-candidate | — |
| src/lib/accessibilityLabels.ts:15:11 | text | 누가 | learner-text-candidate | repeated-text |
| src/lib/accessibilityLabels.ts:16:12 | text | 무엇을 | learner-text-candidate | — |
| src/lib/accessibilityLabels.ts:17:14 | text | 대상 | learner-text-candidate | repeated-text |
| src/lib/accessibilityLabels.ts:18:12 | text | 언제 | learner-text-candidate | repeated-text |
| src/lib/accessibilityLabels.ts:19:13 | text | 어디서 | learner-text-candidate | repeated-text |
| src/lib/accessibilityLabels.ts:20:16 | text | 수량 | learner-text-candidate | repeated-text |
| src/lib/accessibilityLabels.ts:21:17 | text | 조건 | learner-text-candidate | repeated-text |
| src/lib/accessibilityLabels.ts:22:14 | text | 이유 | learner-text-candidate | — |
| src/lib/audienceFit.test.ts:8:10 | text | 핵심 사실 | learner-text-candidate | repeated-text |
| src/lib/audienceFit.ts:24:39 | text | p.category === 'polite'); let needsMoreDetail = false; let needsSimplification = false; let mismatch = false; if (audience === 'newListener' \|\| audience === 'teacher') { // 처음 듣는 사람/선생님 → 한 조각만으로는 배경을 설명하기 어려움 if (detailPieces.length | learner-text-candidate | long-or-dense |
| src/lib/audienceFit.ts:41:12 | text | ${meta.name}: ${meta.detailHint}. ${meta.toneHint}. | hint | long-or-dense |
| src/lib/contentContract.test.ts:16:14 | text | 알 수 없는 사실 | learner-text-candidate | — |
| src/lib/contentContract.ts:29:19 | text | 조각이 존재하지 않는 사실 ID를 가리킵니다. | learner-text-candidate | missing-term-explanation, technical-or-internal |
| src/lib/contentContract.ts:37:19 | text | 핵심 사실 조각은 기존 사실 연결 또는 새 사실 표식이 필요합니다. | learner-text-candidate | — |
| src/lib/mission5.test.ts:6:39 | text | 이유가 있어요 | learner-text-candidate | repeated-text |
| src/lib/mission5.test.ts:8:36 | text | 목적과 독자에 잘 맞아서요. | learner-text-candidate | — |
| src/lib/purposeFit.test.ts:8:10 | text | 핵심 사실 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.test.ts:15:10 | text | 이유가 있어요 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.test.ts:21:10 | text | 함께 해요 | learner-text-candidate | — |
| src/lib/purposeFit.test.ts:29:39 | text | 핵심 사실 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.test.ts:36:39 | text | 행동 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.test.ts:43:39 | text | 제안 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.test.ts:57:39 | text | 요청 행동 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:25:25 | text | p.category !== 'title' && p.category !== 'emphasis').length | learner-text-candidate | long-or-dense |
| src/lib/purposeFit.ts:25:42 | text | title | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:25:68 | text | emphasis | learner-text-candidate | — |
| src/lib/purposeFit.ts:33:27 | text | 핵심 사실 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:34:30 | text | 간결함 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:37:32 | text | 핵심 사실 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:38:35 | text | 간결함 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:46:27 | text | 대상 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:46:33 | text | 조건 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:47:29 | text | 행동 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:47:35 | text | 순서 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:50:32 | text | 대상 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:50:38 | text | 조건 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:51:34 | text | 행동 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:51:40 | text | 순서 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:59:27 | text | 주장 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:60:29 | text | 이유 또는 근거 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:61:29 | text | 제안 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:64:32 | text | 주장 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:65:34 | text | 이유 또는 근거 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:66:34 | text | 제안 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:74:27 | text | 대상 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:74:33 | text | 시점 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:75:29 | text | 요청 행동 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:78:32 | text | 대상 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:78:38 | text | 시점 | learner-text-candidate | repeated-text |
| src/lib/purposeFit.ts:79:34 | text | 요청 행동 | learner-text-candidate | repeated-text |

## Limitations

- Candidates are triage signals, not an automatic grade-level or readability certification.
- Static scanning can miss runtime-composed text, fetched content, canvas/image text, and some template syntax.
- Every candidate requires rendered-state, target-grade, learning-intent, and curriculum-accuracy review.
- This command reads source files and writes only the optional report path; it never rewrites source files.

## Configuration

- Extensions: `.astro, .cjs, .htm, .html, .js, .jsx, .mjs, .svelte, .ts, .tsx, .vue`
- Excluded directories: `.git, .next, .nuxt, .parcel-cache, .turbo, .vite, build, coverage, dist, node_modules, out, target, vendor`
