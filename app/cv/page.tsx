import type { Metadata } from "next";
import { EducationSection } from "@/components/EducationSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TeachingSection } from "@/components/TeachingSection";

export const metadata: Metadata = {
  title: "CV – Raphaël Baur",
  description: "Curriculum Vitae of Raphaël Baur",
};

export default function CvPage() {
  return (
    <div className="font-[family-name:var(--font-crimson)] space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Raphaël Baur</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Doctoral Fellow at the ETH AI Center, ETH Zürich
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-3">Education</h2>
        <EducationSection />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Publications</h2>
        <PublicationsSection variant="cv" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Professional Experience</h2>
        <ExperienceSection />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Teaching</h2>
        <TeachingSection />
      </section>
    </div>
  );
}
