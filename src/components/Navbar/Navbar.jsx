import React from "react";
import styles from "./Navbar.module.css";
import companyLogo from "../../assets/logo.svg";
function Logo({ logo, altText }) {
  return (
    <>
      <div className={styles.logoWrapper}>
        <img src={logo} alt={altText} width={32} />
        <h4>IGSTUDIO</h4>
      </div>
    </>
  );
}

function Tabs() {
  const menuArr = ["Home", "Attorneys", "Practice Areas", "About Us"];
  return (
    <>
      <ul className={styles.tabsWrapper}>
        {menuArr.map((tab) => (
          <li key={tab}>{tab}</li>
        ))}
      </ul>
    </>
  );
}

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Logo logo={companyLogo} altText="IGSTUDIO" />
      <Tabs />
      <button className={styles.btn}>Contact Now</button>
    </div>
  );
};

export default Navbar;
