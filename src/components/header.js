import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

/**
 * 
 * colors!
 * electric blue - #7df9ff
 * pastel blue - #aec6cf
 * dark nude - #774921
 * dark off white - #828282
 * hair cream blue - #B5CEC8
 * light blue - #add8e6
 * pastel blue - dark mono compliment - #38555F
 * pastel blue - medium dark - #5B8899
 * pastel blue - light mono compliment - #749DAD
 * baby blue - #D4F1F4
 * dusty rose - #DCAE96
 * rose quarts - #F7CAC9
 * silver - #c0c0c0 
 * off white - #f5f5f5
 * teal - #008080
 * burnt orange - #B76900
 * dark mint green - #267055
 */
const Header = ({ siteTitle }) => (
  // <header class="bg-purple-500 mb-4">
  <header class="mb-4">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        color: `#38555F`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ 
        margin: 0,
         }}>
        <Link
          to="/"
          style={{
            color: `#38555F`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <ul class="pb-4">
        <li>
          <Link to="/about"
          style={{
            float: "right",
            display: "inline-block",
            textAlign: "center",
            padding: "14px 16px"
          }}>About Me</Link>
          </li>
        <li>
          <Link to="/blog"
          style={{
            float: "right",
            display: "inline-block",
            textAlign: "center",
            padding: "14px 16px"
          }}>My Blog</Link>
          </li>
        <li>
        <Link to="/contact-me"
        style={{
          float: "right",
          display: "inline-block",
          textAlign: "center",
          padding: "14px 16px"
        }}>Contact Me</Link>
          </li>
        <li>
        <Link to="/meditation"
        style={{
          float: "right",
          display: "inline-block",
          textAlign: "center",
          padding: "14px 16px"
        }}>Meditate</Link>
          </li>
      </ul>
    </div>
    <div style={{
      backgroundColor: `#aec6cf`,
      margin: `0 auto`,
      maxWidth: 960,
      height: `8px`
    }}></div>
      
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
