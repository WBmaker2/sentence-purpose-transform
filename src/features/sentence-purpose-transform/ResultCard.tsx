import { useState } from 'react';
import type { FactCase, Purpose, Audience } from '../../data/types';
import type { BuiltPiece, ReasonAnswer } from './useSentenceTransformState';
import { collectLinkedFactIds } from '../../lib/factPreservation';
import { PURPOSE_CARDS, PURPOSE_LABEL } from '../../data/purposeCards';
import { AUDIENCE_CARDS, AUDIENCE_LABEL } from '../../data/audienceCards';
import { kindToKorean } from '../../lib/accessibilityLabels';

// 사양 19절 결과 카드 — 개인정보·실제 정보는 저장하지 않고 텍스트 복사만 제공 (사양 6절)
type Props = {
  factCase: FactCase;
  purpose: Purpose;
  audience: Audience;
  built: BuiltPiece[];
  reason: ReasonAnswer;
  reasonTemplateId: string | null;
  onRestart: () => void;
  // 다음 미션 이어가기 (사양: 미션 종료 후 자연스러운 흐름)
  nextMissionTitle?: string;
  onNextMission?: () => void;
};

export function ResultCard({
  factCase,
  purpose,
  audience,
  built,
  reason,
  reasonTemplateId,
  onRestart,
  nextMissionTitle,
  onNextMission,
}: Props) {
  const [copied, setCopied] = useState(false);
  const sentence = built.map((p) => p.text).join(' ');
  const usedFactIds = collectLinkedFactIds(built);

  const preservedRequired = factCase.factUnits.filter(
    (u) => u.required && usedFactIds.includes(u.id)
  );
  const changedPieces = built.filter(
    (p) => (p.linkedFactIds?.length ?? 0) === 0 || p.category !== 'coreFact'
  );

  // 복사용 텍스트 조립 (사양 6절: 결과 카드 텍스트 복사만 선택 제공)
  const copyText = [
    `【문장 목적 변환소 결과】`,
    ``,
    `📰 원래 사실: ${factCase.baseSentence}`,
    `🎯 목적: ${PURPOSE_LABEL[purpose]} (${PURPOSE_CARDS[purpose].short})`,
    `👥 독자: ${AUDIENCE_LABEL[audience]}`,
    ``,
    `✨ 변환된 문장:`,
    `${sentence}`,
    ``,
    `🔒 보존한 필수 사실:`,
    ...preservedRequired.map((u) => `  · ${kindToKorean(u.kind)}: ${u.text}`),
    ``,
    `✏️ 바꾼 표현 요소:`,
    ...changedPieces.map((p) => `  · ${p.text}`),
  ].join('\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 미지원 환경 — 화면 인쇄로 안내
      setCopied(false);
    }
  };

  return (
    <section aria-labelledby="result-title">
      <p className="panel__eyebrow" style={{ textAlign: 'center' }}>
        변환 완료!
      </p>
      <h2 id="result-title" className="sr-only">
        결과 카드
      </h2>

      <div className="result-card">
        <div className="result-card__header">
          <div>
            <div className="result-card__title">🎉 변환 결과</div>
            <div className="muted" style={{ fontSize: 'var(--fs-small)' }}>
              {factCase.title}
            </div>
          </div>
          <div className="row" style={{ gap: 'var(--sp-1)' }}>
            <span className={`tag tag--${purpose}`}>
              {PURPOSE_CARDS[purpose].icon} {PURPOSE_LABEL[purpose]}
            </span>
            <span className="tag">
              {AUDIENCE_CARDS[audience].icon} {AUDIENCE_LABEL[audience]}
            </span>
          </div>
        </div>

        {/* 원래 사실 */}
        <div className="result-section">
          <div className="result-section__label">📰 원래 사실</div>
          <p style={{ fontWeight: 600 }}>{factCase.baseSentence}</p>
        </div>

        {/* 변환된 문장 */}
        <div className="result-final" aria-live="polite">
          {sentence}
        </div>

        {/* 보존한 필수 사실 */}
        <div className="result-section">
          <div className="result-section__label">🔒 보존한 필수 사실</div>
          <ul className="stack stack--tight">
            {preservedRequired.map((u) => (
              <li key={u.id} className="row" style={{ gap: 'var(--sp-1)' }}>
                <span className="tag tag--required">
                  ✅ {kindToKorean(u.kind)}: {u.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 바꾼 표현 요소 */}
        <div className="result-section">
          <div className="result-section__label">✏️ 바꾼 표현 요소</div>
          <div className="row" style={{ gap: 'var(--sp-1)' }}>
            {changedPieces.map((p, i) => (
              <span key={p.uid ?? i} className="tag">
                {p.text}
              </span>
            ))}
          </div>
        </div>

        {/* 근거 문장 */}
        <div className="result-section">
          <div className="result-section__label">💭 내가 쓴 근거</div>
          <p style={{ fontStyle: 'italic', color: 'var(--ink-soft)' }}>
            {reasonTemplateId
              ? buildReasonPreview(reasonTemplateId, reason)
              : '근거를 작성하지 않았어요.'}
          </p>
        </div>
      </div>

      {/* 다음 미션 이어가기 (있을 때 강조) */}
      {nextMissionTitle && onNextMission && (
        <div className="next-mission-card" style={{ marginTop: 'var(--sp-5)' }}>
          <div className="next-mission-card__label">다음 미션</div>
          <div className="next-mission-card__title">{nextMissionTitle}</div>
          <button
            className="btn btn--primary btn--block gi-pulse"
            onClick={onNextMission}
            style={{ marginTop: 'var(--sp-3)' }}
            aria-label={`다음 미션으로 이동: ${nextMissionTitle}`}
          >
            다음 미션으로 이동 →
          </button>
        </div>
      )}

      <div className="row row--between" style={{ marginTop: 'var(--sp-4)' }}>
        <button className="btn" onClick={onRestart} aria-label="새 미션 시작하기">
          ← 새 미션 하기
        </button>
        <button className="btn btn--primary" onClick={handleCopy}>
          {copied ? '✅ 복사됨!' : '📋 결과 복사하기'}
        </button>
      </div>
      <p className="muted" style={{ fontSize: 'var(--fs-small)', textAlign: 'center', marginTop: 'var(--sp-2)' }}>
        결과는 저장되지 않고 새로고침하면 사라져요. 필요하면 복사해 두세요.
      </p>
    </section>
  );
}

// 근거 틀 미리보기 (EffectComparePanel과 동일 로직)
function buildReasonPreview(templateId: string, reason: ReasonAnswer): string {
  const templates: Record<string, (r: ReasonAnswer) => string> = {
    t1: (r) => `이 문장은 ${r.audience || '___'}에게 ${r.purposeText || '___'} 목적으로 만들었습니다.`,
    t2: (r) => `${r.keptFact || '___'} 사실은 그대로 두고, ${r.changedExpression || '___'} 표현을 바꾸었습니다.`,
    t3: (r) => `이 표현은 ${r.audience || '___'} 독자가 ${r.helpText || '___'} 쉽도록 만들었어요.`,
    t4: (r) => `나는 ${r.evidence || '___'}을(를) 근거로 이 문장이 목적에 맞다고 생각합니다.`,
  };
  return templates[templateId]?.(reason) ?? '';
}
