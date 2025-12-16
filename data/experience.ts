export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "experience" | "education";
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Founder",
    company: "InfiniteStudioX · Freelance",
    period: "May 2025 - Present",
    description:
      "Providing services in Web Development, Web3, DeFi, and App Development — specializing in building MVPs with great design and functionality to ensure client satisfaction.",
    type: "experience",
  },
  {
    id: 2,
    role: "Full Stack Engineer",
    company: "CrackedDevs.com · Internship",
    period: "Sep 2024 - Sep 2024",
    description: "Worked on a crypto full stack project frontend",
    type: "experience",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "ConvoQ AI · Internship",
    period: "Apr 2024 - Jun 2024",
    description:
      "Led frontend initiatives tailored for the startup, creating agile and user-centric interfaces.($100/month)",
    type: "experience",
  },
  {
    id: 4,
    role: "Cadet",
    company: "Anglo-Eastern · Full-time",
    period: "Oct 2021 - Apr 2022",
    description:
      "Joined as a cadet , Left it didn't like the work culture of navy",
    type: "experience",
  },
];

export const educationData: Experience[] = [
  {
    id: 1,
    role: "Bachelor of Technology in Computer Science",
    company: "Indian Institute of Information Technology, Design and Manufacturing, Jabalpur",
    period: "2020 — 2024",
    description:
      "I am currently doing my Bachelors in computer Science. I enjoy learning about developement technologies and am currently learning Next.js and TypeScript.",
    type: "education",
  },
  {
    id: 2,
    role: "Higher Secondary Certificate",
    company: "Kendriya Vidyalaya No.1, AFS, Tambaram, Chennai",
    period: "2018 — 2020",
    description: "",
    type: "education",
  },
];
