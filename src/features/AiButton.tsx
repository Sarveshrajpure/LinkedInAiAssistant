import React, { useReducer, useState } from "react"

import { AiPromptModal } from "~components/AiPromptModal"

import aiIcon from "../../assets/AiIcon.svg"

export const AiButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)
  const [inputFocus, setInputFocus] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  document.addEventListener("focusin", (event: any) => {
    if (
      event.target.role === "textbox" &&
      event.target.className.includes("msg-form__contenteditable")
    ) {
      setInputFocus(true)
    }
  })

  document.addEventListener("click", (event: any) => {
    let parentClassName = event.target.parentNode.className

    if (
      event.target.role != "textbox" &&
      !parentClassName.includes("msg-form__contenteditable")
    ) {
      setInputFocus(false)
    }
  })

  return (
    <>
      {inputFocus ? (
        <button
          onClick={() => {
            setOpenModal(true)
          }}
          type="button"
          className="flex flex-row items-center p-2.5 rounded-full transition-all border-none
           shadow-lg hover:shadow-md active:scale-105 bg-slate-50 hover:bg-slate-100 text-slate-800
            hover:text-slate-900">
          <img src={aiIcon} alt="aiIcon" width={"12px"} />
        </button>
      ) : (
        ""
      )}
      <AiPromptModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}
