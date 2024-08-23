
import styles from './HeroDescription.module.css' 
import Link from "next/link";

export default function HeroDescription() {
    return (
      <>
        <div className={styles.heroDescription}>
        <p className={styles.heroHeadline}>
          Discover the <br />
          perfect fireplace ... 
          </p>
      </div>
      <div className={styles.ButtonBox}>

        <Link href="/DesignBooking">
        <button className={styles.ConsultationButton}>
        Book a consultation
        </button>
        </Link>

</div>
</>
    )
}

