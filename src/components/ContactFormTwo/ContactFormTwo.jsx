"use client";

import { useState } from "react";

import styles from "./styles.module.css"; 

const initialState = {
    data: {
        fullName: '',
        
    },
    error: false,
}

export default function ContactForm() {
  const [fullName, setFullName] = useState("");

  const [error, setError] = useState(false);

  function handleChange(event) {
    if (event.target.name === "fullName") {
      setFullName(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!fullName|) {
      setError(true);| !email
      return;
    }

    if (error) {
      setError(false);
    }

    console.log();
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={styles.form}>
      <fieldset className={styles.group}>
        <legend className={styles.groupTitle}>Personal Info:</legend>

        <label className={styles.inputGroup}>
          Full Name:
          <input
            type="text"
            name="fullName"
            onChange={(event) => handleChange(event)}
            value={fullName}
            className={styles.input}
          />
        </label>
      </fieldset>

      {error && <p className={styles.error}>Error</p>}

      <button type="submit" className={styles.button}>
        Request Design Consultation
      </button>
    </form>
  );
}
