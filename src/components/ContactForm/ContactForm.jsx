import styles from './ContactForm.module.css';



export default function ContactForm() {

 return (
    <form className={styles.FormBox}>
        <label className={styles.Labels}>
            Full Name:
            <input type= "text"/>
        </label>
        <label className={styles.Labels}>
            Postcode:
            <input type= "text"/>
        </label>
        <label className={styles.Labels}>
            House/Flat number and street Name
            <input type= "text"/>
        </label>
        <label className={styles.Labels}>
            City:
            <input type= "text"/>
        </label>
  </form>
   
  );
};