import styles from "./page.module.css";
import Image from "next/image";



    export default function Page() {
          return (
            <div className={styles.superContainer}>
                <div className={styles.textAndPhoto}>
        
                    <h1 className={styles.foundersText}>
                    Meet the artisans behind our Masterpieces<br></br>Mike and Mandy
                    </h1>
                    <Image
                        src="/images/founder-mike-and-mandy.png"
                        alt="Mike and Mandy"
                        className={styles.photoFounders}
                        width={350} // Ajusta según sea necesario
                        height={360} // Ajusta según sea necesario
                    />
                </div>

                <section className={styles.section}>
                    <h3>Our craftsmanship</h3>
                    <p>
                    Mike and Mandy studied and honed their craft under the fireplace sensei Vik
                    Von Blaze. Nothing gets delivered to a customer without their sign off.
                    </p>
                    <Image
                    src="/images/founders-1.png"
                    alt="Craftsman working"
                    className={styles.sectionImage}
                    width={300}
                    height={200}
                    />
                </section>

                <section className={styles.section}>
                    <h3>Our experience</h3>
                    <p>
                    Numbers don't lie - we've been around for 20+ years and have a long list of
                    happy customers who gladly recommend us.
                    </p>
                    <Image
                    src="/images/founders-2.png"
                    alt="Experienced craftsman"
                    className={styles.sectionImage}
                    width={300}
                    height={200}
                    />
                </section>

                <section className={styles.section}>
                    <h3>Our guarantee</h3>
                    <p>
                    If you're not 100% satisfied we will fully refund your purchase. Also, we offer
                    free repairs for the first 20 years of ownership. Find that somewhere else!
                    </p>
                    <Image
                    src="/images/founders-3.png"
                    alt="Guarantee representation"
                    className={styles.sectionImage}
                    width={300}
                    height={200}
                    />
                </section>
        
        
        
        
        
        
            </div>
        
        
        
        
        
          )
        };