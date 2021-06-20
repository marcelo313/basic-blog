import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"

import HeaderNav from "./headerNav"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <Link to="/" className={headerStyles.headerTitle}>{siteTitle}</Link>
    <HeaderNav></HeaderNav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
