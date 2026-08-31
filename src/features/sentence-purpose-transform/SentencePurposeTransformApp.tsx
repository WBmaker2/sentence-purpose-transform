import { useEffect, useRef } from 'react';
import { useSentenceTransformState } from './useSentenceTransformState';
import { MISSIONS } from './missions';
import { PURPOSE_CARDS, PURPOSE_LABEL } from '../../data/purposeCards';
import { AUDIENCE_CARDS, AUDIENCE_LABEL } from '../../data/audienceCards';
import { FACT_CASES } from '../../data/factCases';
import { ChangelogModal } from './ChangelogModal';
import { useChangelog } from './useChangelog';
import { StepIndicator } from './StepIndicator';
import { FactVault } from './FactVault';
import { SituationSelector } from './SituationSelector';
import { SentenceBuilder } from './SentenceBuilder';
import { FactPreservationPanel } from './FactPreservationPanel';
import { EffectComparePanel } from './EffectComparePanel';
import { ResultCard } from './ResultCard';
import { Mission5MultiTransform } from './Mission5MultiTransform';
import { StepFocusRegion } from './StepFocusRegion';

// 사양 12.1 메인 앱 셸 — 단계 라우터, 헤더, 미션 메뉴, gi-pulse 결정 로직
export function SentencePurposeTransformApp() {
  const { state, actions } = useSentenceTransformState();
  const changelog = useChangelog();
  const changelogTriggerRef = useRef<HTMLButtonElement>(null);
  const previousStepRef = useRef<typeof state.step | null>(null);

  useEffect(() => {
    const previousStep = previousStepRef.current;

    if (previousStep !== null && previousStep !== 'start' && state.step === 'start') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      const startHeading = document.getElementById('start-title');
      if (startHeading) {
        startHeading.tabIndex = -1;
        startHeading.focus({ preventScroll: true });
      }
    }

    previousStepRef.current = state.step;
  }, [state.step]);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-title-block">
          <p className="app-eyebrow">학교 소식 편집실</p>
          <h1 className="app-title">문장 목적 변환소</h1>
          <p className="app-subtitle">
            같은 사실을 목적과 독자에 맞게 바꿔 보아요
          </p>
        </div>
        <button ref={changelogTriggerRef} className="btn btn--small" onClick={changelog.toggle} aria-haspopup="dialog">
          📋 업데이트 내역
        </button>
      </header>

      {state.step === 'start' && (
        <StartScreen
          onSelect={actions.selectMission}
          currentMissionId={state.missionId}
          completedMissionIds={state.completedMissionIds}
        />
      )}

      {state.step !== 'start' && state.factCaseId && (
        <ActiveMission
          state={state}
          actions={actions}
        />
      )}

      <ChangelogModal open={changelog.open} onClose={changelog.close} triggerRef={changelogTriggerRef} />
    </div>
  );
}

// 시작 화면 — 미션 선택 (사양 12.1)
function StartScreen({
  onSelect,
  currentMissionId,
  completedMissionIds,
}: {
  onSelect: (m: (typeof MISSIONS)[number]) => void;
  currentMissionId: number | null;
  completedMissionIds: number[];
}) {
  const completedCount = completedMissionIds.length;
  return (
    <>
      <section className="panel">
        <p className="panel__eyebrow">시작하기</p>
        <h2 id="start-title" className="panel__title">어떤 변환을 해 볼까요?</h2>
        <p className="panel__lead">
          하나의 사실에서 시작해, 목적과 독자에 맞춰 문장을 다시 설계해 보아요.
          시간·장소·수량 같은 <strong>사실은 그대로</strong> 두고,{' '}
          <strong>표현만 바꾸는</strong> 연습이에요.
        </p>
        {completedCount > 0 && (
          <div className="feedback feedback--ok" style={{ marginTop: 'var(--sp-3)' }} role="status">
            <span aria-hidden="true">🌟</span>
            <span>지금까지 <strong>{completedCount}개</strong> 미션을 완료했어요! 계속 해볼까요?</span>
          </div>
        )}
      </section>

      <ul className="mission-grid" role="list">
        {MISSIONS.map((m) => {
          const fact = FACT_CASES[m.factCaseId];
          const done = completedMissionIds.includes(m.id);
          return (
            <li key={m.id} role="listitem" style={{ listStyle: 'none' }}>
            <button
              className={`mission-card ${done ? 'mission-card--done' : ''}`}
              onClick={() => onSelect(m)}
              aria-label={`미션 ${m.id}: ${m.title}. ${m.desc}${done ? '. 완료한 미션입니다.' : ''}`}
            >
              {done && (
                <span className="mission-card__badge" aria-hidden="true">✓ 완료</span>
              )}
              <span className="mission-card__num">
                {done ? '✓' : m.id === 0 ? '0' : m.id}
              </span>
              <div className="mission-card__title">{m.title}</div>
              <div className="mission-card__desc">{m.desc}</div>
              <div className="mission-card__tags">
                <span className="tag">📰 {fact.title}</span>
                {m.fixedPurpose && (
                  <span className={`tag tag--${m.fixedPurpose}`}>
                    {PURPOSE_CARDS[m.fixedPurpose].icon} {PURPOSE_LABEL[m.fixedPurpose]}
                  </span>
                )}
                {m.fixedAudience && (
                  <span className="tag">
                    {AUDIENCE_CARDS[m.fixedAudience].icon} {AUDIENCE_LABEL[m.fixedAudience]}
                  </span>
                )}
                {m.id === 5 && <span className="tag">🔄 네 목적 비교</span>}
              </div>
            </button>
            </li>
          );
        })}
      </ul>
      {currentMissionId === null && (
        <p className="muted" style={{ textAlign: 'center', marginTop: 'var(--sp-4)' }}>
          미션 0은 연습용이에요. 먼저 해 보아도 좋아요.
        </p>
      )}
    </>
  );
}

