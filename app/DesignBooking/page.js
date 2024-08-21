import ContactFormTwo from "@/src/components/ContactFormTwo/ContactFormTwo";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.SupaContainer}>
      <h1 className={styles.FirstBox}>Design Booking</h1>
      <ContactFormTwo />
    </div>
  );
}
