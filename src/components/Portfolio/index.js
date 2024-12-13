import * as React from "react"
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
  const videos = [
    { id: 1, title: "사랑으로 우리는", videoId: "xl-GcYQ1N5g" },
    { id: 2, title: "d!ve", videoId: "pJWD9mWj7V8" },
    { id: 3, title: "탈(Higher)", videoId: "tm4_dSk3Hg4" },
    { id: 4, title: "bonnie & clyde", videoId: "rE7wrUSAOXk" },
    { id: 5, title: "Heart Hurts", videoId: "gg_ICIzyQgc" },    
    { id: 6, title: "편집증 (Paranoia)", videoId: "BivYmP3YMxk" },
  ]

  return (
    <section className={styles.portfolio}>
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
            <a href="https://www.youtube.com/channel/UCElCCdSKstO6m9nhhgHKNdw" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
              YouTube
            </a>
            <a href="https://open.spotify.com/artist/1GbmCdNlnSjdELYPmh7RZM" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
              Spotify
            </a>
            <a href="https://www.tiktok.com/@sunandmer" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
              TikTok
            </a>
            <a href="https://soundcloud.com/sunandmer" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
              SoundCloud
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio 