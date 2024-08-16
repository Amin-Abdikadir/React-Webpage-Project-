"use client"

import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <div className={styles.reviewsContainer}>
      <h3>Trusted</h3>
      <p>
        We've got thousands of happy customers all over the UK. Choose your
        country to see the latest review:
      </p>
      <button>England</button> 
      <button>England</button>
      <button>England</button>
    </div>
  );
}
