import * as React from "react"
import * as styles from "./footer.module.css"

import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (

    <footer className={styles.footer}>
        <div className={styles.footerComponent}>
            <p className={styles.poweredBy}>Powered By:</p>
            <a className={styles.footerLink} href="https://www.alacrandigitalservices.com/" target="_blank" rel="noreferrer">
                <StaticImage
                    src="../images/white2.png" alt="Alacran Logo"
                    placeholder="blurred"
                    layout="fixed"
                    height={80}
                    formats={["AUTO", "WEBP", "AVIF"]}
                />
            </a>
        </div>

        <div className={styles.footerComponent}>
            <p>
                <a className={styles.footerLink} href="https://www.alacrandigitalservices.com/"
                    target="_blank" rel="noreferrer">Alacrán Digital Services</a> © {new Date().getFullYear()}
            </p>
        </div>

        <div className={styles.footerComponent}>
            <p>
                Built with <a className={styles.footerLink} href="https://www.gatsbyjs.com">Gatsby</a>
            </p>
        </div>

    </footer>
)

export default Footer