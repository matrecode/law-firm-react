import React from "react";
import styles from "./About.module.css";
import giftIcon from "../../assets/giftBox.svg";

function Card({ icon, altText, title, subtitle, buttonText }) {
  return (
    <div className={styles.cardWrapper}>
      <img src={icon} alt={altText} width={100} className={styles.logo} />
      <p className={styles.rate}>{title}</p>
      <p className={styles.text}>{subtitle}</p>
      <button className={styles.btn}>{buttonText}</button>
    </div>
  );
}

const About = () => {
  const cardData = [
    {
      id: 1,
      title: "98% Success Rate",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      buttonText: "Read More",
      icon: giftIcon,
      altText: "Success Rate",
    },
    {
      id: 2,
      title: "100% Success Rate",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      buttonText: "Read More",
      icon: giftIcon,
      altText: "Success Rate",
    },
    {
      id: 3,
      title: "95% Success Rate",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      buttonText: "Read More",
      icon: giftIcon,
      altText: "Success Rate",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.introWrapper}>
        <div className={styles.introTitle}>
          <h1>Let's Introduce</h1>
          <h1>Ourself</h1>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.introText}>
          <h1>Criminal Lawyer</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        {cardData.map((data) => (
          <Card
            icon={data.icon}
            title={data.title}
            subtitle={data.subtitle}
            key={data.id}
            altText={data.altText}
            buttonText={data.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
