/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Development.module.css";
import { getImageUrl } from "../../utils";

export const Development = () => {
  return (
    <section className={styles.container} id="development">
      <h2 className={styles.title}>Professional Development</h2>
      <div className={styles.content}>
        <ul className={styles.developmentItem}>
        <li className={styles.developmentItem}>
          <img src={getImageUrl("development/hat.png")} alt="Hat Icon" />
          <div className={styles.developmentItemText}>
            <h3>MATLAB Onramp</h3>
            <p>
              Issued January 2023
            </p>
          </div>
        </li>
        <li className={styles.developmentItem}>
          <img src={getImageUrl("development/hat.png")} alt="Hat Icon" />
          <div className={styles.developmentItemText}>
            <h3>Game Using Python</h3>
            <p>
              Issued June 2020
            </p>
          </div>
        </li>
        <li className={styles.developmentItem}>
          <img src={getImageUrl("development/hat.png")} alt="Hat Icon" />
          <div className={styles.developmentItemText}>
            <h3>Internet of Things by Microsoft</h3>
            <p>
              Issued October 2019
            </p>
          </div>
        </li>
        <li className={styles.developmentItem}>
          <img src={getImageUrl("development/hat.png")} alt="Hat Icon" />
          <div className={styles.developmentItemText}>
            <h3>Mock Interviews by ISTE Student's Chapter</h3>
            <p>
              Issued September 2019
            </p>
          </div>
        </li>
        <li className={styles.developmentItem}>
          <img src={getImageUrl("development/hat.png")} alt="Hat Icon" />
          <div className={styles.developmentItemText}>
            <h3>Texas Instruments</h3>
            <p>
              Issued August 2019
            </p>
          </div>
        </li>
        </ul>
      </div>
    </section>
  )
}
