import React from "react";
import styles from "./Contacts.module.scss";
import qr from "./qrcode.png";
import social from "./social.png";
const Contacts = () => {
  return (
    <div className={styles.contactsWrapper}>
      <h1 className={styles.title}>Адрес и контакты</h1>
      <div className={styles.contactsContainer}>
        <div className={styles.contactsMap}></div>
        <div className={styles.contactsInfo}>
          <div className={styles.infoAddres}>
            <span className={styles.titleInfo}>Адрес</span>

            <span className={styles.subtitleInfo}>
              Перекресток Jomtien Second Road и Soi Bun Kanchana, NongPrue, Bang
              Lamung, Chon Buri.<br></br>
              <br /> 20150, Pattaya, Thailand
            </span>

            <span className={styles.titleInfo}>Адрес для такси:</span>

            <span className={styles.subtitleInfo}>Lorem ipsum, house 221B</span>

            <span className={styles.titleInfo}>GPS координаты:</span>

            <span className={styles.subtitleInfo}>12.888422, 100.881819</span>

            <span className={styles.titleInfo}>Время работы:</span>

            <span className={styles.subtitleInfo}>
              Понедельник - Воскресенье, <br /> с 10.00 до 18.00
            </span>
          </div>
          <div className={styles.infoNetwork}>
            <span className={styles.titleInfo}>Телефон</span>

            <span className={styles.subtitleInfo}>+66 (84) 636 7032</span>

            <span className={styles.titleInfo}>Почта</span>

            <span
              className={styles.subtitleInfo}
              style={{ textDecorationLine: "underline" }}
            >
              makscarrent@gmail.com
            </span>

            <span className={styles.titleInfo}>Соцсети</span>

            <img
              src={social}
              style={{
                width: "150px",
                height: "40px",
                marginTop: "6px",
                marginBottom: "35px",
              }}
              alt=""
            />

            <img src={qr} style={{ width: 186, height: 186 }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
