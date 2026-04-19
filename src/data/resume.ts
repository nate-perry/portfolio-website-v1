export const profile = {
  name: "Nathan Perry",
  shortName: "Nate",
  title: "Software Engineer",
  subtitle: "Cloud & Edge • AWS",
  location: "Arlington, VA",
  email: "nathanperry@randdgroup.com",
  phone: "443-377-2222",
  summary:
    "Software engineer at AWS working on Edge Services, with a background in cloud, geospatial, and secure distributed systems. I like building scalable infrastructure, well-designed APIs, and shipping products that people actually use.",
  socials: {
    github: "https://github.com/nate-perry",
    linkedin: "https://www.linkedin.com/in/nathanperry443/",
    instagram: "https://www.instagram.com/nate.perry13/",
    website: "https://www.nrperry.com",
  },
  rfp: "https://rfp.nrperry.com",
  geo: "https://geo.nrperry.com",
  headshot: "/images/headshot.jpg",
  heroImage: "/images/iribe.jpg",
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  logo: string;
  bullets: string[];
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Amazon Web Services (AWS)",
    role: "Software Engineer — Edge Services",
    location: "Arlington, VA",
    start: "Jul 2025",
    end: "Present",
    logo: "/images/aws_logo.png",
    bullets: [
      "Designed and built customer-facing control-plane APIs and automated deployment pipelines, enabling scalable onboarding and lifecycle management for edge services while meeting strict customer security and compliance requirements.",
      "Designed and implemented encrypted data-plane pathways providing persistent, secure connectivity into Amazon Dedicated Cloud (ADC) regions.",
      "Built a centralized, secure configuration management service to distribute, validate, and roll back hardware configuration updates across edge-deployed devices.",
    ],
    tags: ["TypeScript", "CDK", "Edge", "Control Plane", "Security"],
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "Cloud Developer — National Security Practice",
    location: "Arlington, VA",
    start: "Aug 2023",
    end: "Jul 2025",
    logo: "/images/aws_logo.png",
    bullets: [
      "Designed and implemented secure, serverless geospatial data APIs backed by PostGIS, supporting authenticated spatial queries and multiple geospatial output formats with automated infrastructure deployments.",
      "Built automated ETL and data processing pipelines using ECS/Fargate to handle large-scale datasets, enabling reliable, repeatable processing workflows for customer applications.",
      "Designed a scalable indexing and data retention strategy to support long-term storage, querying, and export of datasets.",
      "Developed a reusable, cross-team cloud resource adopted by 10+ internal teams to accelerate delivery of customer workloads.",
      "Integrated a machine learning management platform enabling users to securely share datasets and workspaces across teams.",
    ],
    tags: ["Python", "PostGIS", "ECS/Fargate", "Serverless", "ML Ops"],
  },
  {
    company: "University of Maryland — Facilities Management",
    role: "Campus Geospatial Information Systems (GIS) Intern",
    location: "College Park, MD",
    start: "Jan 2023",
    end: "May 2023",
    logo: "/images/University-of-Maryland-Logo.png",
    bullets: [
      "Developed interactive campus mapping tools using JavaScript and the ArcGIS SDK; integrated WMATA transit APIs and near real-time data layers used by 10,000+ students and staff.",
    ],
    tags: ["JavaScript", "ArcGIS", "WMATA API", "GIS"],
  },
  {
    company: "University of Maryland — Institute of Physical Science and Technology",
    role: "Technical Support Engineer",
    location: "College Park, MD",
    start: "Jan 2022",
    end: "May 2023",
    logo: "/images/University-of-Maryland-Logo.png",
    bullets: [
      "Provided technical support for faculty and staff, troubleshooting networked systems, operating systems, and hardware in office environments.",
      "Supported system configuration and maintenance, reducing recurring issues and improving reliability for research staff.",
    ],
    tags: ["Networking", "Systems", "Support"],
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "Associate Cloud Consultant Intern — National Security Practice",
    location: "Herndon, VA",
    start: "Jun 2022",
    end: "Sep 2022",
    logo: "/images/aws_logo.png",
    bullets: [
      "Engineered a reusable AWS CDK construct providing a standardized orchestration layer for secure ECS-based batch processing workloads.",
      "Refactored legacy deployment code, reducing lines of code by 94% and cutting environment setup time from hours to minutes.",
    ],
    tags: ["AWS CDK", "ECS", "TypeScript"],
  },
];

export const education = [
  {
    school: "University of Maryland",
    program: "B.S. in Computer Science, Minor in Geospatial Information Sciences",
    college: "College of Computer, Mathematical and Natural Sciences",
    location: "College Park, MD",
    end: "May 2023",
    logo: "/images/University-of-Maryland-Logo.png",
  },
  {
    school: "Anne Arundel Community College",
    program: "A.S. in Computer Science Transfer — Computer Science",
    college: "College of Science, Technology, and Education",
    location: "Arnold, MD",
    end: "Dec 2021",
    honors: "Magna Cum Laude",
  },
];

export type ProjectColor = "blue" | "violet" | "orange" | "teal" | "amber" | "pink";

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  image?: string;
  tags: string[];
  featured?: boolean;
  color: ProjectColor;
};

export const projects: Project[] = [
  {
    name: "RFP",
    tagline: "rfp.nrperry.com",
    description:
      "A personal project at rfp.nrperry.com — more details coming soon. Reach out if you want an early look.",
    href: "https://rfp.nrperry.com",
    tags: ["Next.js", "Vercel"],
    featured: true,
    color: "violet",
  },
  {
    name: "Setlist",
    tagline: "app.setlistapp.org",
    description:
      "A live-music discovery platform helping fans find local shows and artists share events, replacing fragmented sources like venue pages and social media.",
    href: "https://app.setlistapp.org/",
    tags: ["Full-stack", "Live Music", "Discovery"],
    featured: true,
    color: "orange",
  },
  {
    name: "Interval Timer",
    tagline: "iOS App Store · 5★",
    description:
      "SwiftUI interval timer featuring clean, animated progress graphics. Published on the App Store with a 5-star rating.",
    href: "https://nterval-timer.vercel.app/",
    image: "/images/interval_timer.png",
    tags: ["SwiftUI", "iOS"],
    color: "pink",
  },
  {
    name: "A* Pathfinding Visualizer",
    tagline: "Python + Pygame",
    description:
      "An interactive visualization of the A* pathfinding algorithm, built with Pygame.",
    href: "https://github.com/nate-perry",
    image: "/images/astar1.gif",
    tags: ["Python", "Pygame", "Algorithms"],
    color: "teal",
  },
  {
    name: "Next.js Todo",
    tagline: "Firebase + Tailwind",
    description:
      "Persistent to-do app with Firebase Auth and Firestore, styled with Tailwind CSS.",
    href: "https://nextjs-todo-pied.vercel.app",
    image: "/images/todo.png",
    tags: ["Next.js", "Firebase", "Tailwind"],
    color: "amber",
  },
];

export const skills = {
  programming: ["Python", "TypeScript", "Java", "SwiftUI", "JavaScript", "SQL"],
  cloud: ["AWS", "AWS CDK", "ECS/Fargate", "Lambda", "PostGIS", "Vercel", "Next.js"],
  tools: ["Git", "Linux", "Docker", "CI/CD", "ArcGIS"],
};

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    badgeId: "ecc8f665-7f37-4ae2-ac62-f0905805d0b1",
  },
  {
    name: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    badgeId: "aff0fbb2-f20f-48f9-81ae-641a7c0468d8",
  },
  {
    name: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
  },
];
