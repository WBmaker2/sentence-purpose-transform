import type {
  FactCase,
  Purpose,
  Audience,
  SentencePiece,
  PieceCategory,
} from '../../data/types';
import { getPieceBundle } from '../../data/sentencePieces';
import type { BuiltPiece } from './useSentenceTransformState';

// 사양 12.1 문장 변환 화면, 12.3 조작 방식
// 드래그 대신 클릭 추가·순서 올리기·내리기·삭제·되돌리기 버튼 (사양 12.3)
type Props = {
  factCase: FactCase;
  purpose: Purpose;
  audience: Audience;
  built: BuiltPiece[];
  onAdd: (piece: SentencePiece) => void;
  onRemove: (uid: string) => void;
  onMove: (uid: string, dir: 'up' | 'down') => void;
  onUndo: () => void;
  onClear: () => void;
  onCheck: () => void;
  canUndo: boolean;
};

const CATEGORY_LABEL: Record<PieceCategory, string> = {
  greeting: '인사말',
  title: '제목',
  coreFact: '핵심 사실',
  reason: '이유·근거',
  action: '행동·요청',
  polite: '공손 표현',
  emphasis: '강조',
};

// 조립된 문장을 이어 붙여 한 문장으로
function buildSentence(built: BuiltPiece[]): string {
  return built.map((p) => p.text).join(' ');
}

