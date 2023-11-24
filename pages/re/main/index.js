import { useState, useEffect } from "react";
import styles from "./index.module.css";
import {
  SlideBanner,
  MainBanner,
  LovedBanner,
  SingleBanner,
} from "../../components/atoms/Banner";
import ProductItem from "../../components/atoms/ProductItem";
import { MoreBtn } from "../../components/atoms/Btn";
import { getWineList } from "../../helpers/api/item";

const Main = () => {
  const [showMore, setShowMore] = useState(false);
  const [wineList, setWineList] = useState([]);

  const clickedShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    getWineList()
      .then((response) => {
        setWineList(response.data);
      })
      .catch((error) => {
        console.error("와인 목록을 가져오는데 실패했습니다.", error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <SlideBanner />
        <div className={styles.bannerCollection}>
          <div className={styles.shortcutItems}>
            <MainBanner />
          </div>
        </div>
        <div className={styles.homeProducts}>
          <div className={styles.containerTitle}>오늘의 와인</div>
          <div className={styles.productListWrap}>
            <div className={styles.productList}>
              {wineList.map((wine) => (
                <ProductItem key={wine.id} wine={wine} />
              ))}
            </div>
            <MoreBtn onClick={clickedShowMore} />
          </div>
        </div>
        <div className={styles.lovedCollection}>
          <div className={styles.containerTitle}>
            Top 10 Wine
            <p className={styles.desc}>현재 많은 사랑을 받고있어요!</p>
          </div>
          <div className={styles.lovedItems}>
            <LovedBanner />
          </div>
        </div>
        <SingleBanner />
      </div>
    </>
  );
};

export default Main;
