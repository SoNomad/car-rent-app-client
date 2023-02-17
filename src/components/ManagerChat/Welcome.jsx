import React from 'react'
import styles from './Welcome.module.scss'
import robot from './Logo/robot.gif'

const Welcome = ({ currentUser }) => {
  return (
    <div className={styles.container}>
      <img src={robot} alt="Robot" />
      <h1>
        Welcome, <span>{currentUser.username}</span>
      </h1>
      <h3>Please select a chat to Start Messaging</h3>
    </div>
  )
}

export default Welcome
