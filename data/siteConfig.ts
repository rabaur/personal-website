export const siteConfig = {
  name: "Raphaël Baur",
  email: "rabaur@ethz.ch",
  position: "Doctoral Fellow, ETH AI Center",
  institution: "ETH Zürich",
  image: "/images/raphael-baur.jpg",
  url: "https://www.raphaelbaur.com",
  description: "Personal website of Raphaël Baur. © 2024 Raphaël Baur.",

  socialLinks: [
    {
      platform: "mail" as const,
      url: "mailto:rabaur@ethz.ch",
      label: "Email",
    },
    {
      platform: "github" as const,
      url: "https://github.com/rabaur",
      label: "GitHub",
    },
    {
      platform: "google_scholar" as const,
      url: "https://scholar.google.com/citations?user=xQslnqwAAAAJ&hl=en",
      label: "Google Scholar",
    },
  ],

  researchInterests: [
    "Reward Learning",
    "Human Feedback Informativeness",
    "Human-AI Collaboration",
    "Hospital Design",
    "Probabilistic Programming",
  ],
};
