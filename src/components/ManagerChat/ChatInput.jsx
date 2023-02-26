import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { BsEmojiSmileFill } from 'react-icons/bs'
import styles from './ChatInput.module.scss'

const ChatInput = ({ handleSendMsg }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [msg, setMsg] = useState('')

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleEmojiClick = (e, emojiObject) => {
    e.preventDefault()
    let message = msg
    message += emojiObject.emoji
    console.log(emojiObject.emoji, 'это имодж')

    setMsg(message)
  }

  const sendChat = (event) => {
    event.preventDefault()
    if (msg.length > 0) {
      handleSendMsg(msg)
      setMsg('')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.button_container}>
        <div className={styles.emoji}>
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
          {showEmojiPicker && (
            <div className={styles.picker}>
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </div>
      <form
        action=""
        className={styles.input_container}
        onSubmit={(e) => {
          sendChat(e)
        }}
      >
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
