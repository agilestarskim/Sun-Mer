import * as React from "react"
import * as styles from "./contact.module.css"

const Contact = () => (
  <section className={styles.contact}>
    <div className={styles.content}>
      <h2 className={styles.title}>
        Let's <span>discuss</span> your<br />
        vision <span>with us</span>
      </h2>
      <button className={styles.button}>LET'S TALK</button>
      
      <div className={styles.info}>
        <div>
          <h3>Get Our Avenue</h3>
          <p>123 Creative Street<br />Photography City, PC 12345</p>
        </div>
        <div>
          <h3>Contact Details</h3>
          <p>+1 234 567 8900<br />hello@creacy.com</p>
        </div>
      </div>
    </div>
  </section>
)

export default Contact 