import React, { useState } from "react";

import styles from "./Navbar.module.css"
import MenuIcon from "/assets/nav/menuIcon.png";
import CloseIcon from "/assets/nav/closeIcon.png";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portofolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                     src={ 
                        menuOpen 
                        ? CloseIcon
                        : MenuIcon   
                    } 
                     alt="Menu image"
                     onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}