import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  focusKey: string;
  children: ReactNode;
};

/**
 * Gives each newly rendered learning step a predictable starting point.
 * The key intentionally excludes form values so typing within a step never
 * moves the learner's focus.
 */
export function StepFocusRegion({ focusKey, children }: Props) {
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const heading = regionRef.current?.querySelector<HTMLElement>('h2');
    if (!heading) return;

    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }, [focusKey]);

  return <div ref={regionRef}>{children}</div>;
}
