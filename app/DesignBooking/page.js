import ContactForm from "@/src/components/ContactForm/ContactForm";
import styles from "./page.module.css";




    export default function Page() {
          return (
            <div className={styles.SupaContainer}>
                <h1 className={styles.FirstBox}>Design Booking</h1>

                <h4>Personal Information</h4>

                <ContactForm />


                <h4>Contact information</h4>

                <form className={styles.FormBox}>
                  <label className={styles.Labels}>
                      Phone number:
                      <input type= "number"/>
                  </label>
                  <label className={styles.Labels}>
                      Email Address:
                      <input type= "email"/>
                  </label>
                
                </form> 
                <button type="submit" className={styles.Button}>Request Design Consultation</button>

            </div>
          )
        };