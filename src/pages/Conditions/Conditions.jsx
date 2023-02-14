import React, { useState } from "react";
import styles from "./Conditions.module.scss";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";

const Conditions = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  const conditions = [
    {
      heading: "Что нужно иметь при получении автомобиля?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nibh ipsum. Maecenas faucibus eros sed magna ultricies, eu suscipit sapien suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget pretium justo. Sed quis leo euismod, consectetur dui eu, iaculis nunc. Quisque at massa a augue aliquet dignissim.",
    },
    {
      heading:
        "Нужно ли международное водительское удостоверение для аренды автомобиля?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nibh ipsum. Maecenas faucibus eros sed magna ultricies, eu suscipit sapien suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget pretium justo. Sed quis leo euismod, consectetur dui eu, iaculis nunc. Quisque at massa a augue aliquet dignissim.",
    },
    {
      heading: "Как забронировать автомобиль?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nibh ipsum. Maecenas faucibus eros sed magna ultricies, eu suscipit sapien suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget pretium justo. Sed quis leo euismod, consectetur dui eu, iaculis nunc. Quisque at massa a augue aliquet dignissim.",
    },
    {
      heading: "Каков минимальный возраст для аренды автомобиля?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nibh ipsum. Maecenas faucibus eros sed magna ultricies, eu suscipit sapien suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget pretium justo. Sed quis leo euismod, consectetur dui eu, iaculis nunc. Quisque at massa a augue aliquet dignissim.",
    },
    {
      heading: "Что нужно иметь при получении автомобиля?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nibh ipsum. Maecenas faucibus eros sed magna ultricies, eu suscipit sapien suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget pretium justo. Sed quis leo euismod, consectetur dui eu, iaculis nunc. Quisque at massa a augue aliquet dignissim.",
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
              <AccordionItemHeading onClick={handleClick} className={styles.accordHeading}>
                <AccordionItemButton
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {item.heading}
                  <ArrowIcon
                    style={{ transform: isRotated ? "rotate(180deg)" : "none" }}
                  />
                </AccordionItemButton>
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
