import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p><span className={styles.typingAnimation}>Feel free to reach out</span></p>
            </div>

            <div className={styles.content}>
                <img src={getImageUrl("contact/contactUs.png")} 
                alt= "picture sitting with a laptop" 
                className={styles.contactImage}/>

                <div className={styles.parent}>
                 <div className={styles.exp}>
                <p>I'm a Web Developer currently seeking internship opportunities.I specialize in problem solving and web design.<br/>You can connect me on :</p>
                </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email icon"/>
                    <a href="mailto:maheshwarinitya0801@gmail.com">maheshwarinitya0801@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon"/>
                    <a href="https://in.linkedin.com/in/nityamaheshwari0801">linkedin.com/in/nityamaheshwari0801</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github icon"/>
                    <a href="https://github.com/maheshwarinitya08">github.com/maheshwarinitya08</a>
                </li>

            
            </ul>
            </div>
            </div>
        
        
    </footer>
    );
};
export default Contact;