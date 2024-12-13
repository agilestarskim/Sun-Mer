import * as React from "react"
import * as styles from "./about.module.css"

const About = () => (
  <section className={styles.about}>
    <p className={styles.text}>
      Photography <span>is driven by a deep passion for</span> capturing life's
      most <span>precious moments</span> with artistry and a touch of magic
    </p>
    <button className={styles.button}>LEARN MORE</button>
  </section>
)

export default About 