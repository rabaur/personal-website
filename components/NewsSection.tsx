"use client";

import { news } from "@/data/news";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const MONTH_ABBR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

const SCROLL_EDGE_PX = 1;

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day} ${MONTH_ABBR[date.getMonth()]} ${date.getFullYear()}`;
}

export function NewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(true);

  const syncScrollShadows = useCallback((el: HTMLDivElement) => {
    const { scrollTop, scrollHeight, clientHeight } = el;
    const atTop = scrollTop <= SCROLL_EDGE_PX;
    const atBottom =
      scrollTop + clientHeight >= scrollHeight - SCROLL_EDGE_PX;
    setShowTopShadow(!atTop);
    setShowBottomShadow(!atBottom);
  }, []);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => syncScrollShadows(el);
    onScroll();

    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(onScroll);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [syncScrollShadows]);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">News</h2>
      <div className="relative w-full max-h-[min(40vh,20rem)]">
        {showTopShadow ? (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-10 shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_10px_10px_-10px_rgb(0_0_0_/_0.25)]"
            aria-hidden
          />
        ) : null}
        {showBottomShadow ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-10 shadow-[inset_0_-10px_10px_-10px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_-10px_10px_-10px_rgb(0_0_0_/_0.25)]"
            aria-hidden
          />
        ) : null}
        <div
          ref={scrollRef}
          className="max-h-[min(40vh,20rem)] overflow-y-auto overflow-x-hidden overscroll-y-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="relative">
            <div
              className="pointer-events-none absolute bottom-2 left-2 top-2 w-px bg-black dark:bg-white"
              aria-hidden
            />
            <ul className="relative m-0 list-none p-0">
              {news.map((item) => (
                <li key={item.date} className="relative mb-6 last:mb-0">
                  <div className="relative flex items-center pl-8">
                    <span
                      className="absolute left-2 top-1/2 z-10 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black ring-2 ring-white dark:bg-white dark:ring-zinc-950"
                      aria-hidden
                    />
                    <time
                      className="text-xs tabular-nums leading-none text-zinc-500 dark:text-zinc-400"
                      dateTime={item.date}
                    >
                      {formatDate(item.date)}
                    </time>
                  </div>
                  <div className="mt-1 pl-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
