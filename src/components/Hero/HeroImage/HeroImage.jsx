
import styles from './HeroImage.module.css'
import Image from 'next/image';

export default function HeroImage () {
    return (
        <Image
        src="/images/hero-desktop.png"
        alt="Cozy living room with a fireplace"
        className={styles.heroImage}
        width={300} // Ajusta según sea necesario
        height={300} // Ajusta según sea necesario
      />
    )
}