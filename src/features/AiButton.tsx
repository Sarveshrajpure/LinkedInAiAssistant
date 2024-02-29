import React, { useReducer, useState } from "react"

import { AiPromptModal } from "~components/AiPromptModal"

import aiIcon from "../../assets/AiIcon.svg"

export const AiButton = () => {
  const [inputFocus, setInputFocus] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)

  document.addEventListener("focusin", (event: Event) => {
    const target = event.target as HTMLElement
    if (
      target.role === "textbox" &&
      target.className.includes("msg-form__contenteditable")
    ) {
      setInputFocus(true)
    }
  })

  document.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement

    const parentClassName = (target.parentNode as HTMLElement).className

    if (
      target.role != "textbox" &&
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
