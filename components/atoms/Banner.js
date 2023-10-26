import Image from "next/image";
import styles from "./Banner.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const SlideBanner = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={4000}
        infiniteLoop={true}
      >
        <Image
          src="/images/banner.jpg"
          alt="banner1"
          width={1920}
          height={480}
        ></Image>
        <Image
          src="/images/banner2.jpg"
          alt="banner2"
          width={1920}
          height={480}
        ></Image>
      </Carousel>
    </>
  );
};

export const MainBanner = () => {
  return (
    <>
      <div className={styles.bannerItem}>
        <p className={styles.bannerTitle}>여행가는 날</p>
      </div>
      <div className={styles.bannerItem}>
        <p className={styles.bannerTitle}>파티하는 날</p>
      </div>
      <div className={styles.bannerItem}>
        <p className={styles.bannerTitle}>분위기 있는 날</p>
      </div>
      <div className={styles.bannerItem}>
        <p className={styles.bannerTitle}>비 오는 날</p>
      </div>
      <div className={styles.bannerItem}>
        <p className={styles.bannerTitle}>우울한 날</p>
      </div>
      <div className={styles.bannerItem}>
        <p className={styles.bannerTitle}>취하고 싶은 날</p>
      </div>
    </>
  );
};

export const LovedBanner = () => {
  return (
    <>
      <div className={styles.bannerItem}>
        <Image src="/images/wine.svg" alt="lovedWine" width={44} height={90} />
      </div>
    </>
  );
};

export const SingleBanner = () => {
  return (
    <>
      <div className={styles.singleBanner}>
        <Image
          src="/images/banner.jpg"
          alt="banner1"
          width={1920}
          height={480}
          className={styles.single}
        ></Image>
      </div>
    </>
  );
};
