import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.footer} ${styles.footerBox}`}>
      <div className={styles.left}>
        Copyright © 2023 Warendy Inc. All rights reserved.
      </div>
      <div className={styles.center}>Privacy Policy | Terms of Use | Legal</div>
      <div className={styles.right}>Republic of Korea</div>
    </div>
  );
};

export default Footer;
