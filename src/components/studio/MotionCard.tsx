import { useRef, type ReactNode, type PointerEvent, type CSSProperties } from "react";

export function MotionCard({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const frame = useRef<number>();
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    cancelAnimationFrame(frame.current ?? 0);
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty("--tilt-x", `${-y * 5}deg`);
      element.style.setProperty("--tilt-y", `${x * 5}deg`);
    });
  };
  const reset = (event: PointerEvent<HTMLDivElement>) => {
    cancelAnimationFrame(frame.current ?? 0);
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };
  return <div className={`motion-card ${className}`} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>{children}</div>;
}
