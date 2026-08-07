import type { FactCase, Purpose, Audience } from '../../data/types';
import type { BuiltPiece, ReasonAnswer } from './useSentenceTransformState';
import { PURPOSE_CARDS, PURPOSE_LABEL } from '../../data/purposeCards';
import { AUDIENCE_CARDS, AUDIENCE_LABEL } from '../../data/audienceCards';

// 사양 11.2 근거 문장 틀 (4개)
type ReasonTemplate = {
  id: string;
  template: string; // 빈 칸은 {{x}}
  fields: Array<{ key: keyof ReasonAnswer; label: string; example: string }>;
};

const REASON_TEMPLATES: ReasonTemplate[] = [
  {
    id: 't1',
    template: '이 문장은 {{audience}}에게 {{purposeText}}하려고 만들었습니다.',
    fields: [
      { key: 'audience', label: '독자', example: '친한 친구' },
      { key: 'purposeText', label: '목적', example: '빠르게 알리' },
    ],
  },
  {
    id: 't2',
    template: '{{keptFact}} 사실은 그대로 두고, {{changedExpression}} 표현을 바꾸었습니다.',
    fields: [
      { key: 'keptFact', label: '그대로 둔 사실', example: '수요일 오후 5시' },
      { key: 'changedExpression', label: '바꾼 표현', example: '인사말과 강조를' },
    ],
  },
  {
    id: 't3',
    template: '이 표현은 {{audience}} 독자가 {{helpText}}하기 쉽도록 돕습니다.',
    fields: [
      { key: 'audience', label: '독자', example: '처음 듣는' },
      { key: 'helpText', label: '돕는 일', example: '어디로 가야 할지 알' },
    ],
  },
  {
    id: 't4',
    template: '나는 {{evidence}}을(를) 근거로 이 문장이 목적에 맞다고 생각합니다.',
    fields: [
      { key: 'evidence', label: '근거', example: '핵심 사실을 지키면서 공손하게 부탁한 점' },
    ],
  },
];

type Props = {
  factCase: FactCase;
  purpose: Purpose;
  audience: Audience;
  built: BuiltPiece[];
  reason: ReasonAnswer;
  reasonTemplateId: string | null;
  onSetReason: (r: Partial<ReasonAnswer>) => void;
  onSetReasonTemplate: (id: string) => void;
  onSubmit: () => void;
  onBack: () => void;
};

