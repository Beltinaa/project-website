import { useRef, useState, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type BeforeAfterSliderProps = {
  before: string;
  after: string;
  caption: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const BeforeAfterSlider = ({ before, after, caption }: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const next = ((clientX - left) / width) * 100;
    setPosition(clamp(next, 0, 100));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updatePosition(event.clientX);
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  return (
    <div className="before-after">
      <div
        ref={containerRef}
        className="before-after-slider"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <img src={after} alt="After rendering" loading="lazy" className="after-image" />
        <div className="before-image" style={{ width: `${position}%` }}>
          <img src={before} alt="Before rendering" loading="lazy" />
        </div>
        <span className="before-label">Before</span>
        <span className="after-label">After</span>
        <div
          className="slider-handle"
          style={{ left: `${position}%` }}
          onPointerDown={handlePointerDown}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-label="Drag to compare before and after"
        >
          <span className="handle-line" aria-hidden="true" />
          <span className="handle-circle" aria-hidden="true">
            <ChevronLeft size={16} />
            <ChevronRight size={16} />
          </span>
        </div>
      </div>
      <p className="before-after-caption">{caption}</p>
    </div>
  );
};

export default BeforeAfterSlider;
