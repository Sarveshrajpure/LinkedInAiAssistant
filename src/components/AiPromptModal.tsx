import React, { useState, type MouseEventHandler } from "react"

import insertIcon from "../../assets/insertVector.svg"
import regenerateIcon from "../../assets/RegenerateVector.svg"
import generateArrow from "../../assets/Vector.svg"

interface ParentProps {
  openModal: boolean
  setOpenModal: (openModal: boolean) => void
}

export const AiPromptModal = ({ openModal, setOpenModal }: ParentProps) => {
  const [prompt, setPrompt] = useState<string>("")
  const [promptError, setPromptError] = useState<string>("")
  const [aiResponse, setAiResponse] = useState<boolean>(false)
  const dummyAiResponse = `Thank you for the opportunity! If you have any more
  questions or if there's anything else I can help you with,
  feel free to ask.`

  const handleGenerate = () => {
    // AI API can be called here

    // validate prompt input field

    if (prompt.length <= 0) {
      setPromptError("Please provide a prompt!")
    } else {
      setPromptError("")
      setPrompt("")
      setAiResponse(true)
    }
  }

  const insertResponse = () => {
    let wrapperElement1 = document.querySelector(
      `.msg-form__msg-content-container`
    )

    if (wrapperElement1 !== null) {
      wrapperElement1.classList.add(
        "msg-form__msg-content-container--is-active"
      )
    }

    let placeholderElement = document.querySelector(".msg-form__placeholder")
    if (placeholderElement !== null) {
      placeholderElement.classList.remove("msg-form__placeholder")
    }

    let element = document.querySelector(".msg-form__contenteditable")
    element.setAttribute("data-artdeco-is-focused", "true")
    element.firstChild.textContent = dummyAiResponse

    setOpenModal(false)
    setAiResponse(false)
  }

  console.log(prompt)

  return (
    <>
      {openModal && (
        <div
          className="modalContainer fixed top-0 left-0 h-[100vh] w-[100vw] bg-[#0D0D1233] 
          flex justify-center items-center"
          id="modalContainer"
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            const target = event.target as HTMLDivElement
            if (target?.id === "modalContainer") {
              setOpenModal(false)
              setAiResponse(false)
              setPromptError("")
            }
          }}>
          <div className=" bg-[#F9FAFB] rounded-lg p-4 w-[40rem]">
            {/* Display for ai response */}
            {aiResponse && (
              <div className="aiResponseDisplay">
                <div className="promptDisplayWrapper flex justify-end pb-4 ">
                  <div className="text-[#666D80] text-lg text-semibold px-4 py-4 bg-[#DFE1E7] rounded-md">
                    Reply thanking for the opportunity
                  </div>
                </div>
                <div className="aiResponseDisplayWrapper flex justify-start pb-4">
                  <div className="text-[#666D80] text-lg text-semibold px-4 py-4 bg-[#DBEAFE] rounded-md w-[32rem]">
                    {dummyAiResponse}
                  </div>
                </div>
              </div>
            )}
            {/* Prompt for AI Form */}
            <div className="inputFieldWrapper mb-4">
              <input
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-xl rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                placeholder="Your prompt"
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value)
                }}
              />

              <p className="pt-1 text-red-600 text-[10px]">
                {promptError && promptError}
              </p>
            </div>
            <div className="modalBtnsWrapper">
              {!aiResponse ? (
                <div className="flex justify-end">
                  <div
                    className="generateBtnWrapper bg-[#3B82F6] w-max px-5 py-2 
                cursor-pointer flex items-center rounded-md"
                    onClick={handleGenerate}>
                    <div>
                      <img
                        src={generateArrow}
                        alt="submitBtnIcon"
                        width={"12px"}
                      />
                    </div>
                    <div className="text-white text-xl font-semibold ml-2 ">
                      Generate
                    </div>
                  </div>
                </div>
              ) : (
                <div className="insertRegerateBtnWrapper flex justify-end">
                  <div
                    className="insertBtnWrapper bg-white w-max px-5 py-2 cursor-pointer
                     flex items-center rounded-md border boder-[#666D80] mr-4"
                    onClick={insertResponse}>
                    <div>
                      <img
                        src={insertIcon}
                        alt="insertBtnIcon"
                        width={"12px"}
                      />
                    </div>
                    <div className="text-[#666D80] text-xl font-semibold ml-2 ">
                      Insert
                    </div>
                  </div>
                  <div
                    className="regenerateBtnWrapper bg-[#3B82F6] w-max px-5 py-2
                   cursor-pointer flex items-center rounded-md">
                    <div>
                      <img
                        src={regenerateIcon}
                        alt="regenerateBtnIcon"
                        width={"12px"}
                      />
                    </div>
                    <div className="text-white text-xl font-semibold ml-2 ">
                      Regenarate
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
