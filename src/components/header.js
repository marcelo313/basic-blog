import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        height: `200px`,
        padding: `1.45rem 3rem`,
        backgroundColor: `#3CACAE`, // add somewhere as a constant
        color: `#C8F4F9`, // add somewhere as a constant
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#C8F4F9`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/about">About Me</Link>
          </li>
        <li>
          <Link to="/blog">My Blog</Link>
          </li>
        <li>
        <Link to="/contact-me">Contact Me</Link>
          </li>
      </ul>
    </div>
    <div ></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
