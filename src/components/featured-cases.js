import React from "react"
import caseStyles from "./cases.module.scss"
import { Link } from "gatsby"

export default function FeaturedCases({ children }) {
  return (
    <section className={caseStyles.container}>
      <div className={caseStyles.rectangle}></div>
      <div className={caseStyles.wrapper}>
        <h1>Nossos cases</h1>
        <div className={caseStyles.flex}>{children}</div>
        <div className={caseStyles.buttons}>
          <Link to="/">
            <button className="primary">Todos os cases</button>
          </Link>
          <Link to="/">
            <button className="dark">Projetos no Behance</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
