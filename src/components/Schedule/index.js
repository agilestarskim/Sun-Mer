import * as React from "react"
import * as styles from "./schedule.module.css"

function Schedule() {
  return (
    <section className={styles.stories}>
      <h2 className={styles.title}>Instagram Stories</h2>
      <div className={styles.instagramEmbed}>
        <iframe
          src="https://www.instagram.com/stories/highlights/17978947232637191/"
          width="400"
          height="600"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </section>
  )
}

export default Schedule 