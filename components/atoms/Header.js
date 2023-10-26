import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${styles.header} ${styles.fixed}`}>
      <div className={styles.headerTop}>
        <div className={styles.topInner}>
          <ul className={styles.topList}>
            <Link href="/my" className={styles.topItem}>
              마이페이지
            </Link>
            <Link href="/my" className={styles.topItem}>
              나의컬렉션
            </Link>
            <Link href="/sign-in" className={styles.topItem}>
              로그인
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.headerMain}>
        <div className={styles.mainInner}>
          <Link href="/" className={styles.logo}>
            <Image
              className={styles.icon}
              src="../images/Logo.svg"
              alt="Logo"
              width={115}
              height={40}
            ></Image>
          </Link>
          <div className={styles.gnbArea}>
            <ul className={styles.gnbList}>
              <li className={styles.gnbItem}>
                <Link href="/" className={styles.gnbHome}>
                  HOME
                </Link>
              </li>
              <li className={styles.gnbItem}>
                <Link href="/">WINEBAR</Link>
              </li>
              <li className={styles.gnbItem}>
                <Link href="/">CHAT</Link>
              </li>
              <li>
                <Link href="/">
                  <FontAwesomeIcon icon={faSearch} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.portalTarget}>
        <ul className={`${styles.tabList} ${styles.inline}`}>
          <li className={styles.tabItem}>
            <Link href="/">MY STYLE</Link>
          </li>
          <li className={styles.tabItem}>
            <Link href="/">추천</Link>
          </li>
          <li className={styles.tabItem}>
            <Link href="/">랭킹</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
