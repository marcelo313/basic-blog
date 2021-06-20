import * as React from "react"
import { Link } from "gatsby"
import * as headerNavStyles from "./headerNav.module.css"

import { IconContext } from "react-icons"

import { FiMail, FiCamera, FiHome, FiShoppingBag, FiBook, FiUser } from 'react-icons/fi'

const HeaderNav = () => (

    <div className={headerNavStyles.headerNav}>

        <div className={headerNavStyles.headerLinkContainer}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "2.5rem" }}>
                <span className={headerNavStyles.headerLinkIcon}><FiHome></FiHome></span>
            </IconContext.Provider>
            <Link to="/" className={headerNavStyles.headerLink}>Home</Link>
        </div>

        <div className={headerNavStyles.headerLinkContainer}>
            <IconContext.Provider value={{ color: "#ADD8E6", size: "2.5rem" }}>
                <span className={headerNavStyles.headerLinkIcon}><FiMail></FiMail></span>
            </IconContext.Provider>

            <Link to="/contact-me" className={headerNavStyles.headerLink}>Send Message</Link>
        </div>

        
        {/* 
        
        GALLERY & SHOP ARE FUTURE FEATURES.
        
        <div className={headerNavStyles.headerLinkContainer}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "2.5rem" }}>
                <span className={headerNavStyles.headerLinkIcon}><FiCamera></FiCamera></span>
            </IconContext.Provider>
            <Link to="/" className={headerNavStyles.headerLink}>Gallery</Link>
        </div>

        <div className={headerNavStyles.headerLinkContainer}>
            <IconContext.Provider value={{ color: "#56C6C6", size: "2.5rem" }}>
                <span className={headerNavStyles.headerLinkIcon}><FiShoppingBag></FiShoppingBag></span>
            </IconContext.Provider>
            <Link to="/" className={headerNavStyles.headerLink}>Shop</Link>
        </div> 
        
        */}

        <div className={headerNavStyles.headerLinkContainer}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "2.5rem" }}>
                <span className={headerNavStyles.headerLinkIcon}><FiBook></FiBook></span>
            </IconContext.Provider>
            <Link to="/blog" className={headerNavStyles.headerLink}>Blog</Link>
        </div>

        <div className={headerNavStyles.headerLinkContainer}>
            <IconContext.Provider value={{ color: "#ADD8E6", size: "2.5rem" }}>
                <span className={headerNavStyles.headerLinkIcon}><FiUser></FiUser></span>
            </IconContext.Provider>
            <Link to="/about" className={headerNavStyles.headerLink}>About Me</Link>
        </div>
    </div>

)

export default HeaderNav
