import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import { BiPowerOff } from 'react-icons/bi'
import styles from './Logout.module.scss'

const Logout = () => {
  const navigate = useNavigate()
  const handleClick = async () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <button className={styles.Button} onClick={handleClick}>
      <BiPowerOff />
    </button>
  )
}

export default Logout
