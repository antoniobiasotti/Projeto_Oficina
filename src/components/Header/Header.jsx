import styles from "./Header.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <div className={styles.darkMode}>
        <div>
          <Image src="/lua.svg" width={15} height={15} alt="lua"></Image>
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};
