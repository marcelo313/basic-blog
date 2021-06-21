
import React from 'react'
import * as styles from "./homeHeader.module.css"
import { StaticImage } from "gatsby-plugin-image"

const homeHeader = () => {
    return (
        <div className={styles.homeHeaderContainer}>
            <StaticImage
                src="../images/jorge-headshot.png" alt="Headshot of Jorge"
                placeholder="blurred"
                layout="fixed"
                width={300}
                formats={["AUTO", "WEBP", "AVIF"]}
                style={{
                    marginBottom: `1.45rem`,
                    border: `groove black`
                }}
            />

            <div className={styles.homeHeaderText}>
                <h1>Hi, my name is</h1>
                <h1>Jorge Viramontes.</h1>
                <h1>This is my story.</h1>
            </div>
        </div>
    )
}

export default homeHeader
