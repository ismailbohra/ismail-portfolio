import {
  aiprep,
  ajar,
  casecobra,
  clg,
  css,
  discord,
  gdsc,
  git,
  hf,
  holopin,
  html,
  javascript,
  mongodb,
  movix,
  nodejs,
  oepp,
  oldschool,
  reactjs,
  roadtomotivation,
  school,
  tailwind,
} from "../assets";

const profiles = [
  {
    link: "https://leetcode.com/u/ismailbohra99/",
    icon: "https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000",
  },
  {
    link: "https://www.cloudskillsboost.google/public_profiles/af707e36-7e26-460b-ab78-80dbbc24dd6a",
    icon: "https://img.icons8.com/fluency/344/google-cloud.png",
  },
  {
    link: "https://www.hackerrank.com/ismailbohra99",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
  },
  {
    link: "https://dev.to/ismailbohraa",
    icon: hf,
  },
  {
    link: "https://www.holopin.io/@ismailbohra7112",
    icon: holopin,
  },
];

const achievements = [
  {
    title:
      "Winner - Smart India Hackathon 2023 for problem domain of slow learner identification and remedial teaching",
  },
  {
    title: "Runner-Up kriyeta Hackathon 1.0 - AI Integrated Ecommerce Platform",
  },
  {
    title:
      "Academic Topper Consistently ranked 2nd in 2022, 2023, and 2024 by IPS Academy",
  },
  {
    title:
      "Silver Medal by American Federation of Muslims of Indian Origin (AFMI) for Academics in high school",
  },
  {
    title:
      "Google Developer Student Clubs (GDSC) Core Team Member: Mentored team members and organized workshops.",
  },
  {
    title:
      "Tech Lead, CMS IPS Academy: Directed the development of scalable web applications, collaborating with cross-functional teams.",
  },
  {
    title:
      "Scaled a website to 10,000+ monthly visitors, achieving 25% growth rate.",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
  },
  {
    name: "Google Cloud",
    icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  },
  {
    name: "C++ tool",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySql",
    icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
  },
];

const list = [
  {
    id: "mern",
    title: "MERN",
  },
  {
    id: "next",
    title: "Next.js",
  },
  {
    id: "php",
    title: "PHP",
  },
  {
    id: "other",
    title: "Other",
  },
];

export const Projects = [
  {
    name: "Mobile Case Designer",
    description:
      "Developed a platform to order custom cases with real-time customization, enhancing user engagement. Secure payment integration and optimized performance for a seamless user experience.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "GeminiAI API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: casecobra,
    source_link: "https://case-cobra-nextjs-tutorial.vercel.app/",
    source_code_link: "https://github.com/ismailbohra/Mobile-Case-Designer",
  }
  ,{
    name: "AI Interview Prep",
    description:
      "AI-powered platform for mock interview preparation with speech-to-text and performance ratings using Gemini AI. Focused on optimizing system reliability, achieving 90% uptime for a reliable user experience",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "GeminiAI API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: aiprep,
    source_link: "https://ai-mock-interview-main-4bwheovrf-ismailbohras-projects.vercel.app/",
    source_code_link: "https://github.com/ismailbohra/ai-mock-interview",
  },
  {
    name: "Movix",
    description: "Movix is a web application built using React and Redux that allows users to search for movies and TV shows, view popular, trending, and upcoming releases on a daily and weekly basis, and explore detailed information about each title, including trailers and related videos.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "TMDB Api",
        color: "pink-text-gradient",
      },
    ],
    image: movix,
    source_link: "https://fanciful-elf-8a2435.netlify.app/",
    source_code_link: "https://github.com/ismailbohra/movies",
  },
  {
    name: "Business Portfolio",
    description: "A professional portfolio website showcasing the offerings of a hardware accessories shop. Built using HTML, CSS, and PHP, the platform features a sleek and user-friendly design to highlight products and services effectively.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: ajar,
    source_link: "https://ajar-me.com",
    source_code_link: "https://github.com/ismailbohra/Ajar-me",
  },
  {
    name: "Resume Generator",
    description:"A platform for crafting professional resumes effortlessly. Features an intuitive interface built with ReactJs and Vite, paired with Redux for efficient state management, ensuring a smooth experience. Users can download tailored resumes.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Recux",
        color: "pink-text-gradient",
      },
    ],
    image: discord,
    source_link: "https://monumental-quokka-be747d.netlify.app/",
    source_code_link: "https://github.com/ismailbohra/resume-generator",
  },
  {
    name: "Blog Website",
    description: "An inspiring blog platform designed to motivate and empower users. Built with CodeIgniter 3, Bootstrap for responsive design, and JavaScript for interactive elements. The site offers a collection of engaging articles focused on personal growth, success, and positivity.",
    tags: [
      {
        name: "CI-3",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
    ],
    image: roadtomotivation,
    source_link: "https://github.com/shinchancode/Cryptography",
    source_code_link: "https://github.com/shinchancode/Cryptography",
  },
  
  
];

