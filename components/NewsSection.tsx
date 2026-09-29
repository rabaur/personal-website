import { news } from "@/data/news";

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

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day} ${MONTH_ABBR[date.getMonth()]} ${date.getFullYear()}`;
}

export function NewsSection() {
  return (
    <section className="row">
      <h2 className="row-label">News</h2>
      <div className="news-scroll">
        <ul className="ruled">
          {news.map((item) => (
            <li key={item.date} className="news-item">
              <time className="news-date" dateTime={item.date}>
                {formatDate(item.date)}
              </time>
              <div className="news-body">{item.content}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
