import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 SoftLution. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/assets/images/1.png" width={15} height={15} className={styles.icon} alt="Facebook Account" />
        <Image src="/assets/images/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/assets/images/3.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/assets/images/4.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;