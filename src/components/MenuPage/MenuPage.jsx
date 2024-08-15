import styles from './MenuPage.module.css'
import Image from 'next/image';
import {useState} from 'react';
import Link from "next/link";




export default function MenuPage () {

    const [isOpen, setIsOpen] = useState(true);

    function closeHandler() {
     setIsOpen(!isOpen)
     console.log(isOpen)
    };

    if (!isOpen) {
        return null; // if open false, we return literally nothin
        
    }

    return(

    <div className={styles.massiveOrangeBox}>
        <div className={styles.ButtonAndLinks}>

            <button onClick = {closeHandler} className={styles.closeMenu}>
                <Image
                src="/images/menu-close-button.png"
                alt="menu-close-button"
                className={styles.buttonImage}
                width={60}
                height={60} 
            />
            </button>

            <Link onClick={closeHandler} href="/" className={styles.menuText}>Home</Link>
            <Link onClick={closeHandler} href="/founders" className={styles.menuText}>Meet the Founders</Link>
        </div>
        <div className={styles.emptyDiv}></div>


    </div>
);
};