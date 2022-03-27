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
    web: "",
  },
  // {
  //   name: "HotJar Clone",
  //   techStack: ["HTML5", "CSS3", "JavaScript"],
  //   desc: "Hotjar is a powerful tool that reveals the online behavior and voice of your users by combining both Analysis and Feedback tools.",
  //   collab: true,
  //   year: "Sep 2021",
  //   team: 3,
  //   days: 10,
  //   img: "./hotjar.png",
  //   git: "https://github.com/Aiswaryaraja1996/Hotjar",
  //   web: "https://aiswaryaraja1996.github.io/Hotjar/",
  // },
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
