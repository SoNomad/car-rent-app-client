import React, { useEffect, useState } from 'react'
import styles from './ContactsChat.module.scss'
import CarBrand from './Logo/CarBrand.png'

const ContactsChat = ({ contacts, currentUser, changeChat }) => {
  const [currentUserName, setCurrentUserName] = useState(undefined)
  const [currentUserImage, setCurrentUserImage] = useState(undefined)
  const [currentSelected, setCurrentSelected] = useState(undefined)

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage)
      setCurrentUserName(currentUser.username)
    }
  }, [currentUser])

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index)
    changeChat(contact)
  }

  return (
    <>
      {currentUserImage && currentUserName && (
        <div className={styles.container}>
          <div className={styles.brand}>
            <img src={CarBrand} alt="logotip" />
            <h3>samui</h3>
          </div>
          <div className={styles.contacts}>
            {contacts.map((contact, index) => {
              return (
                <div
                  className={
                    index === currentSelected ? styles.selected : styles.contact
                  }
                  key={index}
                  onClick={() => {
                    changeCurrentChat(index, contact)
                  }}
                >
                  <div className={styles.avatar}>
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className={styles.username}>
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.current_user}>
            <div className={styles.avatar}>
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className={styles.username}>
              <h3>{currentUserName}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactsChat
