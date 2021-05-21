import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <Link to="/" className={headerStyles.headerTitle}>{siteTitle}</Link>
    <ul>
      <li> <Link to="/about" className={headerStyles.headerLink}>About</Link> </li>
      <li> <Link to="/blog" className={headerStyles.headerLink}>Blog</Link> </li>
      <li> <Link to="/contact-me" className={headerStyles.headerLink}>Let's Connect</Link> </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
