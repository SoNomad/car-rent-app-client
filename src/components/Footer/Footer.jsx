import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'
import image_samui from './image_samui.png'
import snapchat from './snapchat.png'
import telegram from './telegram.png'
import watsapp from './watsapp.png'

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <hr />
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.samuiPict}>
            <img src={image_samui} alt="Picture" />
          </div>
          <div className={styles.socialMediaPict}>
            <img className={styles.telegram} src={telegram} alt="Picture" />
            <img className={styles.watsapp} src={watsapp} alt="Picture" />
            <img className={styles.snapchat} src={snapchat} alt="Picture" />
          </div>
        </div>
        <div className={styles.container2}>+66 (84) 636 7032</div>
        <div className={styles.container3}>
          <NavLink className={styles.navlink} to="/conditions">Условия аренды</NavLink>
          <NavLink className={styles.navlink} to="/">Акции и скидки</NavLink>
          <NavLink className={styles.navlink} to="/">FAQ</NavLink>
        </div>
        <div className={styles.container4}>
          <NavLink className={styles.navlink} to="/contacts">Адрес и контакты</NavLink>
          <NavLink className={styles.navlink} to="/about">О компании</NavLink>
          <NavLink className={styles.navlink} to="/chat">Онлайн чат для клиентов</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer
