# Sentence Purpose Transform Improvement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 문장 목적 변환 학습 앱의 판정 정확성, 콘텐츠 계약, 미션 진행, 접근성, 반응형 UI, 결과 피드백, 테스트와 배포 구성을 실제 학습자 흐름 기준으로 개선합니다.

**Architecture:** 기존의 `data → lib → features → styles` 경계를 유지하면서 판정 규칙과 콘텐츠 조합을 순수 함수로 고정하고, React 화면은 그 결과를 일관된 상태·피드백으로 보여줍니다. 미션 5의 별도 학습 흐름은 공통 단계 표시와 충돌하지 않도록 자체 진행 상태를 소유하고, 결과·모달·선택 컨트롤은 접근성 있는 기본 HTML 동작을 우선합니다.

**Tech Stack:** React 18, TypeScript strict mode, Vite, Vitest, GitHub Actions Pages, 인앱 브라우저 수동 학습자 QA.

**Spec:** `2026-08-06-sentence-purpose-transform-studio-mvp.md` 및 본 개선 계획의 승인된 범위.

## Global Constraints

- 학습 대상은 초등 5~6학년이며, 원래 사실을 바꾸지 않고 목적·독자에 맞게 표현만 바꿉니다.
- 중요한 학습 진행 버튼은 `gi-pulse` 강조를 유지하고, `prefers-reduced-motion` 사용자의 움직임은 줄입니다.
- 클릭 가능한 주요 요소의 최소 높이와 폭은 44px로 맞춥니다.
- 로컬 전용 앱의 범위를 유지하며 로그인, 개인정보 수집, 백엔드 저장소를 추가하지 않습니다.
- 한 파일이 500줄 이상이 되지 않도록 CSS와 컴포넌트의 책임을 분리합니다.
- 계획에서 언급한 모든 판정·콘텐츠 규칙은 자동 테스트로 재현할 수 있어야 합니다.
- 배포·커밋·푸시는 이번 구현 범위에 포함하지 않으며, 완료 보고에는 실제로 실행한 검증만 기록합니다.

## Visual Thesis and Interaction Thesis

- **Visual thesis:** 따뜻한 종이 질감의 편집형 학습 워크시트에 작은 색상 신호를 더해, 학생이 지금 보존해야 할 사실과 다음 행동을 한눈에 찾게 합니다.
- **Content plan:** 첫 화면은 학습 목표와 현재 미션, 중간 화면은 사실 금고와 문장 조립, 마지막 화면은 보존된 사실·목적 적합성·다음 미션을 보여줍니다.
- **Interaction thesis:** 사실 조각 선택은 즉시 보존 상태를 갱신하고, 단계 전환은 짧은 진입 애니메이션으로 방향을 알려주며, 핵심 진행 버튼은 `gi-pulse`로 다음 행동을 강조합니다. 모달은 열릴 때 초점을 받고 Escape와 닫기 후 초점 복귀를 지원합니다.

## Baseline Findings

- `npm run build`는 통과했지만 테스트와 린트 명령이 없었습니다.
- 설득 목적에서 주장과 이유만 채워도 적합 판정이 true가 되어 제안 없이 다음 단계로 진행할 수 있었습니다.
- 선언된 목적·독자 조합 전체를 만들지 못한 경우 다른 독자의 번들을 조용히 재사용했습니다.
- 일부 새 위치·위험 표현이 `isNewFact` 없이 사실 보존 검사에 들어갔습니다.
- 미션 5는 최종 선택과 이유를 제출하기 전에 완료 콜백을 호출하고 공통 단계 표시가 실제 하위 단계를 반영하지 않았습니다.
- 근거 선택 행 안에 버튼과 입력이 중첩되어 있었고, 변경 내역 모달은 Escape·초점 관리가 없었습니다.
- 작은 버튼·칩·아이콘 버튼이 44px 기준보다 작았고, 주 색상 일부가 일반 텍스트 대비 기준을 충족하지 못했습니다.
- 결과 카드에서 핵심 사실 조각이 `바꾼 표현 요소`에서 빠졌고 클립보드 실패가 사용자에게 표시되지 않았습니다.
- 주 스타일시트가 500줄을 초과했고, CI는 빌드만 실행했습니다.

## Acceptance Checklist

