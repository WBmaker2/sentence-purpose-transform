import type { Step } from '../../data/types';

// 사양 12.1 화면 흐름 단계 인디케이터
const STEPS: { id: Step; label: string; n: number }[] = [
  { id: 'factVault', label: '사실 금고', n: 1 },
  { id: 'situation', label: '목적·독자', n: 2 },
  { id: 'build', label: '문장 변환', n: 3 },
  { id: 'check', label: '사실 점검', n: 4 },
  { id: 'compare', label: '효과 비교', n: 5 },
  { id: 'result', label: '결과', n: 6 },
];

export function StepIndicator({ current }: { current: Step }) {
  const currentIndex = STEPS.findIndex((s) => s.id === current);
  return (
    <nav className="steps" aria-label="학습 단계">
      {STEPS.map((s, i) => {
        const status =
          i < currentIndex ? 'done' : i === currentIndex ? 'active' : '';
        return (
          <span key={s.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <span className={`step step--${status}`}>
              <span className="step__dot">{s.n}</span>
              {s.label}
            </span>
            {i < STEPS.length - 1 && <span className="step__sep" aria-hidden="true">›</span>}
          </span>
        );
      })}
    </nav>
  );
}
