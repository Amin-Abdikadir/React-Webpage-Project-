
import styles from './HeroDescription.module.css' 
import Link from "next/link";

export default function HeroDescription() {
    return (
        <div className={styles.heroDescription}>
        <p className={styles.heroHeadline}>
          Discover the <br />
          perfect fireplace ... 
          </p> 
          <button className={styles.ConsultationButton}> <Link href="/DesignBooking">
    Book a consultation </Link>
</button> 
      </div>
    )
}

