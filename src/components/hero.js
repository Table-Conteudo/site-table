import React, { useEffect } from "react"

function Hero() {
  useEffect(() => {
    const heart = document.createElement("script")
    const TweenMax = document.createElement("script")
    const charming = document.createElement("script")
    const hero = document.createElement("script")

    heart.src = "/hero/js/heart.js"
    heart.async = false
    heart.type = "text/javascript"
    // heart.crossOrigin = "anonymous"

    document.body.appendChild(heart)

    TweenMax.src = "/hero/js/TweenMax.min.js"
    TweenMax.async = false
    TweenMax.type = "text/javascript"
    // TweenMax.crossOrigin = "anonymous"

    document.body.appendChild(TweenMax)

    charming.src = "/hero/js/charming.min.js"
    charming.async = false
    charming.type = "text/javascript"
    // charming.crossOrigin = "anonymous"

    document.body.appendChild(charming)

    hero.src = "/hero/js/hero.js"
    hero.async = true
    hero.type = "text/javascript"
    // hero.crossOrigin = "anonymous"

    document.body.appendChild(hero)

    return () => {
      document.body.removeChild(heart)
      document.body.removeChild(TweenMax)
      document.body.removeChild(charming)
      document.body.removeChild(hero)
    }
    // useScript("/hero/heart.js")
    // useScript("/hero/TweenMax.min.js")
    // useScript("/hero/charming.js")
    // useScript("/hero/hero.js")
  }, [])

  return (
    <div className="js">
      <div className="heroContainer">
        <div id="hero"></div>
        <div className="content">
          <div className="content__item">
            <button className="content__button">Deixe sua curtida</button>
          </div>
          <div className="content__item content__item--details">
            <div className="content__title">
              <img src="/hero/img/logo-min.svg" />
            </div>
          </div>
          <div className="content__item content__item--details">
            <div className="content__inner">
              Fazemos marcas amigas das pessoas
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
