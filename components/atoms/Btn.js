import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import styles from "./Btn.module.css";

export const MoreBtn = () => {
  return (
    <div className={styles.btnMore}>
      <div href="#" className={`${styles.btn} " btn outline " `}>
        더보기
      </div>
    </div>
  );
};

export const WishBtn = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);

  const handleIconClick = (e) => {
    e.preventDefault();
    setIsIconClicked((prevClicked) => !prevClicked);
    Swal.fire({
      title: "관심상품",
      text: isIconClicked
        ? "관심상품에서 제거되었습니다."
        : "관심상품으로 추가되었습니다.",
      icon: "success",
    });
  };

  return (
    <span
      aria-label="관심상품"
      role="button"
      className={styles.btnWish}
      onClick={handleIconClick}
    >
      <FontAwesomeIcon
        icon={isIconClicked ? filledHeart : emptyHeart}
        width={24}
        height={24}
        className={`${styles.icon} ${isIconClicked ? styles.clicked : ""}`}
      />
    </span>
  );
};

export const ReviewBtn = () => {
  return (
    <>
      <div className={styles.reviewBtn}>
        <div role="button" className={styles.write}>
          작성하기
        </div>
      </div>
    </>
  );
};