export function SentenceBuilder({
  factCase,
  purpose,
  audience,
  built,
  onAdd,
  onRemove,
  onMove,
  onUndo,
  onClear,
  onCheck,
  canUndo,
}: Props) {
  const pieces = getPieceBundle(factCase.id, purpose, audience);
  const hasBundle = pieces.length > 0;
  const builtSentence = buildSentence(built);
  const usedIds = new Set(built.map((p) => p.id));

  // 카테고리별로 그룹화
  const grouped = pieces.reduce<Record<PieceCategory, SentencePiece[]>>(
    (acc, p) => {
      (acc[p.category] ||= []).push(p);
      return acc;
    },
    {} as Record<PieceCategory, SentencePiece[]>
  );

  return (
    <section className="panel" aria-labelledby="builder-title">
      <p className="panel__eyebrow">3단계 · 문장 변환</p>
      <h2 id="builder-title" className="panel__title">
        ✨ 표현 조각으로 문장 만들기
      </h2>
      <p className="panel__lead">
        조각을 눌러 문장을 만들어요. 순서를 올리고 내리고, 지우고, 되돌릴 수 있어요.
        원문과 나란히 비교하며 사실이 그대로인지 확인해요.
      </p>

      <div className="builder">
        {/* 원문 vs 조립문 나란히 비교 (사양 12.3) */}
        <div className="builder__compare">
          <div className="compare-col">
            <div className="compare-col__label">📰 원문 사실</div>
            <p className="compare-col__text">{factCase.baseSentence}</p>
          </div>
          <div className="compare-col compare-col--built">
            <div className="compare-col__label">✨ 내가 만든 문장</div>
            <p className="compare-col__text" aria-live="polite">
              {builtSentence || <span className="built-empty">아직 조각을 추가하지 않았어요. 아래 조각을 눌러 보세요.</span>}
            </p>
          </div>
        </div>

        {/* 조립된 조각 목록 (순서 변경·삭제) */}
        <div className="stack stack--normal">
          <div className="row row--between" style={{ alignItems: 'center' }}>
            <h3 className="panel__title" style={{ fontSize: 'var(--fs-h3)' }}>
              🧩 만들어진 문장 순서
            </h3>
            <div className="row" style={{ gap: 'var(--sp-2)' }}>
              <button
                className="btn btn--small"
                onClick={onUndo}
                disabled={!canUndo}
                aria-label="되돌리기"
              >
                ↩ 되돌리기
              </button>
              <button
                className="btn btn--small btn--ghost"
                onClick={onClear}
                disabled={built.length === 0}
                aria-label="전체 지우기"
              >
                🗑 전체 지우기
              </button>
            </div>
          </div>
          {built.length === 0 ? (
            <div className="built-list" aria-label="빈 문장 영역">
              <span className="built-empty">여기에 조각이 쌓여요.</span>
            </div>
          ) : (
            <ol className="built-list" aria-label={`현재 ${built.length}개 조각`}>
              {built.map((p, i) => (
                <li key={p.uid} className="built-item">
                  <span aria-hidden="true">{i + 1}.</span>
                  <span>{p.text}</span>
                  <span className="built-item__controls">
                    <button
                      className="icon-btn"
                      onClick={() => onMove(p.uid, 'up')}
                      disabled={i === 0}
                      aria-label={`${i + 1}번 조각을 앞으로`}
                    >
                      ▲
                    </button>
                    <button
                      className="icon-btn"
                      onClick={() => onMove(p.uid, 'down')}
                      disabled={i === built.length - 1}
                      aria-label={`${i + 1}번 조각을 뒤로`}
                    >
                      ▼
                    </button>
                    <button
                      className="icon-btn icon-btn--danger"
                      onClick={() => onRemove(p.uid)}
                      aria-label={`${i + 1}번 조각 삭제`}
                    >
                      ✕
                    </button>
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>

        <hr className="divider" />

        {/* 표현 조각 트레이 */}
        <div className="stack stack--normal">
          <h3 className="panel__title" style={{ fontSize: 'var(--fs-h3)' }}>
            ➕ 추가할 수 있는 표현 조각
          </h3>
          <p className="muted" style={{ fontSize: 'var(--fs-small)' }}>
            📌 핵심 사실 조각은 그대로 써요. ⚠️ 표시가 있는 조각은 새 정보를 추가하거나 과장하는 조각이에요.
          </p>
          <div className="piece-tray">
            {!hasBundle && (
              <div className="feedback feedback--warn" role="status">
                <span aria-hidden="true">🧩</span>
                <span>이 목적과 독자 조합의 표현 조각은 아직 준비되지 않았어요. 상황 선택으로 돌아가 다른 조합을 골라 주세요.</span>
              </div>
            )}
            {(Object.keys(grouped) as PieceCategory[]).map((cat) => (
              <div key={cat} className="piece-tray__group">
                <div className="piece-tray__label">{CATEGORY_LABEL[cat]}</div>
                <div className="piece-chips">
                  {grouped[cat].map((piece) => {
                    const used = usedIds.has(piece.id);
                    return (
                      <button
                        key={piece.id}
                        className={`piece-chip ${piece.isNewFact || piece.isExaggeration ? 'piece-chip--newfact' : ''} ${used ? 'piece-chip--used' : ''}`}
                        onClick={() => onAdd(piece)}
                        disabled={used}
                        aria-label={`${CATEGORY_LABEL[cat]} 조각: ${piece.text}${piece.isNewFact ? '. 주의: 새 사실을 추가하는 조각이에요.' : ''}${piece.isExaggeration ? '. 주의: 과장하는 조각이에요.' : ''}`}
                      >
                        {piece.isNewFact && '⚠️ '}
                        {piece.isExaggeration && '⚠️ '}
                        {piece.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="divider" />

        <div className="row row--between" style={{ alignItems: 'center' }}>
          <span className="muted" aria-live="polite">
            {built.length > 0
              ? `지금까지 ${built.length}개 조각. 사실이 잘 보존되었는지 점검해 보아요.`
              : '최소 한 개의 핵심 사실 조각을 추가해 보세요.'}
          </span>
          <button
            className={`btn btn--primary ${built.length === 0 ? '' : 'gi-pulse'}`}
            onClick={onCheck}
            disabled={built.length === 0}
            aria-disabled={built.length === 0}
          >
            🔍 사실 보존 점검하기 →
          </button>
        </div>
      </div>
    </section>
  );
}
