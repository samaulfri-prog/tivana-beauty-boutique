import { useEffect, useRef, useState } from "react";
import { RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Visionneuse 360° : rotation par glissement (souris / tactile),
 * avec rotation automatique tant que l'utilisateur n'a pas interagi.
 */
export function Product360({
  frames,
  alt,
  className,
}: {
  frames: string[];
  alt: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [engaged, setEngaged] = useState(false);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const acc = useRef(0);

  const count = frames.length;

  useEffect(() => {
    if (engaged || count < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 900);
    return () => window.clearInterval(id);
  }, [engaged, count]);

  const step = (dx: number) => {
    acc.current += dx;
    const threshold = 18;
    while (Math.abs(acc.current) >= threshold) {
      const dir = acc.current > 0 ? 1 : -1;
      acc.current -= dir * threshold;
      setIndex((i) => (i + dir + count) % count);
    }
  };

  const start = (x: number) => {
    dragging.current = true;
    lastX.current = x;
    acc.current = 0;
    setEngaged(true);
  };
  const move = (x: number) => {
    if (!dragging.current) return;
    step(x - lastX.current);
    lastX.current = x;
  };
  const end = () => {
    dragging.current = false;
  };

  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-2xl bg-[hsl(36_35%_94%)] select-none touch-none cursor-grab active:cursor-grabbing",
        className,
      )}
      onMouseDown={(e) => start(e.clientX)}
      onMouseMove={(e) => move(e.clientX)}
      onMouseUp={end}
      onMouseLeave={end}
      onTouchStart={(e) => start(e.touches[0].clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      onTouchEnd={end}
      role="img"
      aria-label={`${alt} — vue 360°`}
    >
      {frames.map((f, i) => (
        <img
          key={f + i}
          src={f}
          alt={i === 0 ? alt : ""}
          aria-hidden={i !== index}
          draggable={false}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-200",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 p-4">
        <div className="flex gap-1.5">
          {frames.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1 rounded-full transition-all",
                i === index ? "w-5 bg-primary" : "w-1.5 bg-foreground/20",
              )}
            />
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary shadow-sm">
          <RotateCw className="h-3 w-3" /> Faites glisser · Vue 360°
        </span>
      </div>
    </div>
  );
}
