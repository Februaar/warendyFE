import styles from "./index.module.css";
import ProductDetail from "../../components/atoms/ProductDetail";
import ColumnBox from "../../components/atoms/ColumnBox";
import Review from "../../components/atoms/Review";

const WinePage = () => {
  return (
    <>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.column}>
            <ProductDetail />
          </div>
          <div className={styles.column}>
            <ColumnBox />
          </div>
        </div>
        <div className={styles.review}>
          <h3 className={styles.subTitle}>Review</h3>
          <p className={styles.desc}>리뷰 작성 게시판입니다.</p>
          <Review />
        </div>
      </div>
    </>
  );
};

export default WinePage;
