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

  const [iconStates, setIconStates] = useState(
    new Array(conditions.length).fill(false)
  );
  const [activeIconIndex, setActiveIconIndex] = useState(-1);

  const handleClick = (index) => {
    setIconStates((prevState) => {
      const newState = prevState.map((state, i) =>
        i === index ? !state : false
      );
      setActiveIconIndex(index);
      return newState;
    });
  };

  return (
    <div className={styles.conditionsWrapper}>
      <h1 className={styles.title}>Условия аренды</h1>
      <div className={styles.conditionsLayout}>
        <Accordion allowZeroExpanded className={styles.conditionsContainer}>
          {conditions.map((item, index) => (
            <AccordionItem key={item.uuid}>
              <hr className={styles.hr} />
              <AccordionItemHeading
                onClick={() => handleClick(index)}
                className={styles.accordHeading}
                style={{margin:0}}
              >
                <AccordionItemButton
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {item.heading}
                  <ArrowIcon
                    style={{
                      transform:
                        activeIconIndex === index
                          ? iconStates[index]
                            ? "rotate(180deg)"
                            : "none"
                          : "none",
                    }}
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
