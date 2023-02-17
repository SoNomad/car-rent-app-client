import Picker from 'emoji-picker-react'
import React, { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { BsEmojiSmileFill } from 'react-icons/bs'
import styles from './ChatInput.module.scss'
const ChatInput = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [msg, setMsg] = useState('')

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleEmojiClick = (event, emoji) => {
    let message = msg
    message += emoji.emoji
    setMsg(message)
  }

  return (
    <div className={styles.container} >
      <div className={styles.button_container}>
        <div className={styles.emoji}>
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
          {showEmojiPicker && (
            <Picker onEmojiClick={handleEmojiClick} id='pick'/>
          )}
        </div>
      </div>
      <form action="" className={styles.input_container}>
        <input
          type="text"
          placeholder="type your message here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  )
}

export default ChatInput
