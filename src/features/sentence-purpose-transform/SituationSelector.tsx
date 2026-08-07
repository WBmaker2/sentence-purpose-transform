import type {
  FactCase,
  Purpose,
  Audience,
} from '../../data/types';
import { PURPOSE_CARDS, PURPOSE_ORDER } from '../../data/purposeCards';
import { AUDIENCE_CARDS, AUDIENCE_ORDER } from '../../data/audienceCards';
import type { MissionDef } from './useSentenceTransformState';

// 사양 12.1 상황 선택 화면 — 목적 카드 + 독자 카드
type Props = {
  factCase: FactCase;
  purpose: Purpose | null;
  audience: Audience | null;
  onSelectPurpose: (p: Purpose) => void;
  onSelectAudience: (a: Audience) => void;
  onConfirm: () => void;
  mission: MissionDef;
};

export function SituationSelector({
  factCase,
  purpose,
  audience,
  onSelectPurpose,
  onSelectAudience,
  onConfirm,
  mission,
}: Props) {
  const hasFixedPurpose = mission.fixedPurpose !== undefined;
  const hasFixedAudience = mission.fixedAudience !== undefined;
  const availablePurposes = factCase.supportedPurposes;
  const availableAudiences = factCase.supportedAudiences;
  const bothSelected = purpose !== null && audience !== null;

  return (
    <section className="panel" aria-labelledby="situation-title">
      <p className="panel__eyebrow">2단계 · 상황 설정</p>
      <h2 id="situation-title" className="panel__title">
        🎯 누구에게, 무엇을 하려고 하나요?
      </h2>
      <p className="panel__lead">
        목적과 독자를 정하면 그에 맞는 표현 조각이 나타나요. 이 사실:{' '}
        <strong>{factCase.title}</strong>
      </p>

      {/* 목적 카드 */}
      <div className="stack stack--normal" style={{ marginTop: 'var(--sp-4)' }}>
        <h3 className="panel__title" style={{ fontSize: 'var(--fs-h3)' }}>
          무엇을 하려고 하나요? <span className="muted" style={{ fontWeight: 400 }}>(목적)</span>
        </h3>
        {hasFixedPurpose && (
          <p className="muted" style={{ fontSize: 'var(--fs-small)' }}>
            📌 이 미션에서는 <strong>{PURPOSE_CARDS[purpose!].name}</strong> 목적으로 진행해요.
          </p>
        )}
        <div className="choice-grid choice-grid--purpose" role="radiogroup" aria-label="목적 선택">
          {PURPOSE_ORDER.filter((p) => availablePurposes.includes(p)).map((p) => {
            const meta = PURPOSE_CARDS[p];
            const selected = purpose === p;
            const disabled = hasFixedPurpose && mission.fixedPurpose !== p;
            return (
              <button
                key={p}
                className={`choice-card choice-card--${p} ${selected ? 'choice-card--selected' : ''}`}
                onClick={() => onSelectPurpose(p)}
                role="radio"
                aria-checked={selected}
                aria-label={`목적 ${meta.name}. ${meta.description}`}
                disabled={disabled}
                style={disabled ? { opacity: 0.4 } : undefined}
              >
                <span className="choice-card__icon" aria-hidden="true">{meta.icon}</span>
                <span className="choice-card__name">{meta.name}</span>
                <span className="choice-card__desc">{meta.short}</span>
              </button>
            );
          })}
        </div>
        {purpose && (
          <div className="feedback feedback--info" style={{ marginTop: 'var(--sp-2)' }}>
            <span aria-hidden="true">{PURPOSE_CARDS[purpose].icon}</span>
            <span>
              <strong>{PURPOSE_CARDS[purpose].name}</strong>의 필수 요소:{' '}
              {PURPOSE_CARDS[purpose].requiredElements.join(' · ')}
            </span>
          </div>
        )}
      </div>

      <hr className="divider" />

      {/* 독자 카드 */}
      <div className="stack stack--normal">
        <h3 className="panel__title" style={{ fontSize: 'var(--fs-h3)' }}>
          누구에게 말하나요? <span className="muted" style={{ fontWeight: 400 }}>(독자)</span>
        </h3>
        {hasFixedAudience && (
          <p className="muted" style={{ fontSize: 'var(--fs-small)' }}>
            📌 이 미션에서는 <strong>{AUDIENCE_CARDS[audience!].name}</strong>에게 말해요.
          </p>
        )}
        <div className="choice-grid choice-grid--audience" role="radiogroup" aria-label="독자 선택">
          {AUDIENCE_ORDER.filter((a) => availableAudiences.includes(a)).map((a) => {
            const meta = AUDIENCE_CARDS[a];
            const selected = audience === a;
            const disabled = hasFixedAudience && mission.fixedAudience !== a;
            return (
              <button
                key={a}
                className={`choice-card ${selected ? 'choice-card--selected' : ''}`}
                onClick={() => onSelectAudience(a)}
                role="radio"
                aria-checked={selected}
                aria-label={`독자 ${meta.name}. ${meta.description}`}
                disabled={disabled}
                style={disabled ? { opacity: 0.4 } : undefined}
              >
                <span className="choice-card__icon" aria-hidden="true">{meta.icon}</span>
                <span className="choice-card__name">{meta.name}</span>
                <span className="choice-card__desc">{meta.short}</span>
                <span className="choice-card__meta">{meta.detailHint}</span>
              </button>
            );
          })}
        </div>
        {audience && (
          <div className="feedback feedback--info" style={{ marginTop: 'var(--sp-2)' }}>
            <span aria-hidden="true">{AUDIENCE_CARDS[audience].icon}</span>
            <span>
              <strong>{AUDIENCE_CARDS[audience].name}</strong> — {AUDIENCE_CARDS[audience].backgroundHint}.{' '}
              {AUDIENCE_CARDS[audience].toneHint}.
            </span>
          </div>
        )}
      </div>

      <hr className="divider" />

      <div className="row row--between" style={{ alignItems: 'center' }}>
        <span className="muted" aria-live="polite">
          {bothSelected
            ? '✅ 목적과 독자가 정해졌어요!'
            : '목적과 독자를 모두 선택해 주세요.'}
        </span>
        <button
          className={`btn btn--primary ${bothSelected ? '' : 'gi-pulse'}`}
          onClick={onConfirm}
          disabled={!bothSelected}
          aria-disabled={!bothSelected}
        >
          목적·독자 정하기 →
        </button>
      </div>
    </section>
  );
}
