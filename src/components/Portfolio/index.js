import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./portfolio.module.css"

const VideoCard = ({ thumbnailUrl, title, videoId }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)

  const handleClick = () => {
    setIsPlaying(true)
  }

  return (
    <div className={styles.videoCard}>
      {!isPlaying ? (
        <div className={styles.thumbnail} onClick={handleClick}>
          <img 
            src={thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
          />
          <div className={styles.playButton}>
            <span>▶</span>
          </div>
        </div>
      ) : (
        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <h3 className={styles.videoTitle}>{title}</h3>
    </div>
  )
}

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          videos {
            id
            title
            videoId
          }
          socialLinks {
            name
            url
          }
        }
      }
    }
  `)

  const videos = data.site.siteMetadata.videos
  const socialLinks = data.site.siteMetadata.socialLinks

  return (
    <section id="works" className={styles.portfolio}>
      <div className={styles.content}>
        <h2 className={styles.title}>Summer Sessions</h2>
        <div className={styles.grid}>
          {videos.map(video => (
            <VideoCard
              key={video.id}
              title={video.title}
              videoId={video.videoId}
            />
          ))}
        </div>
        <div className={styles.socialSection}>
          <p className={styles.socialText}>Discover More Tracks</p>
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio 