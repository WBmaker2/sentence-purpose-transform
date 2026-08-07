import { useState } from 'react';
import { CHANGELOG } from './missions';

// 사양 20절 업데이트 내역 모달
export function ChangelogModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="changelog-title"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h2 id="changelog-title" className="modal__title">
            📋 업데이트 내역
          </h2>
          <button
            className="modal__close"
            onClick={onClose}
            aria-label="업데이트 내역 닫기"
          >
            ✕
          </button>
        </div>
        <ul>
          {CHANGELOG.map((item) => (
            <li key={item.date + item.text} className="changelog-item">
              <span className="changelog-item__date">{item.date}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function useChangelog() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);
  return { open, toggle, close };
}