export function EffectComparePanel({
  factCase,
  purpose,
  audience,
  built,
  reason,
  reasonTemplateId,
  onSetReason,
  onSetReasonTemplate,
  onSubmit,
  onBack,
}: Props) {
  const sentence = built.map((p) => p.text).join(' ');

  // 현재 목적·독자·사실에 맞는 동적 예시로 템플릿 구성
  const audienceShort = AUDIENCE_LABEL[audience];
  // 보존된 첫 번째 필수 사실 텍스트 (있으면)
  const requiredUnits = factCase.factUnits.filter((u) => u.required);
  const firstFactText = requiredUnits[0]?.text ?? '시간과 장소';

  const templates: typeof REASON_TEMPLATES = [
    {
      id: 't1',
      template: '이 문장은 {{audience}}에게 {{purposeText}} 목적으로 만들었습니다.',
      fields: [
        { key: 'audience', label: '독자', example: audienceShort },
        { key: 'purposeText', label: '목적', example: PURPOSE_LABEL[purpose] },
      ],
    },
    {
      id: 't2',
      template: '{{keptFact}} 사실은 그대로 두고, {{changedExpression}} 표현을 바꾸었습니다.',
      fields: [
        { key: 'keptFact', label: '그대로 둔 사실', example: firstFactText },
        { key: 'changedExpression', label: '바꾼 표현', example: '말투와 강조' },
      ],
    },
    {
      id: 't3',
      template: '이 표현은 {{audience}} 독자가 {{helpText}} 쉽도록 만들었어요.',
      fields: [
        { key: 'audience', label: '독자', example: audienceShort.split(' ')[0] },
        { key: 'helpText', label: '돕는 일', example: '무엇을 해야 할지 아는' },
      ],
    },
    {
      id: 't4',
      template: '나는 {{evidence}}을(를) 근거로 이 문장이 목적에 맞다고 생각합니다.',
      fields: [
        { key: 'evidence', label: '근거', example: `핵심 사실을 지키면서 ${PURPOSE_LABEL[purpose]}에 맞게 쓴 점` },
      ],
    },
  ];

  const selectedTemplate = templates.find((t) => t.id === reasonTemplateId);
  const reasonComplete =
    !!selectedTemplate &&
    selectedTemplate.fields.every((f) => reason[f.key]?.trim());

  // 미리보기: 템플릿 치환
  const preview = selectedTemplate
    ? selectedTemplate.fields.reduce(
        (acc, f) => acc.replace(`{{${f.key}}}`, reason[f.key]?.trim() || `___`),
        selectedTemplate.template
      )
    : '아래에서 근거 틀을 하나 골라 빈칸을 채워 보세요.';

  return (
    <section className="panel" aria-labelledby="compare-title">
      <p className="panel__eyebrow">5단계 · 효과 비교와 근거</p>
      <h2 id="compare-title" className="panel__title">
        🎨 효과를 비교하고 이유 말하기
      </h2>
      <p className="panel__lead">
        원문과 내가 만든 문장을 나란히 보고, 왜 이 표현을 골랐는지 이유를 적어요.
      </p>

      {/* 비교 */}
      <div className="builder__compare" style={{ marginTop: 'var(--sp-4)' }}>
        <div className="compare-col">
          <div className="compare-col__label">📰 원문</div>
          <p className="compare-col__text">{factCase.baseSentence}</p>
          <div className="row" style={{ marginTop: 'var(--sp-2)' }}>
            <span className="tag">원본</span>
          </div>
        </div>
        <div className="compare-col compare-col--built">
          <div className="compare-col__label">✨ 변환문</div>
          <p className="compare-col__text">{sentence}</p>
          <div className="row" style={{ marginTop: 'var(--sp-2)', gap: 'var(--sp-1)' }}>
            <span className={`tag tag--${purpose}`}>
              {PURPOSE_CARDS[purpose].icon} {PURPOSE_LABEL[purpose]}
            </span>
            <span className="tag">
              {AUDIENCE_CARDS[audience].icon} {AUDIENCE_LABEL[audience]}
            </span>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* 근거 문장 틀 (사양 11.2) */}
      <div className="stack stack--normal">
        <h3 className="panel__title" style={{ fontSize: 'var(--fs-h3)' }}>
          ✍️ 변환 이유 적기
        </h3>
        <p className="muted" style={{ fontSize: 'var(--fs-small)' }}>
          근거 틀 하나를 골라 빈칸을 채워요. 자유 입력 대신 틀을 활용해도 좋아요.
        </p>
        <div className="reason-skeleton">
          {templates.map((t) => {
            const isSelected = reasonTemplateId === t.id;
            return (
              <div key={t.id}>
                <button
                  type="button"
                  className={`reason-row ${isSelected ? 'reason-row--selected' : ''}`}
                  onClick={() => onSetReasonTemplate(t.id)}
                  aria-pressed={isSelected}
                >
                  <span aria-hidden="true">{isSelected ? '◉' : '◯'}</span>
                  <span style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-1)', alignItems: 'center' }}>
                    {t.fields.map((f, i) => (
                      <span key={f.key} style={{ display: 'inline' }}>
                        {i === 0 ? t.template.split(`{{${f.key}}}`)[0] : ''}
                        <input
                          className="reason-blank"
                          type="text"
                          value={reason[f.key] ?? ''}
                          onChange={(e) => onSetReason({ [f.key]: e.target.value })}
                          placeholder={f.example}
                          aria-label={`${f.label} 빈칸`}
                          style={{ width: `calc(max(${f.example.length}ch, 4ch) + 24px)` }}
                          onFocus={() => onSetReasonTemplate(t.id)}
                        />
                        {t.template.split(`{{${f.key}}}`)[1]?.split('{{')[0] || ''}
                      </span>
                    ))}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* 완성된 근거 문장 미리보기 */}
        <div className="feedback feedback--info" role="status" aria-live="polite">
          <span aria-hidden="true">📝</span>
          <span>{preview}</span>
        </div>
      </div>

      <hr className="divider" />

      <div className="row row--between" style={{ alignItems: 'center' }}>
        <button className="btn" onClick={onBack} aria-label="다시 점검하기">
          ← 다시 점검하기
        </button>
        <button
          className={`btn btn--primary ${reasonComplete ? 'gi-pulse' : ''}`}
          onClick={onSubmit}
          disabled={!reasonComplete}
          aria-disabled={!reasonComplete}
        >
          변환 결과 제출 →
        </button>
      </div>
      {!reasonComplete && (
        <p className="muted" style={{ fontSize: 'var(--fs-small)' }}>
          근거 틀을 하나 골라 모든 빈칸을 채워야 결과를 볼 수 있어요.
        </p>
      )}
    </section>
  );
}
