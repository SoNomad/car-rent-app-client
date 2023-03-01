import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import styles from './ManagerChat.module.scss'
import { useNavigate } from 'react-router-dom'
import { allUserRoute, host } from '../../utils/APIRoutes'
import ContactsChat from './ContactsChat'
import Welcome from './Welcome'
import ChatContainer from './ChatContainer'
import { io } from 'socket.io-client'

const ManagerChat = ({GetIsTrueFalse}) => {
  const socket = useRef()
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
  const [currentUser, setCurrentUser] = useState(undefined)
  const [currentChat, setCurrentChat] = useState(undefined)
  const [isLoaded, setIsLoaded] = useState(false)

  GetIsTrueFalse()

  useEffect(() => {
    const getUser = async () => {
      if (!localStorage.getItem('chat-app-user')) {
        navigate('/login')
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem('chat-app-user')))
        setIsLoaded(true)
      }
    }

    getUser()
  }, [])

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host)
      socket.current.emit('add-user', currentUser._id)
    }
  }, [currentUser])

  useEffect(() => {
    const getContacts = async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUserRoute}/${currentUser._id}`)
          setContacts(data.data)
        } else {
          navigate('/setAvatar')
        }
      }
    }
    getContacts()
  }, [currentUser])

  const handleChatChange = (chat) => {
    setCurrentChat(chat)
  }

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <ContactsChat
          contacts={contacts}
          currentUser={currentUser}
          changeChat={handleChatChange}
        />

        {isLoaded && currentChat === undefined ? (
          <Welcome currentUser={currentUser} />
        ) : (
          <ChatContainer
            currentChat={currentChat}
            currentUser={currentUser}
            socket={socket}
          />
        )}
      </div>
    </div>
  )
}

export default ManagerChat
