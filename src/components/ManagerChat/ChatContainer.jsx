import React from 'react'
import styles from './ChatContainer.module.scss'
import ChatInput from './ChatInput'
import Logout from './Logout'
import Messages from './Messages'

const ChatContainer = ({ currentChat }) => {
  const handleSendMsg = async (msg) => {}

  return (
    <>
      {currentChat && (
        <div className={styles.container}>
          <div className={styles.chat_header}>
            <div className={styles.user_details}>
              <div className={styles.avatar}>
                <img
                  src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                  alt="avatar"
                />
              </div>
              <div className={styles.username}>
                <h3>{currentChat.username}</h3>
              </div>
            </div>
            <Logout />
          </div>

          <Messages />
          <ChatInput handleSendMsg={handleSendMsg} />
        </div>
      )}
    </>
  )
}

export default ChatContainer