const experiences = [
  {
    title: "CMS Full Stack Developer",
    company_name: "IES-IPS Academy Indore",
    icon: clg,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Present",
    link: "",
    points: [
      "Developed and implemented a migration plan to upgrade the college ERP system from CodeIgniter 3 to a modern MERN stack architecture.",
      "This transition significantly improved performance when handling large datasets of student records, reduced data duplication, and streamlined system maintenance. ",
      "Contributed to API development and integration, ensuring seamless functionality and scalability in the upgraded system.",
    ],
    link: "https://www.linkedin.com/in/ismailbohraa",
  },
  {
    title: "Back End Developer",
    company_name: "OEPP Innovation Pvt Ltd.",
    icon: oepp,
    iconBg: "#383E56",
    date: "Jun 2023 - Oct 2023",
    link: "",
    points: [
      "Designed and implemented scalable backend solutions using Node.js and AWS services, improving application response time by 30%.",
      "Developed a modular application using microservices architecture, increasing deployment speed by 25% and simplifying maintenance.",
      "Monitored and optimized cloud application performance, achieving 99.9% uptime while ensuring high reliability and scalability",
    ],
    link: "https://www.linkedin.com/in/ismailbohraa",
  },
  {
    title: "GDSC Android Lead",
    company_name: "Google for Developers on Campus IPSA",
    icon: gdsc,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    link: "",
    points: [
      "Led technical initiatives to empower students in coding and development, organising workshops on web and app development, cloud computing, and machine learning. ",
      "Guided peers through hands-on projects, fostering a collaborative learning environment and building a strong tech community at IPS Academy.",
      "Spearheaded multiple events to enhance skills in real-world applications and development tools.",
    ],
    link: "https://www.linkedin.com/in/ismailbohraa",
  },
  {
    title: "Google Cloud Training",
    company_name: "Google Cloud",
    icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Apr 2022",
    link: "",
    points: [
      "Introduction to GCP and more functionalities with free access to quests, skill badges.",
      "Collaborating with cross-functional technologies.",
      "Got introduced to Computing, Application Development, Big Data and Machine Learning using Google Cloud's on training platform Qwiklabs",
      "Additional self-paced labs were provided to practice on Qwiklabs a platform by Google",
    ],
    link: "https://www.cloudskillsboost.google/public_profiles/af707e36-7e26-460b-ab78-80dbbc24dd6a",
  },
  {
    title: "Hacktoberfest",
    company_name: "GitHub",
    icon: hf,
    iconBg: "#E6DEDD",
    date: "Oct (2021 - 2022)",
    link: "",
    points: [
      "Hacktoberfest is an annual worldwide event held during the month of October. The event encourages open source developers to contribute to repositories through pull requests (PR).",
      "GitHub hosts many open source repositories that contribute to this event.",
    ],
    link: "https://dev.to/ismailbohra99",
  },
];

const educations = [
  {
    degree: "Bachelor of Engineering",
    branch: "CSE AIML",
    marks: "CGPA : 9.3 / 10",
    name: "IES-IPS COLLEGE OF ENG. INDORE",
    year: "(2021 - 2025)",
    image: clg,
  },
  {
    degree: "12th Grade",
    branch: "Science",
    marks: "Percentage : 92 %",
    name: "CARMEL CONVENT SCHOOL - NEEMUCH",
    year: "2018",
    image: school,
  },
  {
    degree: "10th Grade",
    branch: "SSC",
    marks: "Percentage : 90.33 %",
    name: "MOHAMMADIYA SCHOOL - CHHOTI SADRI",
    year: "2016",
    image: oldschool,
  },
];

export { achievements, educations, experiences, list, profiles, technologies };
