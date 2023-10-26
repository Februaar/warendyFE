import Image from "next/image";
import styles from "./ColumnBox.module.css";
import { WishBtn } from "./Btn";

const ColumnBox = () => {
  return (
    <>
      <div className={styles.columnBox}>
        <div className={styles.columnTop}>
          <div className={styles.productTitle}>
            <div className={styles.country}>United States</div>
            <p className={styles.name}>
              Domaine Besson, Chablis 1er Cru Vailllons
            </p>
            <p className={styles.vintage}>vintage 2000 year</p>
            <WishBtn />
          </div>
          <div className={styles.productPrice}>
            <p className={styles.title}>가격</p>
            <div className={styles.price}>
              <div className={styles.amount}>
                <div className={styles.num}>12,000</div>
                <div className={styles.won}>원</div>
              </div>
              <p className={styles.year}>2023년 기준</p>
            </div>
          </div>
          <div className={styles.pairingWith}>
            <div className={styles.title}>
              <p className={styles.text}>이런 음식과 함께 해보세요!</p>
            </div>
            <div className={styles.pairing}>
              <div className={styles.pairingDiv}>
                <Image
                  alt="meat"
                  src="/images/meat.svg"
                  width={58}
                  height={56}
                />
              </div>
              <div className={styles.pairingDiv}>
                <Image
                  alt="fish"
                  src="/images/fish.svg"
                  width={58}
                  height={56}
                />
              </div>
              <div className={styles.pairingDiv}>
                <Image
                  alt="fruit"
                  src="/images/fruit.svg"
                  width={58}
                  height={56}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productInfo}>
          <div className={styles.title}>
            Grapes
            <p className={styles.desc}>
              Shiraz / Syrah / Viognier / Mourvedre / Grenache
            </p>
          </div>
          <div className={styles.title}>
            Region
            <p className={styles.desc}>
              United States / Washington / Columbia Valley
            </p>
          </div>
          <div className={styles.title}>
            Winery
            <p className={styles.desc}>14 Hands</p>
          </div>
          <div className={styles.title}>
            Rating
            <p className={styles.desc}>3.7</p>
          </div>
          <div className={styles.title}>
            Wine Style
            <p className={styles.desc}>
              Washington State Columbia Valley Bordeaux Red Blend
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColumnBox;
