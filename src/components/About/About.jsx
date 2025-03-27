import React from "react";

import styles from "./About.module.css";
import AboutImage from "/assets/about/about.jpeg";
import ServerImage from "/assets/about/serverIcon.png";

export const About = () => {
    return (
        <>
            <section className={styles.container} id="about">
                <h2 className={styles.title}>About</h2>
                <div className={styles.content}>
                    <img className={styles.aboutImage} src={AboutImage} alt="about-image" />
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src={ServerImage} alt="server" />
                            <div className={styles.aboutItemText}>
                                <h3>Fullstack developer</h3>
                                <p>Hello, I am a fullstack developer, heavily on the backend side. I have a good amount of experience, although not professional, but I can work with the lastest technologies and apply the modern coding standards.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}