import * as React from "react"
import * as styles from "./about.module.css"

const About = () => (
  <section className={styles.about}>
    <div className={styles.content}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>
          A Life Full of Sunshine by the Sea
          <br />
          <span className={styles.highlight}>Where Dreams Float</span>
          <br />
          <span className={styles.highlight}>Like Summer Clouds</span>
        </h2>
        <p className={styles.description}>
          We paint stories with melodies, creating moments that drift between 
          reality and dreams. Each song is a journey through waves of emotion, 
          carrying whispers of endless summers.
        </p>
      </div>
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <span className={styles.number}>4+</span>
          <span className={styles.label}>Years of Music</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.number}>50+</span>
          <span className={styles.label}>Live Shows</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.number}>13+</span>
          <span className={styles.label}>Original Songs</span>
        </div>
      </div>
    </div>
  </section>
)

export default About 