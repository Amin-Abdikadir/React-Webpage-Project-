"use client";
import MenuPage from "@/src/components/MenuPage/MenuPage";
import styles from './header.module.css'
import Image from 'next/image';
import {useState} from 'react';

export default function Header(){

const [toggle, setToggle] = useState(false);

 function clickHandler() {
  setToggle(!toggle)
  
  console.log(toggle)
 };

  return (
    <header className={styles.headerContainer}>

      <h1 className={styles.title}>🔥 Fireplace Palace</h1>

      <button onClick = {clickHandler} className={styles.buttonMenu}>
        <Image
          src="/images/menu-open-button.png"
          alt="menu-open-button"
          className={styles.buttonImage}
          width={105} // Ajusta según sea necesario
          height={105} // Ajusta según sea necesario
        />
      </button>
      {toggle && <MenuPage/>}

      </header>
  );
};
