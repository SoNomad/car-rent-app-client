import React from 'react';
import styles from './Contacts.module.scss';
import qr from './qrcode.png';
import social from './social.png';
const Contacts = () => {
  return (
    <div className={styles.contactsWrapper}>
      <h1 className={styles.title}>Адрес и контакты</h1>
      <div className={styles.contactsContainer}>
        <div className={styles.contactsMap}>
          <section className="map">
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23222.263162874176!2d45.68353679309757!3d43.318804040173745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d13abc103637%3A0x8601f7fff1cac51f!2zSW50b2NvZGUgQ29kaW5nIEJvb3RjYW1wIOKAkyDRiNC60L7Qu9CwINC_0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1671410821699!5m2!1sru!2sru"
              width="100%"
              height="594px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
        <div className={styles.contactsInfo}>
          <div className={styles.infoAddres}>
            <span className={styles.titleInfo}>Адрес</span>

            <span className={styles.subtitleInfo}>
              Перекресток Jomtien Second Road и Soi Bun Kanchana, NongPrue, Bang Lamung, Chon Buri.
              <br></br>
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

            <span className={styles.subtitleInfo} style={{ textDecorationLine: 'underline' }}>
              makscarrent@gmail.com
            </span>

            <span className={styles.titleInfo}>Соцсети</span>

            <a
              title="Telegram"
              href="https://telegram.me/inthisreality"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={social}
                style={{
                  width: '150px',
                  height: '40px',
                  marginTop: '6px',
                  marginBottom: '35px',
                }}
                alt=""
              />{' '}
            </a>
            <a
              title="Whatsapp"
              href="https://wa.me/79288995198?text=Здравствуйте,%20аренда%20машин%20САМУИ%20"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={qr}
                style={{ width: '186 px', height: '186 px', marginLeft: '73px' }}
                alt=""
              />{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
