import * as React from "react"
import * as styles from "./footer.module.css"

import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (

    <footer className={styles.footer}>
        <div>
        <p className={styles.poweredBy}>Powered By:</p>
        <a href="https://www.alacrandigitalservices.com/" target="_blank">
            <StaticImage
                src="../images/white2.png" alt="Alacran Logo"
                placeholder="blurred"
                layout="fixed"
                height={80}
                formats={["AUTO", "WEBP", "AVIF"]}
            />
        </a>
        </div>
        
        <div>
        <a href="https://www.alacrandigitalservices.com/" target="_blank">Alacrán Digital Services</a>{` `} © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
        
    </footer>
)

export default Footer