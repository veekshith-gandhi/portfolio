/** @format */

import styles from "./Project.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      id="experience"
      style={{ paddingTop: "150px", textAlign: "center" }}
      data-aos="fade-up"
    >
      <p className={styles.head}>WORK EXPERIENCE</p>
      <p style={{ color: "darkblue" }} className={styles.title}>
        Catalog Associate | Amazon, Bangalore | 20 Aug 2020 - 29 Jan 2022
      </p>

      <fieldset
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          padding: "20px",

          borderRadius: "1rem",
        }}
      >
        <legend>ROLES AND RESPONSIBILITIES</legend>
        <ul style={{ textAlign: "Left", fontSize: "18px", lineHeight: "2" }}>
          <li>Operates in a virtual ,global eCommerce environment.</li>
          <li>Pricing Analytics and operations..</li>
          <li>
            Follow SOPs as prescribed and provide inputs to improve the process.
          </li>
        </ul>
      </fieldset>
    </div>
  );
}
