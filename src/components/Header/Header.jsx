"use client";
import MenuPage from "@/src/components/MenuPage/MenuPage";
import styles from './Header.module.css'
import Image from 'next/image';
import {useState} from 'react';

export default function Header(){
// uses usestate hook setting initial state as false, and a function to toggle the state between true and false (!)
const [toggle, setToggle] = useState(false);
// Click handler is a function that toggles the state of the toggle variable
 function clickHandler() {
  setToggle(!toggle)
  
  console.log(toggle)
 };

  return (
    <header className={styles.headerContainer}>

      <h1 className={styles.title}>🔥 Fireplace Palace</h1>

      <button onClick= {clickHandler} className={styles.buttonMenu}>

        {/* line 24-30 is a image component and we are pasing in some props src and alt, We are passing in a string linking source of image , and image desrciption using alt*/}
        <Image
          src="/images/menu-open-button.png"//
          alt="menu-open-button"
          className={styles.buttonImage}
          width={105} // Ajusta según sea necesario
          height={105} // Ajusta según sea necesario
        />
      </button>
      {/* if toggle is true, we render the MenuPage component */}
      {toggle && <MenuPage/>}

      </header>
  );
};
