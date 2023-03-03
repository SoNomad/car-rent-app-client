import React from 'react'
import styles from './Section.module.scss'
import Rectangle_7 from './Rectangle_7.png'
import Rectangle_8 from './Rectangle_8.png'
import Rectangle_9 from './Rectangle_9.png'
import Rectangle_10 from './Rectangle_10.png'
import Rectangle_11 from './Rectangle_11.png'
import Rectangle_12 from './Rectangle_12.png'

const Section = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.text}>
            АБСОЛЮТНО НАДЕЖНО, ПРЕДЕЛЬНО <br /> ПРОСТО
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.speedPict}>
            <img
              className={styles.rectangle_7}
              src={Rectangle_7}
              alt="Picture"
            />
          </div>
          <div className={styles.textSpeed}>
            <span className={styles.spanTextSpeed1}>
              НЕОГРАНИЧЕННЫЙ ПРОБЕГ, ПРИ АРЕНДЕ НА 7+ ДНЕЙ
            </span>{' '}
            <span className={styles.spanTextSpeed2}>
              перемещайтесь свободно по всему Таиланду! Нет ограничений пробега
              при аренде автомобиля на 7 дней и более
            </span>
          </div>
        </div>
        <div className={styles.three}>
          <div className={styles.carWithManPict}>
            <img src={Rectangle_8} alt="Picture" />
          </div>
          <div className={styles.textCarWithMan}>
            <span className={styles.spanTextCarWithMan1}>
              БЕСПЛАТНАЯ ДОСТАВКА ПРИ АРЕНДЕ НА 7+ ДНЕЙ
            </span>
            <span className={styles.spanTextCarWithMan2}>
              бесплатная доставка автомобиля к вашему отелю в Паттайе, при
              аренде от 7 дней
            </span>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.four}>
          <div className={styles.carWithParachutePict}>
            <img
              className={styles.rectangle_9}
              src={Rectangle_9}
              alt="Picture"
            />
          </div>
          <div className={styles.TextCarWithParachute}>
            <span className={styles.spanTextCarWithParachute1}>
              ПОЛНАЯ СТРАХОВКА АВТОМОБИЛЯ
            </span>
            <span className={styles.spanTextCarWithParachute2}>
              автомобили MAKS Car Rental имеют страховку для коммерческого
              использования. Включены: Страхование от ущерба перед третьими
              лицами, Страхование при повреждении, Страхование от угон
            </span>
          </div>
        </div>
        <div className={styles.five}>
          <div className={styles.gpsNavigatorPict}>
            <img
              className={styles.rectangle_10}
              src={Rectangle_10}
              alt="Picture"
            />
          </div>
          <div className={styles.textGpsNavigator}>
            <span className={styles.spanGpsNavigator1}>
              GPS НАВИГАТОР БЕСПЛАТНО
            </span>
            <span className={styles.spanGpsNavigator2}>
              предлагаем бесплатно воспользоваться навигатором GARMIN на русском
              языке с простым и понятным интерфейсом
            </span>
          </div>
        </div>
        <div className={styles.six}>
          <div className={styles.babyChairPict}>
            <img
              className={styles.rectangle_11}
              src={Rectangle_11}
              alt="Picture"
            />
          </div>
          <div className={styles.textBabyChair}>
            <span className={styles.spanTextBabyChair1}>
              ДЕТСКОЕ КРЕСЛО БЕСПЛАТНО
            </span>
            <span className={styles.spanTextBabyChair2}>
              детское автокресло - единственное надежное приспособление для
              перевозки ребенка. Родителям предлагаем выбрать кресло, которое
              подойдет вашему ребенку
            </span>
          </div>
        </div>
        <div className={styles.seven}>
          <div className={styles.dollarPict}>
            <img className={styles.rectangle_12} src={Rectangle_12} alt="" />
          </div>
          <div className={styles.textDollar}>
            <span className={styles.spanTextDollar1}>
              МИНИМАЛЬНЫЙ СТРАХОВОЙ ДЕПОЗИТ
            </span>
            <span className={styles.spanTextDollar2}>
              страховой депозит (возвращаемый): 5000 Бат за легковой автомобиль
              и 7000 Бат за 7-ми местный автомобиль, пикап, микроавтобус
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
