import React, { useReducer, useState } from "react"

import aiIcon from "../../assets/AiIcon.svg"

export const AiButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)
  const [inputFocus, setInputFocus] = useState(false)

  document.addEventListener("focusin", (event: any) => {
    console.log("in listener")
    if (
      event.target.role === "textbox" &&
      event.target.className.includes("msg-form__contenteditable")
    ) {
      console.log("in listener 2")
      setInputFocus(true)
    }
  })

  document.addEventListener("focusout", (event: any) => {
    console.log("in listener")
    if (
      event.target.role === "textbox" &&
      event.target.className.includes("msg-form__contenteditable")
    ) {
      console.log("in listener 2")
      setInputFocus(false)
    }
  })

  return (
    <>
      {inputFocus ? (
        <button
          onClick={() => increase()}
          type="button"
          className="flex flex-row items-center p-2.5 rounded-full transition-all border-none
    shadow-lg hover:shadow-md
    active:scale-105 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900  ">
          <img src={aiIcon} alt="aiIcon" width={"15px"} />
        </button>
      ) : (
        ""
      )}
    </>
  )
}
