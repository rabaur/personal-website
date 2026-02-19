export interface EducationItem {
  title: string;
  institution: string;
  city: string;
  country: string;
  dateStart: string;
  dateEnd: string;
  thesisTitle: string;
  thesisSupervisors: string[];
}

export const education: EducationItem[] = [
  {
    title: "M.Sc. in Computer Science",
    institution: "ETH Zürich",
    city: "Zurich",
    country: "Switzerland",
    dateStart: "2021-09",
    dateEnd: "2024-08",
    thesisTitle:
      "Human-Aligned, Bluetooth-Based Indoor Localization Using Sequential Monte Carlo",
    thesisSupervisors: [
      "Prof. Dr. Mennatallah El-Assady",
      "Prof. Dr. Christoph Hölscher",
    ],
  },
  {
    title: "B.Sc. in Computer Science",
    institution: "ETH Zürich",
    city: "Zurich",
    country: "Switzerland",
    dateStart: "2018-09",
    dateEnd: "2021-08",
    thesisTitle:
      "Learnability of Buildings - Using Reinforcement Learning to Predict Wayfinding Efficiency in Large Buildings",
    thesisSupervisors: [
      "Prof. Dr. Dirk Helbing",
      "Prof. Dr. Christoph Hölscher",
    ],
  },
  {
    title: "Swiss Matura",
    institution: "Lyceum Alpinum Zuoz",
    city: "Zuoz",
    country: "Switzerland",
    dateStart: "2011-08",
    dateEnd: "2017-07",
    thesisTitle:
      "Prediction and Visualization of the Environmental Development of the Morteratsch Valley",
    thesisSupervisors: ["Peter Frehner"],
  },
];
