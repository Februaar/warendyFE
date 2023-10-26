import Image from "next/image";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  return (
    <>
      <div className={styles.product}>
        <Image
          alt="detail"
          src="/images/wine.svg"
          className={styles.productImg}
          width={180}
          height={520}
        />
      </div>
    </>
  );
};

export default ProductDetail;
