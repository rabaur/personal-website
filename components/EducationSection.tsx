import { education } from "@/data/education";

function formatPeriod(start: string, end: string) {
  const fmt = (d: string) => {
    const [year, month] = d.split("-");
    return `${month}/${year}`;
  };
  return `${fmt(start)} – ${fmt(end)}`;
}

export function EducationSection() {
  return (
    <div className="space-y-4">
      {education.map((item) => (
        <div key={item.title + item.dateStart}>
          <p className="font-medium">{item.title}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {item.institution}, {item.city}, {item.country}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {formatPeriod(item.dateStart, item.dateEnd)}
          </p>
          {item.thesisTitle && (
            <p className="text-sm mt-1">
              <span className="text-zinc-500 dark:text-zinc-400">
                Thesis:{" "}
              </span>
              {item.thesisTitle}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
