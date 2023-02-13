import React from "react";
import styles from "./Conditions.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";

const Conditions = () => {
  const conditions = [
    {
      heading: "Что нужно иметь при получении автомобиля?",
      content: "conten1",
    },
    {
      heading:
        "Нужно ли международное водительское удостоверение для аренды автомобиля?",
      content:
        "Для аренды автомобиля в MAKS Car Rental достаточно НВУ (национальное водительское удостоверение). При ДТП они являются действительными для страховой компании, в которой застрахованы наши автомобили. Однако, рекомендуем получить МВУ (международное водительское удостоверение), в связи с участившимися случаями претензий со стороны дорожной полиции Таиланда.",
    },
    { heading: "Как забронировать автомобиль?", content: "content3" },
    {
      heading: "Каков минимальный возраст для аренды автомобиля?",
      content: "conten1",
    },
    {
      heading: "Что нужно иметь при получении автомобиля?",
      content: "conten1",
    },
  ];

  return (
    <div className={styles.conditionsWrapper}>
      <h1 className={styles.title}>Условия аренды</h1>
      <div>
        <Accordion allowZeroExpanded className={styles.conditionsContainer}>
          {conditions.map((item) => (
            <AccordionItem key={item.uuid}>
              <hr className={styles.hr} />
              <AccordionItemHeading className={styles.accordHeding}>
                <AccordionItemButton>{item.heading}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordContent}>
                {item.content}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Conditions;
