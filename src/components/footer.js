import React from "react"
import footerStyles from "./footer.module.scss"
import Logo from "../../content/assets/logoFooter.inline.svg"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <footer data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease">
      <div className={footerStyles.content}>
        <div className={footerStyles.logo}>
          <Logo alt="Logo da Table" />
        </div>
        <div className={footerStyles.links}>
          <ul>
            <li>
              <Link to="/">Por que mesa?</Link>
            </li>
            <li>
              <Link to="/">Cases</Link>
            </li>
            <li>
              <Link to="/">Table Edu</Link>
            </li>
          </ul>
        </div>
        <div className={footerStyles.social}>
          <FontAwesomeIcon icon={["fab", "instagram"]} className="fa-lg" />
          <FontAwesomeIcon icon={["fab", "facebook-square"]} className="fa-lg" />
          <FontAwesomeIcon icon={["fab", "behance-square"]} className="fa-lg" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
