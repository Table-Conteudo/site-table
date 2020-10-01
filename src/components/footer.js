import React from "react"
import footerStyles from "./footer.module.scss"
import Logo from "../../content/assets/logoFooter.inline.svg"

function Footer() {
  return (
    <footer>
      <div className={footerStyles.content}>
        <div className={footerStyles.logo}>
          <Logo alt="Logo da Table" />
        </div>
        <div className={footerStyles.links}>Oi</div>
        <div className={footerStyles.social}>Oi</div>
      </div>
    </footer>
  )
}

export default Footer
