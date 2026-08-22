import type { FactCase, Purpose, Audience } from '../../data/types';
import type { BuiltPiece } from './useSentenceTransformState';
import {
  checkPreservation,
  collectLinkedFactIds,
} from '../../lib/factPreservation';
import { checkPurposeFit } from '../../lib/purposeFit';
import { checkAudienceFit } from '../../lib/audienceFit';
import { canProceedAfterCheck } from '../../lib/learningGate';
import { FEEDBACK_MESSAGES } from '../../data/feedbackRules';
import { PURPOSE_CARDS } from '../../data/purposeCards';
import { AUDIENCE_CARDS } from '../../data/audienceCards';
import { kindToKorean } from '../../lib/accessibilityLabels';

// 사양 10, 17절 — 사실 보존·목적 적합성·독자 적합성 종합 점검
type Props = {
  factCase: FactCase;
  purpose: Purpose;
  audience: Audience;
  built: BuiltPiece[];
  onConfirm: () => void;
  onBack: () => void;
};

export function FactPreservationPanel({
  factCase,
  purpose,
  audience,
  built,
  onConfirm,
  onBack,
}: Props) {
  const preservation = checkPreservation(built, factCase);
  const purposeFit = checkPurposeFit(purpose, built);
  const audienceFit = checkAudienceFit(audience, built, purpose);
  const usedFactIds = collectLinkedFactIds(built);

  const sentence = built.map((p) => p.text).join(' ');

  // 우선 피드백 결정 (사양 11.1)
  let feedbackKey: keyof typeof FEEDBACK_MESSAGES = 'allGood';
  if (preservation.missingRequired.length > 0) feedbackKey = 'missingFact';
  else if (preservation.addedFact || preservation.exaggeration) feedbackKey = 'addedFact';
  else if (!purposeFit.fit) {
    feedbackKey = 'purposeElementsMissing';
  } else if (purpose === 'request' && audienceFit.mismatch) feedbackKey = 'requestLikeCommand';
  else if (audienceFit.needsMoreDetail) feedbackKey = 'audienceMissing';
  else if (audienceFit.needsSimplification) feedbackKey = 'audienceTooDetailed';

  const audienceFits =
    !audienceFit.needsMoreDetail && !audienceFit.needsSimplification && !audienceFit.mismatch;
  const canProceed = canProceedAfterCheck(
    preservation.allPreserved,
    purposeFit.fit,
    audienceFits
  );

  return (
    <section className="panel" aria-labelledby="check-title">
      <p className="panel__eyebrow">4단계 · 사실 보존 점검</p>
      <h2 id="check-title" className="panel__title">
        🔍 사실이 잘 보존되었나요?
      </h2>
      <p className="panel__lead">
        만든 문장을 원문 사실과 비교해, 시간·장소·수량·조건이 그대로인지 확인해요.
      </p>

      {/* 만든 문장 */}
      <div className="compare-col compare-col--built" style={{ marginTop: 'var(--sp-4)' }}>
        <div className="compare-col__label">내가 만든 문장</div>
        <p className="compare-col__text">{sentence || '...'}</p>
      </div>

      {/* 사실 보존 체크리스트 */}
      <div className="stack stack--normal" style={{ marginTop: 'var(--sp-4)' }}>
        <h3 className="panel__title" style={{ fontSize: 'var(--fs-h3)' }}>
          📋 필수 사실 보존 확인
        </h3>
        <ul className="check-list">
          {factCase.factUnits
            .filter((u) => u.required)
            .map((unit) => {
              const preserved = usedFactIds.includes(unit.id);
              return (
                <li
                  key={unit.id}
                  className={`check-row ${preserved ? 'check-row--ok' : 'check-row--miss'}`}
                >
                  <span className="check-row__icon" aria-hidden="true">
                    {preserved ? '✅' : '⚠️'}
                  </span>
                  <span className="check-row__text">
                    {kindToKorean(unit.kind)}: {unit.text}
                    {preserved ? ' — 보존됨' : ' — 빠짐'}
                  </span>
                </li>
              );
            })}
        </ul>

        {/* 사실 추가 / 과장 경고 */}
        {(preservation.addedFact || preservation.exaggeration) && (
          <div className="check-row check-row--warn">
            <span className="check-row__icon" aria-hidden="true">⚠️</span>
            <span className="check-row__text">
              {preservation.addedFact && '원래 없던 새 정보를 추가하는 조각이 있어요. '}
              {preservation.exaggeration && '원래 사실보다 크게 말하는(과장) 조각이 있어요.'}
            </span>
          </div>
        )}
      </div>

      <hr className="divider" />

      {/* 목적 적합성 */}
      <div className="stack stack--normal">
        <h3 className="panel__title" style={{ fontSize: 'var(--fs-h3)' }}>
          {PURPOSE_CARDS[purpose].icon} {PURPOSE_CARDS[purpose].name} 목적의 요소
        </h3>
        <div className="row" style={{ gap: 'var(--sp-2)' }}>
          {PURPOSE_CARDS[purpose].requiredElements.map((el) => {
            const satisfied = purposeFit.satisfied.some(
              (s) => s.includes(el) || el.includes(s)
            );
            return (
              <span key={el} className={`tag ${satisfied ? 'tag--required' : ''}`}>
                {satisfied ? '✅' : '⬜'} {el}
              </span>
            );
          })}
        </div>
        {purposeFit.missing.length > 0 && (
          <p className="muted" style={{ fontSize: 'var(--fs-small)' }}>
            아직 채우지 못한 요소: {purposeFit.missing.join(', ')}
          </p>
        )}
      </div>

      <hr className="divider" />

      {/* 독자 적합성 힌트 */}
      <div className="feedback feedback--info">
        <span aria-hidden="true">{AUDIENCE_CARDS[audience].icon}</span>
        <span>
          <strong>{AUDIENCE_CARDS[audience].name}</strong> — {audienceFit.hint}
        </span>
      </div>

      {/* 종합 피드백 (사양 11.1) */}
      <div
        className={`feedback ${
          feedbackKey === 'allGood'
            ? 'feedback--ok'
            : preservation.allPreserved
            ? 'feedback--warn'
            : 'feedback--info'
        }`}
        style={{ marginTop: 'var(--sp-3)' }}
        role="status"
      >
        <span aria-hidden="true">
          {feedbackKey === 'allGood' ? '🎉' : preservation.allPreserved ? '✏️' : '💡'}
        </span>
        <span>{FEEDBACK_MESSAGES[feedbackKey]}</span>
      </div>

      <hr className="divider" />

      <div className="row row--between" style={{ alignItems: 'center' }}>
        <button className="btn" onClick={onBack} aria-label="문장 다시 고치기">
          ← 다시 고치기
        </button>
        <button
          className={`btn btn--primary ${canProceed ? 'gi-pulse' : ''}`}
          onClick={onConfirm}
          disabled={!canProceed}
          aria-disabled={!canProceed}
        >
          사실 보존 확인 →
        </button>
      </div>
      {!canProceed && (
        <p className="muted" style={{ fontSize: 'var(--fs-small)' }}>
          {!preservation.allPreserved
            ? '필수 사실을 모두 보존하고, 새 사실 추가나 과장을 빼야 다음으로 넘어갈 수 있어요.'
            : !purposeFit.fit
            ? `${PURPOSE_CARDS[purpose].name}에 필요한 요소(${purposeFit.missing.join(', ')})를 채워야 다음으로 넘어갈 수 있어요.`
            : !audienceFits
            ? '사실·목적·독자에 맞는 표현을 모두 확인한 뒤 다음으로 넘어갈 수 있어요.'
            : ''}
        </p>
      )}
    </section>
  );
}