// 활성 미션 — 단계 라우터
function ActiveMission({
  state,
  actions,
}: {
  state: ReturnType<typeof useSentenceTransformState>['state'];
  actions: ReturnType<typeof useSentenceTransformState>['actions'];
}) {
  const factCase = FACT_CASES[state.factCaseId!];
  const mission = MISSIONS.find((m) => m.id === state.missionId)!;
  // 다음 미션 (마지막 미션이면 undefined)
  const nextMission =
    mission.id < MISSIONS.length - 1
      ? MISSIONS[mission.id + 1]
      : undefined;

  // 결과 단계에 도달하면 미션을 완료로 기록 (진행도 표시용)
  useEffect(() => {
    if (state.step === 'result') {
      actions.completeMission(mission.id);
    }
  }, [state.step, mission.id, actions]);

  return (
    <>
      <div className="row row--between" style={{ marginBottom: 'var(--sp-3)' }}>
        <button className="btn btn--ghost btn--small" onClick={actions.restart}>
          ← 미션 선택으로
        </button>
        <span className="tag">미션 {mission.id} · {mission.title}</span>
      </div>
      {mission.id !== 5 && <StepIndicator current={state.step} />}

      <StepFocusRegion focusKey={`${mission.id}:${state.step}`}>
        {state.step === 'factVault' && (
          <FactVault
            factCase={factCase}
            lockedFactIds={state.lockedFactIds}
            onToggleLock={actions.toggleLockFact}
            onConfirm={actions.confirmFactVault}
            isTutorial={mission.id === 0}
          />
        )}

        {/* 미션 5: 사실 금고 이후 자체 네 목적 순차 흐름으로 전환 (사양 9절 미션 5) */}
        {mission.id === 5 && state.step !== 'factVault' && (
          <Mission5MultiTransform
            factCase={factCase}
            mission={mission}
            onRestart={actions.restart}
            onComplete={() => actions.completeMission(mission.id)}
          />
        )}

        {state.step === 'situation' && mission.id !== 5 && (
          <SituationSelector
            factCase={factCase}
            purpose={state.purpose}
            audience={state.audience}
            onSelectPurpose={actions.setPurpose}
            onSelectAudience={actions.setAudience}
            onConfirm={actions.confirmSituation}
            mission={mission}
          />
        )}

        {state.step === 'build' && state.purpose && state.audience && mission.id !== 5 && (
          <SentenceBuilder
            factCase={factCase}
            purpose={state.purpose}
            audience={state.audience}
            built={state.built}
            onAdd={actions.addPiece}
            onRemove={actions.removePiece}
            onMove={actions.movePiece}
            onUndo={actions.undo}
            onClear={actions.clearBuilt}
            onCheck={() => actions.goStep('check')}
            canUndo={state.history.length > 0}
          />
        )}

        {state.step === 'check' && state.purpose && state.audience && mission.id !== 5 && (
          <FactPreservationPanel
            factCase={factCase}
            purpose={state.purpose}
            audience={state.audience}
            built={state.built}
            onConfirm={actions.confirmPreservation}
            onBack={() => actions.goStep('build')}
          />
        )}

        {state.step === 'compare' && state.purpose && state.audience && mission.id !== 5 && (
          <EffectComparePanel
            factCase={factCase}
            purpose={state.purpose}
            audience={state.audience}
            built={state.built}
            reason={state.reason}
            reasonTemplateId={state.reasonTemplateId}
            onSetReason={actions.setReason}
            onSetReasonTemplate={actions.setReasonTemplate}
            onSubmit={actions.submitResult}
            onBack={() => actions.goStep('check')}
          />
        )}

        {state.step === 'result' && state.purpose && state.audience && mission.id !== 5 && (
          <ResultCard
            factCase={factCase}
            purpose={state.purpose}
            audience={state.audience}
            built={state.built}
            reason={state.reason}
            reasonTemplateId={state.reasonTemplateId}
            onRestart={actions.restart}
            nextMissionTitle={nextMission?.title}
            onNextMission={
              nextMission ? () => actions.selectMission(nextMission) : undefined
            }
          />
        )}
      </StepFocusRegion>
    </>
  );
}