- 설득 목적에서 제안이 없는 문장은 적합하지 않으며, 화면에 빠진 요소가 정확히 표시됩니다.
- 지원하지 않는 목적·독자 조합은 선택지에서 제거되거나 준비되지 않은 조합임을 명확히 표시하며 다른 독자 번들을 재사용하지 않습니다.
- 콘텐츠에 새 사실이 들어가면 명시적인 `isNewFact` 또는 기존 사실 연결이 있어야 하고, 보존 검사는 그 차이를 설명합니다.
- 미션 5는 네 변환을 모두 마치고 최종 문장 선택과 이유를 입력한 뒤 완료 버튼을 눌러야 완료됩니다.
- Escape, 닫기 후 초점 복귀, `aria-current`, 키보드 라디오 이동, 중첩 인터랙티브 제거가 동작합니다.
- 주요 클릭 요소가 44px 이상이고, 주 버튼·보조 텍스트 색상 대비가 개선됩니다.
- 결과 카드에 변환된 표현 요소와 클립보드 실패 안내가 표시됩니다.
- `npm test`, `npm run build`가 통과하고 GitHub Actions가 테스트 후 빌드합니다.
- 390px 폭과 데스크톱 폭에서 가로 스크롤이 없고, 미션 1의 실제 학습자 경로와 미션 5의 완료 경로를 브라우저에서 확인합니다.

---

### Task 1: 테스트 실행 기반과 판정 계약을 먼저 고정

**Files:**
- Modify: `package.json` — `test`, `test:watch` 스크립트와 Vitest 개발 의존성 추가
- Create: `vitest.config.ts` — Vite 설정을 재사용하는 테스트 설정
- Create: `src/lib/purposeFit.test.ts` — 목적별 필수 요소와 설득 제안 회귀 테스트
- Create: `src/lib/sentencePieces.test.ts` — 정확한 조합 조회와 조용한 fallback 금지 테스트
- Create: `src/lib/contentContract.test.ts` — 선언된 콘텐츠의 사실 연결·새 사실 표식 테스트

**Interfaces:**
- Produces `npm test` as a deterministic non-watch test command.
- Tests consume `checkPurposeFit`, `getPieceBundle`, `getAvailableAudiences`, `FACT_CASES`, and `SENTENCE_PIECES`.

- [x] **Step 1: Vitest 의존성 설치와 실행 스크립트 추가**

  Run:

  ```bash
  npm install --save-dev vitest
  ```

  `package.json`에 다음 스크립트를 둡니다.

  ```json
  "test": "vitest run",
  "test:watch": "vitest"
  ```

- [x] **Step 2: 현재 버그를 잡는 실패 테스트 작성**

  `src/lib/purposeFit.test.ts`에는 다음 행동을 고정합니다.

  ```ts
  it('persuade requires a proposal in addition to a claim and reason', () => {
    const result = checkPurposeFit('persuade', [corePiece, reasonPiece]);
    expect(result.fit).toBe(false);
    expect(result.missing).toContain('제안');
  });
  ```

  `src/lib/sentencePieces.test.ts`에는 정확한 번들이 없을 때 빈 배열을 반환하고, 다른 독자의 문장을 반환하지 않는 테스트를 둡니다.

  ```ts
  it('does not silently reuse another audience bundle', () => {
    expect(getPieceBundle('libraryBin', 'guide', 'friend')).toEqual([]);
  });
  ```

  `src/lib/contentContract.test.ts`에는 `linkedFactIds`가 없는 사실성 문장 조각이 `isNewFact: true`를 가져야 한다는 테스트와 모든 연결 ID가 실제 사실 ID인지 확인하는 테스트를 둡니다.

- [x] **Step 3: 실패 이유를 확인**

  Run:

  ```bash
  npm test -- src/lib/purposeFit.test.ts src/lib/sentencePieces.test.ts src/lib/contentContract.test.ts
  ```

  Expected: 설득 제안 테스트, 정확한 빈 번들 테스트, 콘텐츠 계약 테스트가 현재 구현의 부족한 동작을 이유로 실패합니다. 테스트 수집 오류가 아니라 실제 기대값 불일치여야 합니다.

### Task 2: 목적 적합성·학습 게이트를 구현

**Files:**
- Modify: `src/lib/purposeFit.ts` — 목적별 필수 요소를 일관되게 계산
- Modify: `src/features/sentence-purpose-transform/FactPreservationPanel.tsx` — 사실 보존과 목적 적합성을 함께 게이트하고 동적 피드백 표시
- Modify: `src/data/feedbackRules.ts` — 목적별 오해를 하드코딩하지 않는 피드백 문구
- Modify: `src/lib/purposeFit.test.ts` — 정보·안내·설득·요청 회귀 사례 보강

