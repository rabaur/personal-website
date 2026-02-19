import { teachingCourses } from "@/data/teaching";

export function TeachingSection() {
  return (
    <div className="space-y-6">
      {teachingCourses.map((course) => (
        <div key={course.nr}>
          <h3 className="font-medium border-b border-zinc-200 dark:border-zinc-700 pb-1 mb-2">
            {course.title}{" "}
            <span className="text-zinc-400 dark:text-zinc-500 font-normal">
              – {course.nr}
            </span>
          </h3>
          {course.description && (
            <p className="text-sm mb-2">{course.description}</p>
          )}
          {course.responsibilities && (
            <p className="text-sm mb-2">
              <span className="font-medium">Responsibilities: </span>
              {course.responsibilities}
            </p>
          )}
          <div className="space-y-1">
            {course.semesters.map((s) => (
              <div key={s.semester} className="flex text-sm">
                <span className="w-28 shrink-0 text-zinc-500 dark:text-zinc-400 italic text-right pr-4">
                  {s.semester}
                </span>
                <span>{s.role}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
