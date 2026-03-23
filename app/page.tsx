import { ResearchInterests } from "@/components/ResearchInterests";
import { NewsSection } from "@/components/NewsSection";
import { PublicationsSection } from "@/components/PublicationsSection";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          I am a Doctoral Fellow at the{" "}
          <a href="https://ai.ethz.ch/about-us/people/doctoral-students.html">
            ETH AI Center
          </a>
          . My research is supervised by{" "}
          <a href="https://ivia.ch">Prof. Dr. Mennatallah El-Assady</a> and{" "}
          <a href="https://cog.ethz.ch/people/christoph-hoelscher.html">
            Prof. Dr. Christoph Hölscher
          </a>
          .
        </p>
        <p className="mt-3">
          I am interested to use human-AI collaboration to integrate human
          expertise and creativity into complex design processes, in particular
          in the field of <strong>hospital designs</strong>.
        </p>
        <p className="mt-3">
          To achieve this, I am currently focusing on capturing complex human preferences by learning <strong>reward functions</strong> from <strong>heterogenous human feedback</strong>.
        </p>
      </section>

      {/* <section>
        <h2 className="text-xl font-semibold mb-3">Research Interests</h2>
        <ResearchInterests />
      </section> */}

      <NewsSection />
      <PublicationsSection />
    </div>
  );
}
