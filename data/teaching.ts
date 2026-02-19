export interface TeachingCourse {
  title: string;
  nr: string;
  institution: string;
  description?: string;
  responsibilities?: string;
  semesters: {
    semester: string;
    role: string;
  }[];
}

export const teachingCourses: TeachingCourse[] = [
  {
    title:
      "Evidence-Based Design: Methods and Tools for Evaluating Architectural Designs",
    nr: "851-0252-08L",
    institution: "Chair of Cognitive Science, ETH Zürich",
    description:
      "Students are taught a variety of quantitative and qualitative techniques to evaluate the human-centred performance of architectural designs, including literature research, geometric and topological analysis of floorplans, virtual walkthroughs in 3D, and agent-based modeling. The target group of the course are undergraduate and graduate architecture students.",
    responsibilities:
      "Curation of the course content, creation of course projects, lectures, development and maintenance of the course toolkit, feedback on and correction of exercises.",
    semesters: [
      { semester: "Fall 2024", role: "Lecturer" },
      { semester: "Spring 2024", role: "Teaching Assistant" },
      { semester: "Fall 2023", role: "Teaching Assistant" },
      { semester: "Spring 2023", role: "Teaching Assistant" },
      { semester: "Fall 2022", role: "Teaching Assistant" },
      { semester: "Spring 2022", role: "Teaching Assistant" },
      { semester: "Fall 2021", role: "Teaching Assistant" },
      { semester: "Spring 2021", role: "Teaching Assistant" },
      { semester: "Fall 2020", role: "Teaching Assistant" },
    ],
  },
  {
    title: "Linear Algebra",
    nr: "401-0131-00",
    institution: "Interactive Geometry Lab, ETH Zürich",
    description:
      "Organization and execution of weekly exercise sessions with up to 30 students. Correction of weekly homework assignments and preparation of students for final exams. This position requires an excellent grade in Linear Algebra and licensed pedagogical abilities.",
    semesters: [
      { semester: "Fall 2021", role: "Teaching Assistant" },
      { semester: "Fall 2020", role: "Teaching Assistant" },
    ],
  },
  {
    title: "Fundamentals of Web Engineering",
    nr: "252-2810-00L",
    institution: "IVIA Lab, ETH Zürich",
    semesters: [{ semester: "Fall 2024", role: "Teaching Assistant" }],
  },
];
