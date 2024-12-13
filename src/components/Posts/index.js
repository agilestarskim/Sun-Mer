import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./posts.module.css"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          instagramPosts {
            id
          }
        }
      }
    }
  `)

  const posts = data.site.siteMetadata.instagramPosts

  React.useEffect(() => {
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="posts" className={styles.posts}>
      <h2 className={styles.title}>Posts</h2>
      <div className={styles.instagramEmbed}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postContainer}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={`https://www.instagram.com/p/${post.id}/`}
              data-instgrm-version="12"
              style={{ margin: 0 }}
            >
              <a href={`https://www.instagram.com/p/${post.id}/`}></a>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Posts