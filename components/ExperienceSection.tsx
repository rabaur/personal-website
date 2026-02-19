import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      {experience.map((item) => (
        <div key={item.title}>
          <p className="font-medium">{item.title}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {item.institution}, {item.city}, {item.country}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {item.dateStart} – {item.dateEnd}
          </p>
          <p className="text-sm mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
