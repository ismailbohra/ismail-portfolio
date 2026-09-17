// Content data for the portfolio — edit these objects to update the site.
// main.js reads this data and renders the Skills, Experience and Education sections.

const skillCategories = [
  {
    title: "Generative AI",
    skills: ["LLMs", "Transformers", "RAG", "AI Agents", "MCP", "LangChain", "LangGraph", "Prompt Engineering"],
  },
  {
    title: "MLOps & Monitoring",
    skills: ["Model Training & Maintenance", "Data Drift Detection", "Threshold Tuning", "Model Evaluation"],
  },
  {
    title: "Core",
    skills: ["Python", "Node.js", "C++", "DSA", "OOP"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "S3", "Lambda", "CloudFront", "Docker", "Kubernetes", "CI/CD", "Linux", "Nginx"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"],
  },
  {
    title: "Security & Observability",
    skills: ["JWT", "OAuth2", "RBAC", "PBAC", "Monitoring", "Logging", "Perf. Optimization", "Event-Driven Systems"],
  },
];

const experienceList = [
  {
    role: "Junior Software Engineer",
    company: "EPAM Systems",
    location: "Hyderabad",
    duration: "Nov 2025 – Present",
    bullets: [
      "Work on-site as part of an EPAM team embedded with Google stakeholders — leading requirements-gathering sessions, live production troubleshooting, and iterative delivery of AI-driven solutions.",
      "Designed and shipped an AI agent that detects data-drift alerts and auto-recalibrates model thresholds, cutting a 3-day manual fix to under 1 hour (~95% faster resolution).",
      "Train, evaluate, and maintain production ML models, driving continuous improvement from live performance data.",
      "Build AI agents on top of existing MCP servers to invoke internal tools, automating repetitive operational workflows and reducing on-call load.",
      "Build scalable, observable backend services (Python, FastAPI, Docker) underpinning the reliability of these AI-integrated systems.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "HB WEBSOL",
    location: "Indore",
    duration: "Apr 2025 – Nov 2025",
    bullets: [
      "Engineered scalable backend services and AI-ready APIs using Node.js and Express.js for enterprise workflows.",
      "Implemented JWT authentication and RBAC systems for secure enterprise applications.",
      "Optimized APIs with Redis caching and MongoDB query tuning, reducing response latency by 60%.",
      "Deployed microservices using AWS, Docker, and Kubernetes for scalable cloud-native applications.",
      "Built queue-based asynchronous event logging and monitoring systems.",
      "Created observability dashboards and automated testing pipelines for improved reliability.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Techdome",
    location: "Indore",
    duration: "Feb 2025 – Apr 2025",
    bullets: [
      "Built CRM-integrated APIs for WhatsApp messaging workflows and real-time customer engagement.",
      "Designed webhook-driven event pipelines integrating Strapi, Facebook Lead Ads, and Beehive.",
      "Developed retry and queuing mechanisms for reliable asynchronous message delivery.",
      "Integrated telephony APIs into CRM systems and improved deployment reliability using CI/CD.",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "OEPP Innovations Pvt. Ltd.",
    location: "Indore",
    duration: "May 2023 – Oct 2023",
    bullets: [
      "Designed scalable backend systems using Node.js and AWS, improving application response time by 30%.",
      "Developed microservices-based architectures to accelerate deployment cycles and improve maintainability.",
      "Monitored and optimized cloud application performance, achieving 99.9% uptime.",
    ],
  },
];

// Institutions are kept separate so they can be reused/edited independently of the qualification entry.
const institutions = {
  ipsAcademy: { name: "IPS Academy, Indore" },
};

const qualifications = [
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science",
    institution: institutions.ipsAcademy,
    duration: "2021 – 2025",
  },
];
