import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import * as styles from "../components/blogPreview.module.css";

const BlogPreview = ({ blogTitle, excerpt, date, slug, avatar }) => (
    <div className={styles.blog}>
        <StaticImage 
            src="../images/gatsby-icon.png" width={80} quality={95}
            formats={["AUTO", "WEBP", "AVIF"]} alt="The Gatsby Logo" 
            style={{ marginBottom: `1.45rem` }}
            />
        <div className={styles.description}>
            <h2 className={styles.title}><Link to={slug}>{blogTitle}</Link></h2>
            <h6>{date}</h6>
            <p className={styles.excerpt}>{excerpt}</p>
            <p><Link to={slug}>Read more...</Link></p>
        </div>
    </div>
)

BlogPreview.propTypes = {
    blogTitle: PropTypes.string,
    excerpt: PropTypes.string
}

BlogPreview.defaultProps = {
    blogTitle: ``,
    excerpt: ``
}

export default BlogPreview
