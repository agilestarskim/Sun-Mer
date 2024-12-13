import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./about.module.css"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          stats {
            number
            label
          }
        }
      }
    }
  `)

  const stats = data.site.siteMetadata.stats

  return (
    <section id="about" className={styles.about}>
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
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.number}>{stat.number}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 