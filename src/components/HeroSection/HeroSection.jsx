import React from "react";
import styles from "./HeroSection.module.css";
import heroImg from "../../assets/hero-image.svg";
import { MailOutline } from "@mui/icons-material";
const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>You don’t have to Fight them Alone.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.emailWrapper}>
          <MailOutline className={styles.emailIcon} />
          <input
            type="email"
            placeholder="Enter your email address"
            name=""
            id=""
          />
          <button>Let's Talk</button>
        </div>
      </div>
      <div>
        <img src={heroImg} alt="IGSTUDIO hero image" />
      </div>
    </div>
  );
};

export default HeroSection;
