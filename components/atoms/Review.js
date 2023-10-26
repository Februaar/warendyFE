import styles from "./Review.module.css";
import { ReviewBtn } from "./Btn";

const Review = () => {
  return (
    <>
      <div className={styles.productReview}>
        <table className={styles.reviewTable}>
          <thead>
            <thr className={styles.listTitle}>
              <th>no</th>
              <th>content</th>
              <th>writer</th>
              <th>date</th>
            </thr>
          </thead>
        </table>
        <div className={styles.boardList}>
          <div className={styles.num}>1</div>
          <div className={styles.content}>생각했던것보다 별로였어요</div>
          <div className={styles.writer}>지니</div>
          <div className={styles.date}>2023-09-14</div>
        </div>
        <ReviewBtn />
      </div>
    </>
  );
};

export default Review;
