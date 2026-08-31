# 문장 목적 변환소 UX 개선 계획

- 작성일: 2026-08-31
- 구현 상태: 시작 전
- 원칙: 학습 로직·가상 사실 데이터·밝은 테마·정적 SPA 경계를 보존하고 새 의존성을 추가하지 않는다.

## 목표

모바일과 키보드 사용자가 단계 전환을 놓치지 않고, 준비된 다음 행동을 즉시 찾으며, 고정된 미션 조건과 근거 입력을 더 적은 인지 부담으로 이해하게 합니다.

## 구현 순서

1. `StepFocusRegion` 재사용 컴포넌트를 추가합니다.
   - 앱 첫 진입에서는 화면만 상단으로 옮기고 자동 초점은 주지 않습니다.
   - 미션 또는 학습 단계가 바뀌면 문서 상단으로 이동합니다.
   - 새 단계의 `h2`에 `tabIndex=-1`을 부여하고 `preventScroll` 초점을 제공합니다.
   - 일반 미션과 미션 5 내부 단계에 모두 적용합니다.
   - 결과에서 미션 목록으로 돌아갈 때 시작 제목도 같은 방식으로 안내합니다.
2. 핵심 버튼 강조 조건을 교정합니다.
   - 사실 잠금과 목적·독자 확정 버튼은 활성·준비 상태에서만 `gi-pulse`를 받습니다.
   - 비활성 버튼은 CSS 방어 규칙으로 애니메이션과 외곽선을 제거합니다.
3. `SituationSelector`의 고정 미션 화면을 간소화합니다.
   - 고정 목적·독자라면 해당 카드만 렌더링합니다.
   - 자유 선택 미션은 기존 가능한 조합만 유지합니다.
4. 라디오 키보드 동작을 완성합니다.
   - 화살표·Home·End로 선택한 카드에 실제 초점도 이동합니다.
5. 근거 틀과 업데이트 문구를 학생 친화적으로 바꿉니다.
   - 내부 `t1`~`t4`를 접근 가능한 이름에서 제거합니다.
   - 2026-08-31 개선 내역을 추가하고 기존 개발 용어를 쉬운 말로 바꿉니다.
6. 320px 헤더를 다듬습니다.
   - 매우 좁은 화면에서는 제목 영역과 업데이트 버튼을 세로 배치합니다.
   - 버튼 문구 줄바꿈을 막습니다.
7. 개발 중 빠른 새로고침 경고를 제거합니다.
   - `useChangelog` 훅을 모달 컴포넌트 파일에서 분리해 Vite Fast Refresh 계약을 지킵니다.

## 변경 예상 파일

- `src/features/sentence-purpose-transform/StepFocusRegion.tsx` 신규
- `src/main.tsx`
- `src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx`
- `src/features/sentence-purpose-transform/Mission5MultiTransform.tsx`
- `src/features/sentence-purpose-transform/FactVault.tsx`
- `src/features/sentence-purpose-transform/SituationSelector.tsx`
- `src/features/sentence-purpose-transform/EffectComparePanel.tsx`
- `src/features/sentence-purpose-transform/ChangelogModal.tsx`
- `src/features/sentence-purpose-transform/useChangelog.ts` 신규
- `src/features/sentence-purpose-transform/missions.ts`
- `src/styles/controls.css`
- `src/styles/sentence-purpose-transform.css`

## 수용 기준

- 320px 첫 진입·새로고침 시 화면이 상단이며 자동 초점은 주지 않음
- 320px에서 미션 선택, 각 단계 전환, 미션 목록 복귀 직후 새 제목이 화면 안에 있고 초점을 받음
- 비활성 핵심 버튼에는 `gi-pulse`가 없고, 준비된 활성 버튼에만 있음
- 미션 1~4의 목적·독자 화면에는 고정 목적 카드 1개와 고정 독자 카드 1개만 보임
- 자유 선택 미션에서 Arrow/Home/End가 선택과 초점을 함께 이동함
- 근거 틀의 접근 가능한 이름에 `t1`~`t4`가 노출되지 않음
- 320·375·1280px에서 가로 스크롤이 없음
- 업데이트 모달 Escape·초점 복귀가 유지됨
- `npm test`, `npm run build`, `git diff --check` 통과
- 코드 파일은 모두 500줄 미만

## 제외 범위

- 학습 판정 알고리즘·문장 조각 콘텐츠 재작성
- 로그인·백엔드·학생 데이터 저장
- VoiceOver 구현·검증
- 생성 이미지와 별도 시뮬레이션
- 커밋·푸시·배포·HVC 등록
