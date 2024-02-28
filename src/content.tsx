import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import React from "react"

import { AiButton } from "~features/AiButton"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="z-50 flex fixed top-[71%] right-[39.5%]">
      <AiButton />
    </div>
  )
}

export default PlasmoOverlay
