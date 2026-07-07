import { useEffect, useRef } from 'react';

export function useReveal({ threshold = 0.12, stagger = 80 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll('.reveal');
    targets.forEach((t, i) => {
      t.style.transitionDelay = `${i * stagger}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold, stagger]);

  return ref;
}
