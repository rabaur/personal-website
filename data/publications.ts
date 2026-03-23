export interface Publication {
  title: string;
  authors: string[];
  conference: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title: "MAVRL: Learning Reward Functions from Multiple Feedback Types with Amortized Variational Inference",
    authors: ["Raphaël Baur", "Yannick Metz", "Maria Gkoulta", "Mennatallah El-Assady", "Giorgia Ramponi", "Thomas Kleine Buening"],
    conference: "Preprint, 2026",
    url: "https://arxiv.org/abs/2602.15206",
  },
  {
    title:
      "The DesignMind Toolkit: A Toolkit for Evidence-Based, Cognitively-Informed and Human-Centred Architectural Design",
    authors: ["Michal Gath-Morad", "Raphaël Baur", "Christoph Hölscher"],
    conference: "ECAADE2023",
    url: "https://papers.cumincad.org/data/works/att/ecaade2023_313.pdf",
  },
  {
    title:
      "RLHF-Blender: A Configurable Interactive Interface for Learning from Diverse Human Feedback",
    authors: [
      "Yannik Metz",
      "David Lindner",
      "Raphaël Baur",
      "Daniel Keim",
      "Mennatallah El-Assady",
    ],
    conference: "ICML2023",
    url: "https://arxiv.org/abs/2308.04332",
  },
  // {
  //   title:
  //     "MazeMastery: A Python Framework for Teaching Maze-Traversal in High School",
  //   authors: ["Raphaël Baur", "Jens Hartmann", "Jacqueline Staub"],
  //   conference: "ISSEP2023",
  //   url: "https://zenodo.org/records/8431922",
  // },
];

export const AUTHOR_NAME = "Raphaël Baur";
