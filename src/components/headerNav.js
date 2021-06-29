import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./headerNav.module.css"

import { IconContext } from "react-icons"

import { FiMail, FiCamera, FiHome, FiShoppingBag, FiBook, FiUser } from 'react-icons/fi'

const activeStyles = {
    background: '#C8F4F9',
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center'
}

const HeaderNav = () => (

    <div className={styles.headerNav}>

        <Link to="/" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "1.5rem" }}>
                <span><FiHome></FiHome></span>
            </IconContext.Provider>
            Home
        </Link>

        <Link to="/contact-me" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "1.5rem" }}>
                <span><FiMail></FiMail></span>
            </IconContext.Provider>
            Message
        </Link>

        <Link to="/blog" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "1.5rem" }}>
                <span><FiBook></FiBook></span>
            </IconContext.Provider>
            Blog
        </Link>

        <Link to="/about" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "1.5rem" }}>
                <span><FiUser></FiUser></span>
            </IconContext.Provider>
            About Me
        </Link>

        {/* 
        
        GALLERY & SHOP ARE FUTURE FEATURES.

        <Link to="/gallery" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "1.5rem" }}>
                <span><FiCamera></FiCamera></span>
            </IconContext.Provider>
            Gallery
        </Link>

        <Link to="/shop" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "1.5rem" }}>
                <span><FiShoppingBag></FiShoppingBag></span>
            </IconContext.Provider>
            Shop
        </Link>
        
        */}
    </div>

)

export default HeaderNav
