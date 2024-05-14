const qualifications = [
  {
    title: "B.Tech in Computer Science & Engineering (CSE)",
    year: 2025,
    description:
      "B.Tech in Computer Science from IPS Academy Indore. current cgpa 9.5.",
    institute: {
      shortName: "IPS Academy, Institute of Engineering & Science,",
      name: "IES-IPS Academy",
      duration: "July 2021 - July 2025",
    },
  },
  {
    title: "Higher Secondary School ",
    year: 2020,
    description:
      "Achieved two years higher secondary degree from Science major from a reputed institute.",
    institute: {
      shortName:
        "Carmel Convent Senior Secondary School,Neemuch,Madhya Pradesh",
      name: "Carmel Convent School",
      duration: "July 2018 - Jun 2020",
    },
  },
];

const parent = document.getElementById("qualification");

const html = qualifications.map(
  (quali) =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
                <a href="https://web.programming-hero.com/" target="_blank" class="ml-3">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                </a>
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`
);

parent.innerHTML = html.join(" ");
