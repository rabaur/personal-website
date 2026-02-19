export interface ExperienceItem {
  title: string;
  institution: string;
  city: string;
  country: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    title: "Teaching Assistant for Evidence-Based Design in Architecture",
    institution: "Chair of Cognitive Science, ETH Zürich",
    city: "Zurich",
    country: "Switzerland",
    dateStart: "2020-09",
    dateEnd: "Present",
    description:
      "Development of the course toolkit to conduct virtual reality (VR) experiments and agent-based simulations in Unity3D (C#) and spatial analysis in Rhino and Grasshopper (Python, C#). Creation of the toolkit tutorials. Holding lectures and office hours.",
  },
];
