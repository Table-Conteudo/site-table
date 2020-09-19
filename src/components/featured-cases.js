import React from "react"
import caseStyles from "./cases.module.scss"
import { motion } from "framer-motion"

export default function FeaturedCases({ children }) {
  return (
    <div className={caseStyles.container}>
      <div className={caseStyles.rectangle}></div>
      <div className={caseStyles.wrapper}>
        <h1>Nossos cases</h1>
        <motion.div
          className={caseStyles.flex}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
