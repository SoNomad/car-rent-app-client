import React from "react";
import styles from "./AboutUs.module.scss";
import carRental from "./carRental.png";

const AboutUs = () => {
  return (
    <div className={styles.aboutWrapper}>
      <h1 className={styles.title}>О компании</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <span className={styles.aboutHeaderText}>
            <b>АРЕНДА АВТОМОБИЛЕЙ НА САМУИИ</b> <br /> <br />
            Возвращаясь из путешествия, туристы везут на родину и милые
            безделушки, напоминающие об отпуске, и эксклюзивные подарки родным и
            любимым людям, символизирующие страну, выбранную для отпуска.
            <br />
            <br />
            Не являются исключением и туристы, отдыхавшие в Паттайе. Таиланд –
            удивительная страна с многовековой историей и самобытной культурой.
            Покупая сувениры в Паттайе, отдыхающие стремятся увезти с собой
            частицу этого удивительного мира, чтобы сохранить воспоминания об
            отдыхе на долгие годы
          </span>
        </div>
        <img className={styles.logoAbout} src={carRental} alt="" />

        <div className={styles.centerText}>
          <div style={{}}>
            <h1>10</h1>
            <span>работников</span>
          </div>
          <div>
            <h1>{">"}100</h1>
            <span>автомобилей в парке</span>
          </div>
          <div>
            <h1>15000</h1>
            <span>довольных клиентов</span>
          </div>
        </div>
        <div className={styles.footerText}>
          <b className={styles.b}>
            ПРЕИМУЩЕСТВА АРЕНДЫ АВТО В SAMUI RENTAL SERVICE
          </b>
          <div className={styles.footerContainer}>
            <div className={styles.columnFooter}>
              1.Русскоговорящий персонал <br />
              2.Стоимость аренды ниже чем у международных компаний <br />
              3.Минимальная величина залога при прокате машины и его возврат в
              момент сдачи автомобиля
            </div>
            <div className={styles.columnFooter}>
              1.Все наши автомобили застрахованы в лучшей страховой компании
              Таиланда 2.При аренде автомобиля мы не требуем кредитной карты, но
              этот вариант оплаты тоже возможен <br />
              3.Мы бесплатно предоставляем русифицированный навигатор с картой
              Таиланда и детское сидение
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
