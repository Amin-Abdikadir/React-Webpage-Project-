import styles from "./ContactForm.module.css";
// import { useState } from "react";


export default function ContactForm() {

    // const [fullName,setFullName ] = useState({
        
    // })

  return (
    <>
      <h4>Personal Information</h4>

      <form className={styles.FormBox}>
        <label className={styles.Labels}>
          Full Name:
          <input type="text" />
        </label>
        <label className={styles.Labels}>
          Postcode:
          <input type="text" />
        </label>
        <label className={styles.Labels}>
          House/Flat number and street Name
          <input type="text" />
        </label>
        <label className={styles.Labels}>
          City:
          <input type="text" />
        </label>

        <h4 className={styles.ContactText}>Contact information</h4>

        <label className={styles.Labels}>
          Phone number:
          <input type="number" />
        </label>
        <label className={styles.Labels}>
          Email Address:
          <input type="email" />
        </label>

       

      </form> 
      <button type="submit" className={styles.Button}>
          Request Design Consultation
        </button>
    </>
  );
}