**Interfaces:**
- `checkPurposeFit(purpose: Purpose, pieces: SentencePiece[]): PurposeFitResult` remains the public function.
- `PurposeFitResult.fit` is true only when that purpose's required elements are present.
- `canProceedAfterCheck(factsPreserved: boolean, purposeFits: boolean, audienceFits?: boolean): boolean` is the shared learning gate.
- `FactPreservationPanel` proceeds only when facts, purpose, and audience all pass.

- [x] **Step 1: 목적별 실패 케이스를 추가하고 RED 확인**

  정보는 핵심 사실이 없으면 실패하고, 안내·요청은 행동이 없으면 실패하며, 설득은 주장·이유·제안을 모두 요구하도록 테스트합니다.

  ```ts
  expect(checkPurposeFit('guide', [corePiece]).fit).toBe(false);
  expect(checkPurposeFit('request', [corePiece]).fit).toBe(false);
  expect(checkPurposeFit('persuade', [corePiece, reasonPiece]).fit).toBe(false);
  expect(checkPurposeFit('persuade', [corePiece, reasonPiece, actionPiece]).fit).toBe(true);
  ```

  Run the focused test and confirm the new assertions fail before production code is changed.

- [x] **Step 2: 최소 판정 로직 구현**

  `checkPurposeFit`에서 `coreFact`, `action`, `reason`, `proposal`을 카테고리와 `purpose` 메타로 계산하고, 설득은 `hasCore && hasReason && hasAction`으로 판정합니다. 정보는 핵심 사실과 불필요한 행동 지시가 없는 간결한 조합을, 안내는 핵심 사실과 행동을, 요청은 핵심 사실과 행동을 요구합니다. 누락 문자열은 `PurposeMeta.requiredElements`의 한국어 라벨과 일치시킵니다.

- [x] **Step 3: 화면 게이트와 피드백 연결**

  `FactPreservationPanel`은 다음 세 상태를 분리합니다.

  ```ts
  const canProceed = preservation.allPreserved && purposeFit.fit;
  const hasPurposeGap = preservation.allPreserved && !purposeFit.fit;
  ```

  사실 보존 오류, 목적 요소 누락, 모두 통과한 상태를 각각 다른 `role="status"` 문구로 렌더링하고, 다음 버튼은 `canProceed`일 때만 활성화합니다. 기존의 설득 전용 하드코딩 문구는 선택한 목적에 맞는 일반 문구로 교체합니다.

- [x] **Step 4: 테스트 GREEN과 전체 회귀 확인**

  ```bash
  npm test -- src/lib/purposeFit.test.ts
  npm test
  ```

### Task 3: 콘텐츠 조합과 사실 보존 계약 정비

**Files:**
- Modify: `src/data/sentencePieces.ts` — exact bundle 조회, 사용 가능한 독자 조회, fallback 제거
- Modify: `src/data/types.ts` — 새 사실 표식과 연결 관계 타입을 명확히 유지
- Modify: `src/data/sentencePieces.ts` — 위치·위험·상황 조각의 `linkedFactIds`/`isNewFact` 정비
- Modify: `src/features/sentence-purpose-transform/SituationSelector.tsx` — 목적에 맞는 정확한 독자만 노출
- Modify: `src/features/sentence-purpose-transform/useSentenceTransformState.ts` — 목적 변경 시 무효 독자 선택 초기화
- Modify: `src/features/sentence-purpose-transform/SentenceBuilder.tsx` — 빈 번들·새 사실 안내
- Create: `src/lib/contentContract.ts` — 사실 ID와 조각 연결 검증 함수
- Modify: `src/lib/contentContract.test.ts` — 모든 번들 검증 회귀 테스트

**Interfaces:**
- `getPieceBundle(factCaseId, purpose, audience): SentencePiece[]` returns an exact bundle or `[]`.
- `getAvailableAudiences(factCaseId, purpose): Audience[]` returns only exact bundle keys.
- `validateSentencePieces(factCases, pieces): ContentContractIssue[]` reports unknown fact IDs and unmarked factual additions.

- [x] **Step 1: 정확한 번들과 가용 독자 테스트를 확장하고 RED 확인**

  지원하지 않는 조합은 빈 배열, 지원하는 조합은 원래 조각을 반환하며, 가용 독자 목록은 실제 bundle key의 독자만 반환한다는 테스트를 추가합니다. 모든 조각의 `linkedFactIds`는 실제 `FactCase.factUnits.id` 또는 명시적 `isNewFact`로 설명되어야 한다는 테스트를 추가합니다.

