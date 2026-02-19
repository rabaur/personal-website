import type { ReactNode } from "react";

export interface NewsItem {
  date: string;
  content: ReactNode;
}

export const news: NewsItem[] = [
  {
    date: "2024-10-30",
    content: (
      <>
        Pre-alpha release of{" "}
        <a href="https://arxitect.ivia.ch">arxitect</a>, a web-based
        layout-generation tool with real-time, human-centred analytics
      </>
    ),
  },
  {
    date: "2024-09-01",
    content: (
      <>
        I have joined the{" "}
        <a href="https://ai.ethz.ch/about-us/people/doctoral-students.html">
          ETH AI Center
        </a>{" "}
        as a Doctoral Fellow under the supervision of{" "}
        <a href="https://el-assady.com/">Prof. Menna El-Assady</a> and{" "}
        <a href="https://cog.ethz.ch/people/prof--dr--christoph-hoelscher.html">
          Prof. Christoph Hölscher
        </a>
      </>
    ),
  },
  {
    date: "2024-07-24",
    content: (
      <>
        I have successfully defended my Master Thesis supervised by{" "}
        <a href="https://el-assady.com/">Prof. Menna El-Assady</a> and{" "}
        <a href="https://cog.ethz.ch/people/prof--dr--christoph-hoelscher.html">
          Prof. Christoph Hölscher
        </a>
      </>
    ),
  },
  {
    date: "2024-05-01",
    content: (
      <>
        The <a href="https://github.com/rabaur/EBD-Toolkit">EBD-Toolkit</a> has
        received a major update, including added visualization functionality and
        dedicated tutorials
      </>
    ),
  },
  {
    date: "2024-02-21",
    content: (
      <>
        We kicked off the course{" "}
        <a href="https://rabaur.github.io/ebd-website/">
          Evidence-Based Design in Architecture
        </a>
        , where I will be TAing and teaching this semester
      </>
    ),
  },
  {
    date: "2023-10-01",
    content: (
      <>
        I started working as a research assistant at the{" "}
        <a href="https://ivia.ethz.ch/">IVIA Lab</a>
      </>
    ),
  },
];
