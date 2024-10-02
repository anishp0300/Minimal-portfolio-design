/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anish</h1>
        <p className={styles.description}> I'm a software developer with 3 years of experience. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonContainer}>
            <a href="puranikanish@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
            <a href="/Anish_Resume.pdf" className={styles.resumeBtn} download>Get Resume</a>
        </div>
    </div>
    <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
    />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
);
};