- [x] **Step 2: 콘텐츠 검증 함수와 exact lookup 구현**

  `getPieceBundle`의 다른 audience/purpose fallback을 삭제합니다. `getAvailableAudiences`는 내부 bundle key를 순회해 중복 없이 반환합니다. `validateSentencePieces`는 다음 규칙으로 이슈를 반환합니다.

  ```ts
  if (piece.linkedFactIds?.some(id => !factIds.has(id))) issue('unknown-fact-id');
  if (piece.category === 'coreFact' && piece.linkedFactIds?.length === 0 && !piece.isNewFact) issue('unexplained-fact');
  ```

  설명·강조·공손 표현 자체는 사실 단위가 아니므로 `coreFact` 중심으로 검사하고, 위험·위치·상황을 새로 추가한 조각은 `isNewFact: true`로 명시합니다. 가능한 경우 기존 사실 ID를 연결해 새 사실을 제거합니다.

- [x] **Step 3: 선택 화면을 exact bundle 기준으로 연결**

  목적을 선택하면 `getAvailableAudiences` 결과만 독자 버튼으로 보여줍니다. 기존 선택 독자가 새 목적에서 지원되지 않으면 `null`로 초기화합니다. 번들이 비어 있는 상태에서는 조립·확인 버튼을 활성화하지 않고 “이 목적과 독자 조합은 아직 준비되지 않았어요”를 표시합니다.

- [x] **Step 4: 콘텐츠 데이터의 문제 조각을 정비**

  `libraryBin-inform-newListener`, `playground-guide-newListener`, `playground-persuade-class` 같은 조각은 실제 원문 사실에 연결하거나 `isNewFact: true`를 명시합니다. 학습 경로에서 필수인 조각은 기존 사실만으로 다시 작성해 새 사실 경고 때문에 정상 경로가 막히지 않게 합니다.

- [x] **Step 5: 테스트 GREEN 확인**

  ```bash
  npm test -- src/lib/sentencePieces.test.ts src/lib/contentContract.test.ts
  npm test
  ```

### Task 4: 미션 5 진행 상태와 최종 완료 게이트 수정

**Files:**
- Modify: `src/features/sentence-purpose-transform/Mission5MultiTransform.tsx` — 하위 단계와 완료 콜백 연결
- Modify: `src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx` — 미션 5에서 고정된 공통 단계 표시 제거 또는 정확한 하위 상태 사용
- Modify: `src/features/sentence-purpose-transform/StepIndicator.tsx` — `aria-current="step"` 지원
- Modify: `src/features/sentence-purpose-transform/Mission5MultiTransform.tsx` — 최종 문장·이유 제출 버튼과 완료 상태

**Interfaces:**
- `Mission5FinalCompare` receives `onComplete: () => void` and calls it only from its final submit button.
- `Mission5MultiTransform` does not call `onComplete` from a phase-only `useEffect`.
- The common `StepIndicator` never displays a stale `situation` step while Mission 5 owns its own progress indicator.

- [x] **Step 1: 최종 게이트 실패 테스트를 순수 상태 함수로 작성**

  선택된 문장(`bestPick`) 또는 이유(`bestReason`)가 없으면 완료 조건이 false이고, 둘 다 있으면 true가 되는 작은 순수 함수 `canCompleteMission5(bestPick, bestReason)`를 만들기 위한 테스트를 작성합니다.

- [x] **Step 2: 최소 완료 조건 구현**

  최종 화면에 `최종 성찰 완료` 버튼을 추가하고, 다음 조건을 만족할 때만 활성화합니다.

  ```ts
  const canComplete = bestPick !== null && bestReason.trim().length > 0;
  ```

  버튼 클릭 시에만 `onComplete()`를 호출하고, 완료 전에는 “아직 미션을 완료하지 않았어요”를 표시합니다.

- [x] **Step 3: 진행 표시 충돌 제거**

  Mission 5 화면에서는 공통 `StepIndicator`를 숨기고 기존 `Mission5Progress`를 단일 진행 표시로 사용합니다. 일반 미션의 `StepIndicator`에는 현재 단계에 `aria-current="step"`를 추가합니다.

- [x] **Step 4: 브라우저 수동 회귀**

  미션 5에서 네 변환을 거친 뒤 최종 문장 선택만 했을 때 완료되지 않는지, 이유 입력 후 최종 버튼을 눌렀을 때만 완료 배지가 생기는지 확인합니다.

