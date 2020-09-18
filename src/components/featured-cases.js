import React from "react"
import caseStyles from "./cases.module.scss"

export default function FeaturedCases({ children }) {
  return (
    <div className={caseStyles.container}>
        <div className={caseStyles.rectangle}></div>
        <div className={caseStyles.wrapper}>
          <h1>Nossos cases</h1>
          <div className={caseStyles.flex}>{children}</div>
        </div>
    </div>
  )
}
