# 문장 목적 변환소 UX 개선 최종 보고서

## 실행 요약

- mode: `full`
- target: `/Volumes/ External Drive 256G/Dev2/z-ai/sentence-purpose-transform`
- date: 2026-08-31
- Stage 0: `ready`
- primary persona: 초5~6 서윤(10~12세, 제목·라벨을 먼저 훑고 근거를 기대하는 학습자)
- viewports: 320×812, 375×812, 1280×900
- baseline score: 78/100, `fail` — 모바일 단계 전환과 잘못된 CTA 강조 P1 존재
- final observational score: 92/100
- strict gate result: `blocked` — 알려진 P0/P1은 0개이지만 Browser Plugin에서 최초 Tab 순서 전체 자동화가 반복 재현되지 않아 마우스 없는 전체 경로의 릴리스급 증거만 남음
- implementation status: 완료

점수는 실제 학생 연구가 아닌 렌더링·행동·소스·테스트 증거에 따른 보조 지표입니다. strict gate의 `blocked`는 확인 도구의 한계를 뜻하며, 확인된 코드 결함이 남았다는 뜻은 아닙니다.

## P0–P3 장부

| ID | 등급 | 발견 | 조치 | 상태 |
| --- | --- | --- | --- | --- |
| EDU-UX-001 | P1 | 모바일 단계 전환 뒤 이전 스크롤이 남아 새 단계 제목이 화면 밖에 위치 | `StepFocusRegion`으로 상단 이동과 제목 초점 제공, 미션 5 내부 단계 포함 | fixed |
| EDU-UX-002 | P1 | 비활성 사실 잠금·목적/독자 버튼이 깜빡임 | 활성·준비 상태에서만 `gi-pulse`, 비활성 CSS 방어 추가 | fixed |
| EDU-UX-003 | P1 | 새로고침 뒤 브라우저가 시작 화면의 이전 스크롤 위치를 늦게 복원 | React 렌더 전에 `history.scrollRestoration='manual'` 적용 | fixed |
| EDU-UX-004 | P2 | 고정 미션에도 선택할 수 없는 목적·독자 카드가 모두 표시 | 고정 카드 각 1개만 렌더링 | fixed |
| EDU-UX-005 | P2 | 화살표 키 선택은 바뀌지만 DOM 초점이 이전 카드에 남음 | Arrow/Home/End 선택과 초점을 동기화하고 disabled 카드 제외 | fixed |
| EDU-UX-006 | P2 | 근거 틀에 `t1`~`t4`, 중복 `독자 빈칸` 이름 노출 | 순서·문장 맥락을 포함한 고유 이름으로 교체 | fixed |
| EDU-UX-007 | P2 | 업데이트 내역에 MVP·gi-pulse·44px·콘텐츠 조합 등 개발 용어 노출 | 모든 항목을 학생 행동 중심 문구로 변경 | fixed |
| EDU-UX-008 | P3 | 320px 헤더의 제목과 업데이트 버튼이 압축·줄바꿈 | 359px 이하 세로 배치와 버튼 `nowrap` | fixed |
| EDU-UX-009 | P3 | 모달 파일의 컴포넌트·훅 혼합 export로 Fast Refresh 경고 | `useChangelog.ts` 분리, 후속 HMR에서 경고 없음 확인 | fixed |

- open P0: 0
- open P1: 0
- open P2/P3: 0 known code issue

## 학생 언어 감사

- 제목·지시·버튼·선택지·오답·회복·완료·다음 행동을 실제 상태에서 검토했습니다.
- “사실은 그대로, 표현만 바꾸기” 학습 의도를 유지했습니다.
- 새 사실을 넣거나 필수 사실을 빠뜨린 문장을 실제로 제출했고, 누락·새 정보·다시 고치기 안내가 표시되는 것을 확인했습니다.
- 수정된 업데이트 문구가 375px 모달에 실제 표시되고 개발 용어가 사라진 것을 확인했습니다.
- 상세 장부: `work/elementary-webapp-ux-language-audit.md`

## 시뮬레이션·이미지 판정

- simulation decision: `not-needed`
- simulation test: `N/A`
- model boundary: 이 앱은 변수 기반 현상 모델이 아닌 제한된 문장 조각 구성·판정 활동
- image decision: `no-image-needed`
- image generation: `not run`
- 이유: 학습 대상이 문장 자체라 생성 삽화가 설명을 줄이거나 개념 이해를 더하지 않고 비교 집중을 흐릴 수 있음

## 전문 경로

```text
route=design-system
observed-statuses=ui-ux-pro-max:filesystem-only, design-system:runtime-available, impeccable:runtime-available, product-design:audit:runtime-available, design-review:runtime-available, qa:runtime-available, built-in:built-in
action=continue
fallback-reason=ui-ux-pro-max was not runtime-available; selected first runtime-available fallback design-system.
```

