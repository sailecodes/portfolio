import shoeszn1 from "../assets/imgs/shoe-szn-pic-1.png";
import instaiv1 from "../assets/imgs/instaiv-pic-1.png";
import todoiv1 from "../assets/imgs/todoiv-pic-1.png";

const projects = [
  {
    date: "CURRENT",
    name: "Shoe Szn",
    skills: ["MongoDB", "Express", "React", "Node"],
    description: "An e-commerce website that provides consumers with shoes handpicked by the community.",
    explanation: "This is an ongoing project that will enable me to further understand e-commerce applications.",
    links: [
      { name: "Github", link: "https://github.com/sailecodes/shoe-szn" },
      { name: "Visit", link: "#" },
    ],
    img: shoeszn1,
  },
  {
    date: "NOVEMBER 2023",
    name: "InstaIV",
    skills: ["MongoDB", "Express", "React", "Node"],
    description: "A social media application based on Instagram's design and basic functionalities.",
    explanation:
      "This project allowed me to reinforce my understanding of social media applications. I designed the frontend and backend and incorporated various methodologies such as JSON Web Token authentication and route restriction.",
    links: [
      { name: "Github", link: "https://github.com/sailecodes/instaiv" },
      { name: "Visit", link: "https://instaiv.up.railway.app/" },
    ],
    img: instaiv1,
  },
  {
    date: "OCTOBER 2023",
    name: "TodoIV",
    skills: ["MongoDB", "Express", "React", "Node"],
    description: "A to-do list application for organizing various tasks.",
    explanation:
      "This project was meant for practicing the MERN stack. I built the frontend with a friendly and dynamic UI. As for the backend, I implemented different operations such as CRUD and user registration.",
    links: [
      { name: "Github", link: "https://github.com/sailecodes/todoiv" },
      { name: "Visit", link: "#" },
    ],
    img: todoiv1,
  },
  {
    date: "DECEMBER 2022",
    name: "Birds of a Feather",
    skills: ["Java", "Android Development", "Agile Development"],
    description: "A to-do list application for organizing various tasks.",
    explanation:
      "This was a six-member project for my software engineering class at UCSD. It was developed with agile software methodologies in which I implemented filtering algorithms, white-box and unit tests, collaborated on the UI design, and coordinated stand-up and weekly meetings.",
    links: [
      { name: "Github", link: "https://github.com/CSE-110-Winter-2022/birds-of-a-feather-team-29" },
      { name: "Visit", link: "#" },
    ],
    img: todoiv1,
  },
];

export default projects;
