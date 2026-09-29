"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const VIEWPORT_GUTTER_PX = 16;

interface FootnoteProps {
  n: number;
  children: ReactNode;
}

/**
 * A superscript footnote marker that reveals its note in a small callout on
 * hover, keyboard focus, or tap (for touch devices). The callout is clamped
 * horizontally so it never runs off the viewport.
 */
export function Footnote({ n, children }: FootnoteProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const wrapperRef = useRef<HTMLElement>(null);
  const calloutRef = useRef<HTMLSpanElement>(null);

  const show = useCallback(() => setOpen(true), []);
  const hide = useCallback(() => setOpen(false), []);

  // Keep the callout inside the viewport once it is rendered.
  useLayoutEffect(() => {
    if (!open) {
      setShiftX(0);
      return;
    }
    const el = calloutRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const maxRight = window.innerWidth - VIEWPORT_GUTTER_PX;
    let shift = 0;
    if (rect.right > maxRight) shift = maxRight - rect.right;
    if (rect.left + shift < VIEWPORT_GUTTER_PX)
      shift = VIEWPORT_GUTTER_PX - rect.left;
    setShiftX(shift);
  }, [open]);

  // Close on Escape and on taps outside (touch devices toggle by click).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) hide();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, hide]);

  return (
    <sup
      ref={wrapperRef}
      className="fn"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {/* A span, not a <button>: Chrome lays buttons out as atomic boxes, which
          lets "word" and its marker split across lines. */}
      <span
        role="button"
        tabIndex={0}
        className="fn-marker"
        aria-describedby={open ? id : undefined}
        aria-expanded={open}
        onFocus={show}
        onBlur={hide}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
      >
        {n}
      </span>
      {open ? (
        <span
          ref={calloutRef}
          id={id}
          role="tooltip"
          style={{ transform: `translateX(${shiftX}px)` }}
          className="fn-callout"
        >
          <span className="fn-callout-box">
            {children}
          </span>
        </span>
      ) : null}
    </sup>
  );
}
