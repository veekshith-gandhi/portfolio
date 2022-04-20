/** @format */

import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css";

const data = [
  {
    name: "Trello Clone",
    techStack: ["HTML5", "CSS3", "React", "Redux", "Nodejs", "MongoDB"],
    desc: "Trello is the visual tool that empowers your team to manage any type of project, workflow, or task tracking. Add files, checklists, or even automation: Customize it all for how your team works best..",
    collab: true,
    year: "Nov 2022",
    team: 2,
    days: 10,
    img: "./trello.png",
    git: "https://github.com/devgurbir/trello",
    web: "https://trello-clon-e.netlify.app",
  },
  {
    name: "Chat Application",
    techStack: ["HTML5", "CSS3", "React", "Nodejs", "Websockets"],
    desc: "A chat application makes it easy to communicate with people anywhere in the world by sending and receiving messages in real time.",
    collab: false,
    year: "Mar 2022",
    img: "./chat.png",
    git: "https://github.com/veekshith-gandhi/chat-application",
    web: "https://c-hat-app.netlify.app",
  },
  {
    name: "Flipkart Clone",
    techStack: ["React", "Redux", "Routes", "Material UI"],
    desc: "Flipkart is a leading destination for online shopping in India.E-commerce marketplace offering over 30 million products cross 70+ categories.",
    collab: true,
    year: "Dec 2021",
    team: 2,
    days: 5,
    img: "./flipkart.PNG",
    git: "https://github.com/Aiswaryaraja1996/Flipkart-Project",
    web: "https://clone-flipkart.netlify.app/",
  },
];

export default function Project() {
  return (
    <div id="project" className={styles.project}>
      <p className={styles.head}>PROJECTS</p>
      {data.map((item) => (
        <ProjectCard item={item} />
      ))}
    </div>
  );
}
