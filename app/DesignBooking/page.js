import ContactForm from "@/src/components/ContactForm/ContactForm";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.SupaContainer}>
      <h1 className={styles.FirstBox}>Design Booking</h1>
      <ContactForm />
    </div>
  );
}