### Task 5: 접근성·반응형·색상 대비·결과 피드백 개선

**Files:**
- Modify: `src/features/sentence-purpose-transform/EffectComparePanel.tsx` — 버튼 안의 입력 중첩 제거, 근거 선택 컨트롤 분리
- Modify: `src/features/sentence-purpose-transform/ChangelogModal.tsx` — Escape, 초점 진입·복귀, 기본 초점 순환
- Modify: `src/features/sentence-purpose-transform/SentencePurposeTransformApp.tsx` — 변경 내역 트리거 ref 전달
- Modify: `src/features/sentence-purpose-transform/SituationSelector.tsx` — 라디오 그룹 방향키·roving tabindex
- Modify: `src/features/sentence-purpose-transform/StepIndicator.tsx` — 현재 단계 의미 부여
- Modify: `src/styles/tokens.css` — 대비가 확보된 주 색상 토큰
- Modify: `src/styles/sentence-purpose-transform.css` — 44px 클릭 영역, 근거 행, 포커스 스타일, 모바일 레이아웃
- Modify: `src/features/sentence-purpose-transform/ResultCard.tsx` — 실제 변환 조각과 복사 실패 안내
- Modify: `src/features/sentence-purpose-transform/EffectComparePanel.tsx` — 허용 변형 효과를 설명 정보로 표시

**Interfaces:**
- `ChangelogModal` accepts an optional `triggerRef` and restores focus when closed.
- All custom radio buttons remain keyboard operable with Arrow keys, Home, End, Enter, and Space.
- Copy feedback is exposed through `role="status"` and remains visible after clipboard failure.

- [x] **Step 1: 인터랙티브 중첩을 없애는 마크업으로 변경**

  근거 행을 `<div>`로 만들고, 템플릿 선택 버튼과 동적 입력을 형제 요소로 둡니다. 선택 버튼에는 `aria-pressed`와 목적을 설명하는 `aria-label`을 둡니다. 입력은 자체 label과 44px 이상의 높이를 가집니다.

- [x] **Step 2: 모달 키보드 동작 구현**

  모달 열림 시 닫기 버튼에 초점을 두고, `keydown`에서 Escape로 닫습니다. Tab/Shift+Tab이 모달 내부의 포커스 가능한 요소 사이에서 순환하고, 닫힌 뒤 트리거 버튼으로 초점을 돌립니다.

- [x] **Step 3: 라디오·단계 의미 연결**

  목적·독자 그룹은 선택된 버튼을 `tabIndex=0`, 나머지는 `-1`로 두고 방향키로 이동합니다. 단계 목록의 현재 단계에 `aria-current="step"`를 넣습니다.

- [x] **Step 4: 시각 토큰과 터치 영역 수정**

  주 버튼 텍스트 대비가 흰색 기준 4.5:1 이상이 되도록 `--coral`을 어두운 산호색으로 조정하고, 작은 버튼·칩·아이콘 버튼의 최소 크기를 44px로 변경합니다. `:focus-visible` 외곽선을 유지하고 `prefers-reduced-motion`에서 `gi-pulse`와 진입 효과를 줄입니다.

- [x] **Step 5: 결과 피드백 수정**

  결과 카드의 변경 목록은 핵심 사실 조각도 포함해 실제 조립 결과를 설명합니다. 클립보드 API가 실패하면 실패 문구를 `role="status"`로 표시합니다. `acceptableVariants`/`effectTags`가 있는 경우 “정답”으로 오인시키지 않는 참고 효과 태그로 보여줍니다.

- [x] **Step 6: 브라우저 접근성·모바일 확인**

  390px에서 가로 스크롤이 없고, 키보드로 목적·독자·근거·모달을 조작하며 포커스가 보이는지 확인합니다. 브라우저 콘솔 오류가 0건인지 확인합니다.

### Task 6: 구조·CSS·문서·CI 정리

