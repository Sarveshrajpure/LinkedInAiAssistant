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
    <div className="h-full w-full bg-red-200">
      <div className="z-50 flex fixed top-[79%] right-[39.5%]">
        <AiButton />
      </div>
    </div>
  )
}

export default PlasmoOverlay
