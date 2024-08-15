import styles from './header.module.css'
import Image from 'next/image';

export default function Header(){
  return (
    <header className={styles.headerContainer}>

      <h1 className={styles.title}>🔥 Fireplace Palace</h1>

      <button className={styles.buttonMenu}>
        <Image
          src="/images/menu-open-button.png"
          alt="menu-open-button"
          className={styles.buttonImage}
          width={400} // Ajusta según sea necesario
          height={400} // Ajusta según sea necesario
        />
      </button>
    </header>
  );
};
