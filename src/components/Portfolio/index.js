import * as React from "react"
import * as styles from "./portfolio.module.css"

const Portfolio = () => (
  <section className={styles.portfolio}>
    <div className={styles.header}>
      <h2 className={styles.title}>
        <span>Explore</span> the artistry and<br />
        precision behind <span>our portfolio</span> of timeless<br />
        photography
      </h2>
      <button className={styles.button}>EXPLORE MORE</button>
    </div>
    
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className={styles.image} />
        <div className={styles.content}>
          <div className={styles.tags}>
            <span>Wildlife Portfolio</span>
            <span>Animal</span>
          </div>
          <h3>Majestic Creatures of the African Savanna</h3>
          <button>MORE DETAILS</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image} />
        <h3>A Temple's Serenity</h3>
        <button>MORE DETAILS</button>
      </div>
      <div className={styles.card}>
        <div className={styles.image} />
        <h3>Moments Framed in Portraits</h3>
        <button>MORE DETAILS</button>
      </div>
    </div>
  </section>
)

export default Portfolio 