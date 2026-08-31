import type { KeyboardEvent } from 'react';
import type {
  FactCase,
  Purpose,
  Audience,
} from '../../data/types';
import { PURPOSE_CARDS, PURPOSE_ORDER } from '../../data/purposeCards';
import { AUDIENCE_CARDS, AUDIENCE_ORDER } from '../../data/audienceCards';
import { getAvailableAudiences } from '../../data/sentencePieces';
import type { MissionDef } from './useSentenceTransformState';

function moveRadioChoice<T extends string>(
  event: KeyboardEvent<HTMLButtonElement>,
  options: T[],
  selected: T | null,
  onSelect: (value: T) => void
) {
  if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
    return;
  }
  event.preventDefault();
  if (options.length === 0) return;
  const group = event.currentTarget.closest('[role="radiogroup"]');
  const buttons = group
    ? Array.from(group.querySelectorAll<HTMLButtonElement>('button[data-radio-value]:not(:disabled)'))
    : [event.currentTarget];
  const enabledOptions = buttons
    .map((button) => button.dataset.radioValue as T)
    .filter((value) => options.includes(value));
  if (enabledOptions.length === 0) return;
  const selectedIndex = selected ? enabledOptions.indexOf(selected) : -1;
  const focusedIndex = enabledOptions.indexOf(event.currentTarget.dataset.radioValue as T);
  const currentIndex = selectedIndex >= 0
    ? selectedIndex
    : focusedIndex >= 0
    ? focusedIndex
    : 0;
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
    ? enabledOptions.length - 1
    : (currentIndex + (event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1) + enabledOptions.length) % enabledOptions.length;
  const nextValue = enabledOptions[nextIndex];
  onSelect(nextValue);
  buttons.find((button) => button.dataset.radioValue === nextValue)?.focus();
}

// 사양 12.1 상황 선택 화면 — 목적 카드 + 독자 카드
type Props = {
  factCase: FactCase;
  purpose: Purpose | null;
  audience: Audience | null;
  onSelectPurpose: (p: Purpose) => void;
  onSelectAudience: (a: Audience | null) => void;
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
  const availableAudiences = purpose
    ? getAvailableAudiences(factCase.id, purpose)
    : factCase.supportedAudiences;
  const bothSelected = purpose !== null && audience !== null;
  const purposeOptions = hasFixedPurpose
    ? [mission.fixedPurpose as Purpose]
    : PURPOSE_ORDER.filter((p) => availablePurposes.includes(p));
  const audienceOptions = hasFixedAudience
    ? [mission.fixedAudience as Audience]
    : AUDIENCE_ORDER.filter((a) => availableAudiences.includes(a));

  const handlePurposeSelect = (nextPurpose: Purpose) => {
    onSelectPurpose(nextPurpose);
    if (
      audience !== null &&
      !getAvailableAudiences(factCase.id, nextPurpose).includes(audience)
    ) {
      onSelectAudience(null);
    }
  };

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
          {purposeOptions.map((p, index, options) => {
            const meta = PURPOSE_CARDS[p];
            const selected = purpose === p;
            const disabled = hasFixedPurpose && mission.fixedPurpose !== p;
            return (
              <button
                key={p}
                className={`choice-card choice-card--${p} ${selected ? 'choice-card--selected' : ''}`}
                onClick={() => handlePurposeSelect(p)}
                onKeyDown={(event) => moveRadioChoice(event, options, purpose, handlePurposeSelect)}
                role="radio"
                aria-checked={selected}
                tabIndex={selected || (!purpose && index === 0) ? 0 : -1}
                data-radio-value={p}
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
          {audienceOptions.map((a, index, options) => {
            const meta = AUDIENCE_CARDS[a];
            const selected = audience === a;
            const disabled = hasFixedAudience && mission.fixedAudience !== a;
            return (
              <button
                key={a}
                className={`choice-card ${selected ? 'choice-card--selected' : ''}`}
                onClick={() => onSelectAudience(a)}
                onKeyDown={(event) => moveRadioChoice(event, options, audience, (next) => onSelectAudience(next))}
                role="radio"
                aria-checked={selected}
                tabIndex={selected || (!audience && index === 0) ? 0 : -1}
                data-radio-value={a}
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
          className={`btn btn--primary ${bothSelected ? 'gi-pulse' : ''}`}
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
