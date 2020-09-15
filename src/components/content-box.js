import React from "react"
import contentBoxStyles from "./content-box.module.scss"

function ContentBox(props) {
  return (
    <div className={contentBoxStyles.box}>
      <div className={contentBoxStyles.image}></div>
      <div className={contentBoxStyles.body}>
        <h2>
          <span>#</span>
          {props.title}
        </h2>
        <p>{props.content}</p>

        <div className={contentBoxStyles.footer}>
          <div className={contentBoxStyles.cases}>
            <h6>Veja nos cases</h6>
            <div className={contentBoxStyles.line}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBox
