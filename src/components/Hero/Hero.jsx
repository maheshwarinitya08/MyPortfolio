import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container} id="hero">
            <div className={styles.content}>
                <h1 className={styles.title}>Hi , I'm <span> Nitya Maheshwari</span></h1>
                <p className={styles.description}>
                A Web Developer with a great eye for Design. I enjoy Crafting Unique Web Experiences & Building Software Solutions.
                </p>
                <div className={styles.button}>
                <a href="mailto:maheshwarinitya0801@gmail.com" className={styles.contactBtn}> Contact</a>
                <a href="https://drive.google.com/drive/folders/1WDFOv8ZGyzfAD6mBgiDl_bpatKSCO2IH?usp=sharing" className={styles.contactBtn} target="_blank" > Resume</a>
                </div>
                
                </div>
                <img src={getImageUrl("hero/NityaPassportPhoto1.png")} alt="image of me" className={styles.heroImg} />
                <div className={styles.topBlur}/>
                <div className={styles.bottomBlur}/>
        </section>
    );
};
export default Hero;