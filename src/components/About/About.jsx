import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} 
                alt= "picture sitting with a laptop" 
                className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
            <div className={styles.aboutItemText}>
                <h3>Education</h3>
                <p>I am Nitya Maheshwari, currently a 2nd-year BTech student pursuing Computer Science Engineering at Acropolis Institute of Technology and Research. I have completed my schooling with outstanding academic achievements: 95% in Class 10th and 93.8% in Class 12th from Chameli Devi Public School.</p>
            </div>
            </li>
            
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
            <div className={styles.aboutItemText}>
                <h3>Technical Skills</h3>
                <p>I possess a solid understanding of Data Structures and Algorithms in C++ and am skilled in web development. Additionally, I have foundational knowledge of Python, Java, and MySQL.</p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="ui icon"/>
            <div className={styles.aboutItemText}>
                <h3>Professional Traits.</h3>
                <p>Known for my strong communication skills and collaborative spirit, I am eager to contribute innovative solutions and learn from experienced professionals</p>
            </div>
            </li></ul>
            </div>
        </section>
    );
};
export default About;