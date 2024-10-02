
// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img
        src={getImageUrl("about/aboutImage.png")}
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Software Engineer</h3>
            <p>
                Expertise in system architecture, I develop scalable systems,
                optimize protocols and enhance system stability
            </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <h3>Software Developer</h3>
            <p>
                I have built responsive, efficient applications using modern tech stack
                ensuring clean maintainable code for long term success
            </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>UI/UX Designer</h3>
            <p>
                I have designed multiple landing pages and have created design
                systems for mobile and web applications and streamlined workflows
            </p>
            </div>
        </li>
        </ul>
    </div>
    </section>
);
};