**Files:**
- Create: `src/styles/controls.css` — 버튼·칩·포커스·터치 영역 규칙
- Create: `src/styles/feedback.css` — 피드백·결과·효과 비교 규칙
- Create: `src/styles/overlays.css` — 모달·오버레이 규칙
- Modify: `src/styles/sentence-purpose-transform.css` — 화면별 레이아웃 규칙만 유지하고 분리 파일 import
- Modify: `src/features/sentence-purpose-transform/Mission5MultiTransform.tsx` — 500줄 미만의 하위 컴포넌트 책임 유지
- Modify: `.github/workflows/deploy.yml` — 테스트를 빌드 전에 실행하고 최소 권한 유지
- Modify: `vite.config.ts` — GitHub 저장소 이름 기반 Pages base 경로 계산
- Modify: `index.html` — 외부 폰트 의존을 안전한 fallback으로 줄이고 문서 메타 보강
- Create: `README.md` — 실행, 테스트, 학습 흐름, 로컬 전용 경계, Pages 경로 설명
- Modify: `2026-08-06-sentence-purpose-transform-studio-mvp.md` — 개선 계획·상태 링크와 변경 이력 연결
- Modify: `src/features/sentence-purpose-transform/ChangelogModal.tsx` 또는 변경 이력 데이터 — 2026-08-22 개선 기록 추가

**Interfaces:**
- `npm run build` continues to run `tsc --noEmit && vite build`.
- `.github/workflows/deploy.yml` runs `npm test` before `npm run build`.
- No runtime behavior depends on a CDN font being available.

- [x] **Step 1: 스타일 책임별 분리**

  기존 649줄 스타일시트를 선택자 책임에 따라 controls, feedback, overlays로 이동하고, 각 파일이 500줄 미만인지 `wc -l`로 확인합니다. 화면별 규칙은 원래 파일에 남깁니다.

- [x] **Step 2: 구성과 문서 갱신**

  Pages base 경로를 `GITHUB_REPOSITORY`에서 계산하고, README에 다음 명령을 정확히 기록합니다.

  ```bash
  npm install
  npm run dev
  npm test
  npm run build
  npm run preview
  ```

  README에는 학생 학습 흐름, 브라우저 QA 기준, 로컬 저장·개인정보를 사용하지 않는다는 한계를 적습니다.

- [x] **Step 3: CI에 테스트 게이트 추가**

  Actions에서 `npm ci` 다음에 `npm test`, 그 다음 `npm run build`를 실행합니다. 배포는 테스트와 빌드가 모두 성공한 뒤에만 진행됩니다.

- [x] **Step 4: 구성 검증**

  ```bash
  npm test
  npm run build
  git diff --check
  wc -l src/styles/*.css src/features/sentence-purpose-transform/*.tsx
  ```

### Task 7: 최종 검증과 계획 대조

**Files:**
- Verify: 모든 변경 파일과 `docs/superpowers/plans/2026-08-22-sentence-purpose-transform-improvement.md`
- Verify: `dist/` 생성물은 추적 대상이 아니며, 변경 이력은 실제 구현 결과와 일치

- [x] **Step 1: 전체 자동 검증**

  ```bash
  npm test
  npm run build
  git diff --check
  ```

  기록할 결과에는 테스트 통과 수, 빌드 exit code, diff whitespace 오류 유무를 포함합니다.

- [x] **Step 2: 실제 브라우저 학습자 경로 검증**

  개발 서버를 띄워 미션 1에서 사실 금고 → 상황 선택 → 문장 조립 → 사실 보존 확인 → 효과 비교 → 결과 카드 → 다음 미션을 클릭합니다. 미션 3에서 제안 없는 설득 문장이 진행되지 않는지, 미션 5에서 최종 이유 없는 완료가 막히는지 확인합니다. 데스크톱과 390px 폭에서 콘솔 오류·가로 스크롤·잘린 버튼이 없는지 확인합니다.

- [x] **Step 3: 계획과 구현을 대조**

  acceptance checklist의 각 항목에 대해 코드·테스트·브라우저 증거를 연결합니다. 실제로 실행하지 않은 배포·커밋·푸시는 완료로 표시하지 않습니다.

- [x] **Step 4: 변경 이력 기록**

  앱의 `업데이트 내역` 모달에 2026-08-22 개선 사항을 추가하고, 이 계획 문서를 구현 기준 문서로 링크합니다.

## Expected Residual Risks

- 인앱 브라우저에서 실제 스크린리더 음성 출력까지 자동으로 검증할 수 없으므로, ARIA 구조와 키보드 조작을 우선 검증합니다.
- GitHub Pages 실제 URL과 Actions 실행은 이번 요청에서 배포를 승인받지 않았으므로 로컬 빌드와 workflow 구성까지만 확인합니다.
- 외부 이미지·폰트 CDN이 이미 캐시된 환경은 새 fallback과 화면이 다르게 보일 수 있으므로, 브라우저 QA에서 네트워크 오류와 글꼴 로딩 상태를 함께 기록합니다.
