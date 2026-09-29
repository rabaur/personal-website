import { Footnote } from "@/components/Footnote";
import { ResearchInterests } from "@/components/ResearchInterests";
import { NewsSection } from "@/components/NewsSection";
import { PublicationsSection } from "@/components/PublicationsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[var(--s-7)]">
      <section className="row">
        <h2 className="row-label">About</h2>
        <div className="prose">
        <p>
          Most relevant real-world problems are wicked
          <Footnote n={1}>
            The term was coined in Rittel &amp; Webber&apos;s seminal 1973
            paper and is used frequently in research on the built environment,
            where my applied footing lies.
          </Footnote>
          . One consequence is that solutions are &ldquo;good&rdquo; or
          &ldquo;bad&rdquo;, not &ldquo;true&rdquo; or &ldquo;false&rdquo;.
          This severely limits the applicability of learning paradigms that
          rely on verifiable solutions: verifiers (or ground-truth reward
          functions) usually just don&apos;t exist.
        </p>
        <p>
          Reinforcement learning from human feedback (RLHF) has been a
          promising way around this: if we can&apos;t procedurally define a
          reward function, we learn it from human judgements about model
          behavior, called feedback.
          <Footnote n={2}>
            The core insight: even when humans can&apos;t pinpoint why one
            output is better than another, choosing between the two is often
            much easier.
          </Footnote>{" "}
          Then we optimize it with standard RL algorithms.
          <Footnote n={3}>Pretty simple, right?</Footnote> But current RLHF
          methods fall short. They are overly restrictive about which signals
          can be integrated
          <Footnote n={4}>Usually pairwise preferences (yawn)</Footnote>, and
          they produce brittle reward models that do not capture the intended
          behavior, even though they are trained on human data
          <Footnote n={5}>For example, sycophancy</Footnote>.
        </p>
        <p>
          I don&apos;t think that&apos;s sufficient reason to give up on RLHF
          &ndash; I firmly believe that to solve real-world problems, we need
          to learn from whatever the world tells us about our solutions, in
          all its nuance and diversity
          <Footnote n={6}>
            This runs against the current enthusiasm for RLVR and
            self-improvement loops. Both are great where verifiers exist, but
            that&apos;s not where most of the interesting problems live.
          </Footnote>
          . In that spirit, my current research focuses on:
        </p>
        <ul>
          <li>
            <strong>Jointly learning from multiple feedback types.</strong>{" "}
            Feedback (human or not) comes in many forms, and jointly it
            constrains the reward more effectively than any single type on its
            own.
          </li>
          <li>
            <strong>Learning distributional reward models.</strong> This is
            key to avoid brittle (and thus hackable) reward estimates.
            Representing uncertainty about preferences is useful: it allows us
            to quantify whether we should ask again, represent genuine
            disagreement, and transfer more robustly to unseen settings.
          </li>
          <li>
            <strong>
              Actively constructing informative queries (while taking cost
              into account).
            </strong>{" "}
            Feedback types differ in informativeness and cost. I aim to
            develop methods that can trade these factors off flexibly and at
            scale.
          </li>
        </ul>
        </div>
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
