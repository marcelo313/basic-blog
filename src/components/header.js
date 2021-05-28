import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <Link to="/" className={headerStyles.headerTitle}>{siteTitle}</Link>
    <div className={headerStyles.headerNav}>
      <Link to="/about" className={headerStyles.headerLink}>About</Link>
      <Link to="/blog" className={headerStyles.headerLink}>Blog</Link>
      <Link to="/contact-me" className={headerStyles.headerLink}>Let's Connect</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
