export const personalInfo = {
  name: "Xavier Rahman",
  tagline: "Developer • Innovator • Problem Solver",
  phone: "+1 604 802 9372",
  email: "xsr@sfu.ca",
  github: "https://github.com/XavierRHMN",
  linkedin: "https://www.linkedin.com/in/xavier-r-a46489197/",
  location: "Coquitlam, BC, Canada",
};

export const education = {
  institution: "Simon Fraser University",
  degree: "Bachelor of Applied Science in Computer Science",
  expectedGraduation: "May 2028",
  cgpa: "3.75",
  coursework: [
    "Software Engineering",
    "Data Structures and Algorithms",
    "Systems Programming",
    "Artificial Intelligence",
  ],
  awards: ["Dean's Honour Roll (Top 10% of faculty)"],
};

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C++", "C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      ".NET",
      "TailwindCSS",
      "Flask",
      "FastAPI",
      "AWS Lambda",
      "DynamoDB",
      "Postgres",
      "SQLite",
      "FFmpeg",
      "PortAudio",
      "WebSockets",
      "Bootstrap",
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      "Git",
      "Docker",
      "GitHub Actions",
      "AWS Elastic Beanstalk",
      "Visual Studio",
      "IntelliJ Rider",
      "CLion",
      "Linux",
    ],
  },
];

export interface Project {
  title: string;
  subtitle: string;
  date: string;
  techStack: string[];
  github: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "Berkshire Agent Council",
    subtitle: "Multi-Agent Stock Analysis System",
    date: "April 2026",
    techStack: ["Python", "LangGraph", "Gemini", "scikit-learn", "yfinance", "Finnhub"],
    github: "https://github.com/XavierRHMN/berkshire-agent-council",
    highlights: [
      "Built a multi-agent system using LangGraph to orchestrate four AI analysts that debate contradictions via bounded rating updates",
      "Trained Random Forest and KNN classifiers on 128 stock tickers with 25 features, combined via a 3-way voting synthesizer with coverage gates",
      "Integrated real-time data from Yahoo Finance, Finnhub, and FRED APIs with error-isolated fetching and cached offline datasets",
    ],
  },
  {
    title: "Elemental Quest",
    subtitle: "2-Player Puzzle-Adventure Game",
    date: "April 2026",
    techStack: ["Java", "Maven", "Java Swing", "JaCoCo", "Mockito"],
    github: "https://github.com/XavierRHMN/ElementalQuest",
    highlights: [
      "Developed a 2-player puzzle-adventure game in Java Swing with elemental abilities, enemy AI, and a custom pixel-art tileset",
      "Decomposed rendering into modular layers and extracted rule classes, enabling isolated unit and integration testing with JaCoCo",
      "Packaged as a self-contained shaded JAR via Maven with MP3 audio pipeline and automated build, test, and Javadoc generation",
    ],
  },
  {
    title: "SoundHaven",
    subtitle: "Music Player",
    date: "July 2025",
    techStack: ["C#", "Avalonia", "FFmpeg", "NAudio", "TaglibSharp", "YoutubeExplode", "SQLite"],
    github: "https://github.com/XavierRHMN/SoundHaven",
    highlights: [
      "Developed a cross-platform C# music player with Avalonia using the MVVM pattern and a SQLite backend for playlists, song data, and app settings",
      "Integrated YouTube streaming via YoutubeExplode, offline playback through NAudio, and lossless audio conversion with FFmpeg",
      "Implemented metadata management using TagLibSharp and Last.fm API for scrobbling and personalized recommendations",
    ],
  },
  {
    title: "Tempo",
    subtitle: "Performance Regression Detector",
    date: "February 2026",
    techStack: ["C#", ".NET 8", "JavaScript", "GitHub Actions"],
    github: "https://github.com/XavierRHMN/XHacks2026",
    highlights: [
      "Built a CLI performance regression detector for .NET executables that tracks runtime, memory, and GC metrics with statistical analysis (mean, median, std dev, P50/P95/P99 percentiles)",
      "Implemented linear regression trend detection with configurable thresholds and CI/CD exit codes to catch gradual performance degradation before shipping",
      "Designed a SOLID, layered architecture with interface-based extensibility for custom reporters (Console, JSON, Markdown, GitHub Actions) and Git-tagged baseline persistence",
    ],
  },
];

export interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
}

export const workExperience: Experience[] = [
  {
    title: "Head Coding Instructor",
    company: "Code Ninjas W.C.",
    location: "West Coquitlam, BC",
    dates: "April 2023 – September 2023",
    highlights: [
      "Mentored 200+ students in technical skills while adapting teaching methods to diverse learning styles and age groups",
      "Built strong relationships with 14 parents through clear communication in weekly progress reviews and detailed curriculum briefings",
      "Demonstrated responsibility and attention to detail by maintaining daily equipment sanitation protocols and health compliance standards",
    ],
  },
];

export interface Extracurricular {
  title: string;
  organization: string;
  location: string;
  dates: string;
  highlights: string[];
}

export const extracurriculars: Extracurricular[] = [
  {
    title: "Member and Event Volunteer",
    organization: "SFU Computing Science Student Society (CSSS)",
    location: "Burnaby, BC",
    dates: "January 2025 – Present",
    highlights: [
      "Help organize hackathons and networking events for students in the computing science department",
      "Collaborated with executives to improve student engagement through workshops and tech talks",
    ],
  },
  {
    title: "Calc Connect Peer Tutor",
    organization: "SFU Math Department",
    location: "Burnaby, BC",
    dates: "September 2025 – May 2026",
    highlights: [
      "Tutoring students in first-year calculus, reinforcing core concepts through guided problem-solving and exam preparation",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];
