import styles from "./card.module.css";
import Image from "next/image";

export const Card = ({
  imagePath,
  country,
  population,
  region,
  capital,
  code,
}) => {
  return (
    <div>
      <div>
        <Image
          src={imagePath}
          width={264}
          height={160}
          alt="flag"
          className={styles.img}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.h2}>{country}</h2>
        <div className={styles.info}>
          <p>
            <span>Population:</span>
            {population}
          </p>
          <p>
            <span>Region:</span>
            {region}
          </p>
          <p>
            <span>Population:</span>
          </p>
        </div>
      </div>
    </div>
  );
};
