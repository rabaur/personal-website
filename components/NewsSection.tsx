import { news } from "@/data/news";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function NewsSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">News</h2>
      <div className="space-y-3">
        {news.map((item) => (
          <div key={item.date} className="leading-relaxed">
            <span className="inline-block text-xs px-2 py-0.5 border border-zinc-300 dark:border-zinc-600 rounded shadow-[1px_1px_0_0] shadow-zinc-300 dark:shadow-zinc-600 mr-2 whitespace-nowrap">
              {formatDate(item.date)}
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">
              {item.content}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
