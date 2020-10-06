import React from "react"
import footerStyles from "./footer.module.scss"
import Logo from "../../content/assets/logoFooter.inline.svg"

function Footer() {
  return (
    <footer data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease">
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
