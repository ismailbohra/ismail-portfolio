const recentWorks = [
  {
    title: "Passwordless Authentication",
    description: "Secure and seamless authentication system.",
    techs: ["Simplewebauthn", "Node.js"],
    img: "/images/pa.png",
    link: "https://pa.misasoftware.com/signup.html",
  },
  {
    title: "Resume Builder",
    description: "Interactive tool to create professional resumes.",
    techs: ["React", "Redux", "MUI"],
    img: "/images/resume.png",
    link: "https://monumental-quokka-be747d.netlify.app/",
  },
  {
    title: "Movix",
    description: "Movie discovery app.",
    techs: ["React", "Redux", "TMDB"],
    img: "/images/movix.png",
    link: "https://fanciful-elf-8a2435.netlify.app/",
  },
  {
    title: "Business Portfolio",
    description: "Portfolio website for Ajar Hardware Dubai.",
    techs: ["Html", "CSS", "PHP", "MySql"],
    img: "/images/ajar.png",
    link: "https://ajar-me.com",
  },
  {
    title: "RoadToMotivation Blog",
    description: "Blogging website.",
    techs: ["Codeigniter 3", "Bootstrap", "JS"],
    img: "/images/roadtomotivation.png",
    link: "https://github.com/ismailbohra/gdsc-android-ipsa",
  },
  {
    title: "Babji Store (E-commerce)",
    description: "E-commerce website.",
    techs: ["Wordpress", "Woocommerce"],
    img: "/images/babjistore.png",
    link: "https://babjistore.com",
  },
  {
    title: "Sadri Jamaat",
    description: "Community website.",
    techs: ["Html", "CSS", "PHP", "MySql"],
    img: "/images/sadrijamaat.png",
    link: "https://sadrijamaat.in",
  },
  {
    title: "Personal Portfolio",
    description: "Personal portfolio.",
    techs: ["Tailwind", "JS", "Vite"],
    img: "/images/IsmailPortfolio.png",
    link: "https://ismailbohra.github.io/ismail-portfolio/",
  },
  {
    title: "Inventory Management",
    description: "Inventory management webapp.",
    techs: ["Mongoodb", "Node", "Express"],
    img: "/images/inventory_managment.png",
    link: "https://github.com/ismailbohra/shoparel",
  },
];

const parent = document.getElementById("recent-works");

const getTech = (techs) => {
  return techs
    .map(
      (tech) =>
        `<button type="button" class="text-gray-900 bg-gray-100 border border-gray-100  hover:bg-gray-50 font-medium rounded-md text-sm px-3.5 py-2 mr-2 mb-2 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-600">
                ${tech}
            </button>`
    )
    .join(" ");
};

const html = recentWorks.map(
  (work) =>
    `<div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="lg:h-36 object-cover">
            <img class="rounded-t-lg w-full h-full" src=${work.img} alt=${
      work.title
    } />
        </div>
        <div class="p-3 border-t border-gray-100 dark:border-gray-600">
            <h5 class="text-xl font-bold text-gray-900 dark:text-gray-200">${
              work.title
            }</h5>
        <p class="font-light text-gray-800 dark:text-gray-400">${
          work.description
        }</p>
        <div class="my-4 flex flex-wrap">
            ${getTech(work.techs)}
        </div>
        <a href=${work.link} target="_blank"
            class="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-blue-500 hover:bg-blue-600 dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
        </a>
        </div>
    </div>`
);

parent.innerHTML = html.join(" ");
