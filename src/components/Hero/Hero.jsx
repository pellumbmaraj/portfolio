import React from "react";

import styles from "./Hero.module.css";
import HeroIcon from "/assets/hero/hero.png";

export const Hero = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Hello, My name is Pellumb Maraj</h1>
                    <p className={styles.description}>
                        I am a Computer Engineer student, graduated from Istanbul Technical University (ITU). I am a very capable person, 
                        with vast knowledge in things like Data Structres, Coding Standards, etc., which are essentail to be good in my 
                        field. During my studies in ITU, I have gained a lot of abilities, in which I am mostly specialized in Fullstack 
                        Development, like Web App development, Software Development, ect.
                    </p>
                    <a className={styles.contactBtn} href="mailto:pumemaraj@gmail.com">Contact Me</a>
                </div>
                <img className={styles.heroImg} src={HeroIcon} alt="image"/>
                <div className={styles.topBlur}></div>
                <div className={styles.bottomBlur}></div>
            </section>
        </>
    );
}