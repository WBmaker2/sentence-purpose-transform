import type { FactCase } from '../../data/types';
import { kindToKorean, factUnitAriaLabel } from '../../lib/accessibilityLabels';

// 사양 9절 미션 0, 사양 12.1 사실 금고 화면
// 핵심 질문: "표현을 바꿔도 반드시 그대로 남아야 하는 정보는 무엇인가요?"
type Props = {
  factCase: FactCase;
  lockedFactIds: string[];
  onToggleLock: (factId: string) => void;
  onConfirm: () => void;
  isTutorial: boolean;
};

export function FactVault({
  factCase,
  lockedFactIds,
  onToggleLock,
  onConfirm,
  isTutorial,
}: Props) {
  const requiredUnits = factCase.factUnits.filter((u) => u.required);
  const optionalUnits = factCase.factUnits.filter((u) => !u.required);
  const allRequiredLocked = requiredUnits.every((u) =>
    lockedFactIds.includes(u.id)
  );

  return (
    <section className="panel fact-vault" aria-labelledby="factvault-title">
      <p className="panel__eyebrow">1단계 · 사실 보존 금고</p>
      <h2 id="factvault-title" className="panel__title">
        🔒 반드시 지켜야 할 사실 확인하기
      </h2>
      <p className="panel__lead">
        {isTutorial
          ? '문장에서 표현을 바꿔도 그대로 남아야 하는 사실을 먼저 찾아보아요. 필수 사실을 모두 잠그면 다음으로 넘어가요.'
          : '이 사실에서 바꾸면 안 되는 정보를 확인하고 잠가 두어요.'}
      </p>

      {/* 원문 사실 */}
      <div className="fact-base" aria-label={`원문 사실: ${factCase.baseSentence}`}>
        <strong style={{ fontSize: 'var(--fs-tiny)', color: 'var(--coral)', letterSpacing: '0.06em' }}>
          📰 원문
        </strong>
        <p style={{ marginTop: 'var(--sp-2)' }}>{factCase.baseSentence}</p>
      </div>

      {/* 핵심 질문 */}
      <div
        className="feedback feedback--info"
        role="note"
        aria-label="핵심 질문"
      >
        <span aria-hidden="true">❓</span>
        <span>표현을 바꿔도 반드시 그대로 남아야 하는 정보는 무엇인가요?</span>
      </div>

      {/* 필수 사실 (잠금 대상) */}
      <div className="stack stack--normal">
        <h3 className="panel__title" style={{ fontSize: 'var(--fs-h3)' }}>
          🟡 반드시 보존할 사실
        </h3>
        <div className="fact-units">
          {requiredUnits.map((unit) => {
            const locked = lockedFactIds.includes(unit.id);
            return (
              <button
                key={unit.id}
                className={`fact-unit fact-unit--required ${locked ? 'fact-unit--checked' : ''}`}
                onClick={() => onToggleLock(unit.id)}
                aria-pressed={locked}
                aria-label={factUnitAriaLabel(unit) + (locked ? ' 잠금 완료.' : '')}
              >
                <span className="fact-unit__icon" aria-hidden="true">
                  {locked ? '🔒' : '🔓'}
                </span>
                <span className="fact-unit__text">{unit.text}</span>
                <span className="fact-unit__kind">{kindToKorean(unit.kind)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 바꿀 수 있는 표현 */}
      {optionalUnits.length > 0 && (
        <div className="stack stack--normal">
          <h3 className="panel__title" style={{ fontSize: 'var(--fs-h3)' }}>
            ✏️ 바꿀 수 있는 표현
          </h3>
          <div className="fact-units">
            {optionalUnits.map((unit) => (
              <div
                key={unit.id}
                className="fact-unit fact-unit--optional"
                aria-label={factUnitAriaLabel(unit)}
                style={{ cursor: 'default' }}
              >
                <span className="fact-unit__icon" aria-hidden="true">✏️</span>
                <span className="fact-unit__text">{unit.text}</span>
                <span className="fact-unit__kind">{kindToKorean(unit.kind)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <hr className="divider" />

      <div className="row row--between" style={{ alignItems: 'center' }}>
        <span className="muted" aria-live="polite">
          {allRequiredLocked
            ? '✅ 필수 사실을 모두 잠갔어요!'
            : `필수 사실 ${requiredUnits.length}개 중 ${lockedFactIds.filter((id) =>
                requiredUnits.some((u) => u.id === id)
              ).length}개 잠금`}
        </span>
        <button
          className={`btn btn--primary ${allRequiredLocked ? 'gi-pulse' : ''}`}
          onClick={onConfirm}
          disabled={!allRequiredLocked}
          aria-disabled={!allRequiredLocked}
        >
          🔒 필수 사실 잠금
        </button>
      </div>
      {!allRequiredLocked && (
        <p className="muted" style={{ fontSize: 'var(--fs-small)' }}>
          필수 사실을 모두 눌러 잠가야 다음 단계로 넘어갈 수 있어요.
        </p>
      )}
    </section>
  );
}
