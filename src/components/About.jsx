/** @format */

import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.mainContainer}>
        <div
          className={styles.aboutme}
          style={{
            color: "black",
            borderRadius: "1rem 0 0 1rem",
          }}
        >
          <p>A little about me !</p>
        </div>
        <div className={styles.para}>
          <p>
            Hello! I am NM Veekshith Gandhi, stepped into the world of
            Information Technology. My passion for web development started with
            the thought of combining art and programming.
          </p>
          <p>
            I love visualizing and curating wonderful experiences with code, and
            designs. Today I have completed a couple of projects and have got
            good hands-on with various front-end and backend technologies.
            Besides my professional experience helped me to become more
            adaptable and a good team player.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
