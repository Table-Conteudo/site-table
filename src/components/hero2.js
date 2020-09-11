import React from "react"

function Hero2() {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        margin: "3rem auto",
        justifyContent: "space-around",
      }}
    >
      <div className="heroDesktop">
        <iframe
          src="/hero2/heroDesktop.html"
          title="dummy"
          style={{ width: "100vw", height: "600px", border: "none" }}
          frameBorder="none"
        ></iframe>
      </div>
      <div className="heroMobile">
        <iframe
          src="/hero2/heroMobile.html"
          title="dummy"
          style={{ width: "100vw", height: "600px", border: "none" }}
          frameBorder="none"
        ></iframe>
      </div>
    </div>
  )
}

export default Hero2