추가로 기존 프로젝트의 학습 로직·밝은 테마·기술 스택을 보존하는 `redesign-existing-projects` 원칙을 적용했습니다. 새 라이브러리와 새 이미지는 추가하지 않았습니다.

## 변경 파일

- `src/features/sentence-purpose-transform/StepFocusRegion.tsx` 신규
- `src/features/sentence-purpose-transform/useChangelog.ts` 신규
- `src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx`
- `src/features/sentence-purpose-transform/Mission5MultiTransform.tsx`
- `src/features/sentence-purpose-transform/FactVault.tsx`
- `src/features/sentence-purpose-transform/SituationSelector.tsx`
- `src/features/sentence-purpose-transform/EffectComparePanel.tsx`
- `src/features/sentence-purpose-transform/ChangelogModal.tsx`
- `src/features/sentence-purpose-transform/missions.ts`
- `src/main.tsx`
- `src/styles/controls.css`
- `src/styles/sentence-purpose-transform.css`

모든 코드 파일은 500줄 미만이며 가장 긴 파일은 382줄입니다. `package.json`과 lockfile은 바뀌지 않았습니다.

## 자동·브라우저 증거

- `npm test`: 7개 파일, 14개 테스트 통과
- `npm run build`: TypeScript + Vite 빌드 통과, 55 modules transformed
- `git diff --check`: 통과
- 1280px 미션 1: 필수 사실 잠금 → 고정 상황 → 의도적 누락·새 사실 제출 → 구체적 피드백 → 수정 → 성공 → 근거 → 결과 → 미션 목록 복귀 통과
- 320px: scrollY 0, 가로 넘침 0, 헤더 세로 배치, 44px 업데이트 버튼, 비활성 pulse 없음, 단계 전환 제목 초점 통과
- 375px: 가로 넘침 0, 고유 근거 입력 이름, 업데이트 모달 초점·Escape·복귀 통과
- 1280px: 가로 넘침 0, 문서 title·lang 통과
- 최종 새 탭 냉시작 브라우저 console error/warning: 0
- Vite HMR: 훅 분리 후 모달 파일 재감지에서 경고 없이 update 확인

증거 파일:

- `work/improved-320-entry.png`
- `work/improved-375-changelog.png`
- `work/improved-1280-entry.png`
- `work/elementary-webapp-ux-regression-checklist.md`

## 관찰 가능한 이해 점검

실제 학생 연구가 아닌 서윤 페르소나 휴리스틱 결과입니다.

| probe | 화면 단서와 관찰 결과 |
| --- | --- |
| 지시 재진술 | 시작 화면의 “사실은 그대로, 표현만 바꾸는 연습”으로 학습 목표를 한 문장으로 재진술 가능 |
| 결과 예측 | 준비 전 버튼은 비활성이고 준비 후 강조되어 다음 단계 이동을 예측 가능 |
| 용어 설명 | 목적은 “무엇을 하려고”, 독자는 “누구에게”라는 질문과 카드 설명으로 연결됨 |
| 회복 행동 | 누락 사실·새 사실 피드백 뒤 “문장 다시 고치기”로 돌아가 문제 조각을 지우고 필수 조각을 추가해 성공 |
| 완료 후 전이 | 다음 미션 강조 버튼과 새 미션·결과 복사 선택지가 표시됨 |

## 실행하지 않았거나 남은 사람 확인

- 초기 페이지에서 시작하는 전체 Tab→Enter 핵심 경로 자동화: `partial/tool limitation`. 같은 입력 시도 3회 후 반복을 중단했고, 라디오 화살표·모달 Escape·초점 복귀·네이티브 의미 구조는 별도 확인했습니다.
- 실제 초등 학생·교사의 이해도와 교실 사용성: `human-review`
- VoiceOver 구현·검증: 프로젝트 규칙에 따라 제외
- 미션 5 네 번 변환 전체 브라우저 완주: `not run`; 완료 조건 단위 테스트와 내부 단계 전환 코드는 통과
- 공개 URL 배포 확인: 이번 요청 범위에서 커밋·푸시·배포하지 않았으므로 `not run`

## 학습 takeaway와 다음 행동

학습자는 “시간·장소·대상 같은 사실은 그대로 두고, 누구에게 왜 말하는지에 맞춰 표현을 바꾼다”는 결과를 확인합니다. 다음 권장 행동은 로컬 HVC에서 실제 키보드 전체 경로와 초등 5~6학년 학생 또는 교사의 짧은 이해 점검을 수행한 뒤, 별도 요청으로 커밋·푸시·배포하는 것입니다.
