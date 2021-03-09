import * as React from "react"
import PropTypes from "prop-types"

const BlogPreview = ({ blogTitle, excerpt }) => (
    <div>
        <h3>{blogTitle}</h3>
        <p>{excerpt}</p>
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
