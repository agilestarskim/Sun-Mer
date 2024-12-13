import * as React from "react"
import * as styles from "./posts.module.css"

const Posts = () => {
  const postIds = [
    "DBYvy6Jy5pW",
    "DBFmiinyH_D", 
    "C_4bayaSCc1",
    "C_hHt_FysD2",
    "C_Klu6RSg9D",
    "C9uILwaS1s7",
    "C7d2jI5JFDZ",
    "C5zndt9JEOa",
    "C4AiYMDJ7ZV",
    "C1Ulhj8puCo",
    "Cy5-sbKJsRn",
    "Cxit6VBSYjS",
  ]

  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true
    script.onload = () => setLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script) // Clean up the script on unmount
    }
  }, [])

  return (
    <section className={styles.posts}>
      <h2 className={styles.title}>Instagram Posts</h2>
      <div className={styles.instagramEmbed}>
        {postIds.map((postId) => (
          <blockquote
            key={postId}
            className="instagram-media"
            data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
            data-instgrm-version="12"
            style={{ display: loaded ? 'block' : 'none' }} // 로드된 후에만 표시
          >
            <a href={`https://www.instagram.com/p/${postId}/`}>View this post on Instagram</a>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default Posts 