import React, { useRef, useState } from "react"
import { useMeasure } from "../utils/use-measure"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Pager } from "./pager"
import ContentBox from "./content-box"
import ContentTabs from "../../site/copy/content_tabs.yml"

const TabItem = styled(motion.button)`
  white-space: nowrap;
  -webkit-appearance: none;
  box-sizing: border-box;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  text-decoration: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 0.25rem 0.5rem;
  font-family: "Lekton", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
  text-overflow: ellipsis;
  line-height: 1.5;
  border: 2px solid ${p => (p.isActive ? "rgb(249, 191, 58)" : "rgb(196, 196, 196)")};
  margin-right: 1rem;
  overflow: hidden;
`

const Slider = styled(motion.div)`
  height: 4px;
  width: 4px;
  bottom: 6px;
  margin-left: 2px;
  position: absolute;
  background: rgba(249, 191, 58, 1);
`;

const tabs = [ContentTabs.tab1.title, "Motion", "Vídeo", "Filtro", "Fotografia", "Site/Banner", "E-mail MKT", "E-books/Infográficos"]

function Tabs() {
  const [value, setValue] = useState(1)
  const childRefs = useRef(new Map())
  const tabListRef = useRef()
  const [slider, setSlider] = useState({ left: 0, right: 0 })
  const { bounds, ref } = useMeasure()

  // measure our elements
  React.useEffect(() => {
    const target = childRefs.current.get(value)
    const container = tabListRef.current
    if (target) {
      const cRect = container.getBoundingClientRect()

      // when container is `display: none`, width === 0.
      // ignore this case
      if (cRect.width === 0) {
        return
      }

      const tRect = target.getBoundingClientRect()
      const left = tRect.left - cRect.left
      const right = cRect.right - tRect.right

      setSlider({
        hasValue: true,
        left: left + 8,
        right: right + 8,
      })
    }
  }, [value, bounds])

  return (
    <div>
      <div className="tabs" ref={ref}>
        <div className="list" ref={tabListRef}>
          {tabs.map((tab, i) => (
            <TabItem
              key={tab}
              isActive={i === value}
              whileHover={{ backgroundColor: "rgba(249, 191, 58, 1)" }}
              transition={{ duration: 0.3 }}
              whileTap={{ backgroundColor: "rgba(249, 191, 58, 1)" }}
              ref={el => childRefs.current.set(i, el)}
              onClick={() => setValue(i)}
            >
              {tab}
            </TabItem>
          ))}
          {slider.hasValue && (
            <Slider id="slider"
              positionTransition={{
                bounceDamping: 3,
              }}
              initial={false}
              style={{
                left: slider.left,
                right: slider.right,
              }}
            />
          )}
        </div>
      </div>
      <Pager value={value}>
        <div
          key="{tab}"
        >
          <ContentBox
            title={ContentTabs.tab1.title}
            content={ContentTabs.tab1.text}
          />
        </div>
        <div
          key="{tab}"
        >
          <ContentBox
            title="Feed"
            content="Ideal overcome free burying grandeur aversion. Dead morality
                self right superiority passion virtues hope society play of
                snare grandeur. Good oneself burying law good ultimate burying.
                Play justice snare holiest noble sea reason marvelous right."
          />
        </div>
      </Pager>
    </div>
  )
}

export default Tabs
