import React from 'react'

import * as styles from "./socialLinks.module.css"
import { IconContext } from "react-icons"

import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'

const SocialLinks = () => {
    return (
        <div className={styles.socialsContainer}>
            <h1>Socials</h1>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/jmontes530/ " className={styles.linkContainer}>
                Facebook
                <IconContext.Provider value={{ color: "#4267B2", size: "1.5rem" }}>
                    <span style={{ paddingTop: `.5rem` }}><FiFacebook></FiFacebook></span>
                </IconContext.Provider>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jorgealbertoviramontes/" className={styles.linkContainer}>
                LinkedIn
                <IconContext.Provider value={{ color: "#2867B2", size: "1.5rem" }}>
                    <span style={{ paddingTop: `.5rem` }}><FiLinkedin></FiLinkedin></span>
                </IconContext.Provider>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/jvmontes" className={styles.linkContainer}>
                Twitter
                <IconContext.Provider value={{ color: "#1DA1F2", size: "1.5rem" }}>
                    <span style={{ paddingTop: `.5rem` }}><FiTwitter></FiTwitter></span>
                </IconContext.Provider>
            </a>
        </div>
    )
}

export default SocialLinks
