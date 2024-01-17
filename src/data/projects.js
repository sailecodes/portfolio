import shoeszn1 from "../assets/imgs/shoe-szn-pic-1.png";
import instaiv1 from "../assets/imgs/instaiv-pic-1.png";
import todoiv1 from "../assets/imgs/todoiv-pic-1.png";

const projects = [
  {
    name: "Shoe Szn",
    skills: ["MongoDB", "Express", "React", "Node"],
    description: "An e-commerce website that provides consumers with shoes handpicked by the community",
    links: [
      { name: "Github", link: "https://github.com/sailecodes/shoe-szn" },
      { name: "Visit", link: "#" },
    ],
    img: shoeszn1,
  },
  {
    name: "InstaIV",
    skills: ["MongoDB", "Express", "React", "Node"],
    description: "A social media application based on Instagram's design and basic functionalities",
    links: [
      { name: "Github", link: "https://github.com/sailecodes/instaiv" },
      { name: "Visit", link: "https://instaiv.up.railway.app/" },
    ],
    img: instaiv1,
  },
  {
    name: "TodoIV",
    skills: ["MongoDB", "Express", "React", "Node"],
    description: "A to-do list application for organizing various tasks",
    links: [
      { name: "Github", link: "https://github.com/sailecodes/todo" },
      { name: "Visit", link: "#" },
    ],
    img: todoiv1,
  },
];

export default projects;
