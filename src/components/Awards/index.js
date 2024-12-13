import * as React from "react"
import * as styles from "./awards.module.css"

const awards = [
  {
    year: "2015",
    title: "Sony World Photography Awards",
    expanded: true
  },
  {
    year: "2017",
    title: "Travel Photographer Of The Year"
  },
  {
    year: "2022",
    title: "Magnum Photography Awards"
  },
  {
    year: "2023",
    title: "International Photography Awards"
  }
]

const Awards = () => (
  <section className={styles.awards}>
    <div className={styles.content}>
      <h2 className={styles.title}>
        <span>Award</span> is a pixel that <span>reflecting</span><br />
        our ongoing <span>dedication</span> to<br />
        innovation and excellence
      </h2>
      
      <div className={styles.list}>
        {awards.map(award => (
          <div key={award.year} className={`${styles.item} ${award.expanded ? styles.expanded : ''}`}>
            <div className={styles.header}>
              <span className={styles.year}>{award.year}</span>
              <span className={styles.awardTitle}>{award.title}</span>
              <button className={styles.toggle}>+</button>
            </div>
            {award.expanded && (
              <div className={styles.preview}>
                <div className={styles.image} />
                <p>A brief moment of excellence captured in time...</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Awards 