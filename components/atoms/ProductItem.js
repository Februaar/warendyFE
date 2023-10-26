import Link from "next/link";
import Image from "next/image";
import styles from "./ProductItem.module.css";
import { WishBtn } from "./Btn";

const ProductItem = ({ wine }) => {
  const { country, name, picture, price } = wine;

  return (
    <>
      <div className={styles.productItem}>
        <Link href="/wine-detail" className={styles.itemInner}>
          <div className={styles.thumbBox}>
            <div className={styles.product}>
              <Image
                src={picture}
                alt="wine"
                className={styles.productImg}
                width={80}
                height={226}
              />
              <WishBtn />
            </div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.country}>{country}</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>
              <div className={styles.amount}>{price}원</div>
              <div className={styles.desc}>2023년 기준</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductItem;
