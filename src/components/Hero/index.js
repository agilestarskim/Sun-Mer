import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./hero.module.css"
import * as animations from "../../styles/animations.module.css"

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroBackground}>
      <StaticImage
        src="../../images/hero/hero-main.jpg"
        alt="Hero background"
        className={styles.heroImage}
        placeholder="blurred"
        layout="fullWidth"
        objectFit="contain"
      />
    </div>
    <div className={`${styles.content} ${animations.fadeIn}`}>
      <h1 className={styles.title}>
        Capturing beautiful<br />
        moment inside lens and<br />
        shutterspeed
      </h1>
      <div className={`${styles.thumbnails} ${animations.slideIn}`}>
        {/* 임시 회색 박스들 */}
        <div className={styles.thumbnail} />
        <div className={styles.thumbnail} />
        <div className={styles.thumbnail} />
      </div>
      <div className={`${styles.tags} ${animations.fadeIn}`}>
        <span>Landscape</span>
        <span>Wildlife</span>
        <span>Portrait</span>
      </div>
    </div>
  </section>
)

export default Hero 