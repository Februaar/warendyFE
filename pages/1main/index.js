import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./main.module.css";
import TodayWine from "../../components/wine/today-wine";
import TodayMood from "../../components/wine/today-mood";
import LovedWine from "../../components/wine/loved-wine";
import SearchBar from "../searchbar/search-bar";
import { getWineList } from "@/services/api/api";
import { userTokenState, wineListState } from "@/recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Main = () => {
  const router = useRouter();
  const [wineList, setWineList] = useRecoilState(wineListState);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/mainbg.svg",
    "/images/mainbg2.svg",
    "/images/mainbg3.svg",
  ];
  const token = useRecoilValue(userTokenState);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect(() => {
  //   const getWineData = async () => {
  //     try {
  //       const data = await getWineList(token);
  //       setWineList(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   if (token == null) {
  //     router.push("/landing/new-landing");
  //   }
  //   getWineData();
  // }, [setWineList]);

  return (
    <>
      <div className="container">
        <div className={styles.mainCarousel}>
          <button className="resetBtn btn" onClick={handlePrevClick}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={styles.carouselIcon}
            />
          </button>
          <Image
            src={images[currentImageIndex]}
            alt="main Carousel"
            width={930}
            height={450}
          />
          <button onClick={handleNextClick}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.carouselIcon}
            />
          </button>
        </div>
        <div className="inner">
          <SearchBar />
          <div className={styles.contentArea}>
            <TodayWine />
            <TodayMood wines={wineList} />
            {wineList ? (
              <LovedWine List={wineList} />
            ) : (
              <p>와인 리스트가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
