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
  const [activeIndex, setActiveIndex] = React.useState(0)
  const sliderRef = React.useRef(null)
  const [maxScroll, setMaxScroll] = React.useState(0)
  const [cardWidth, setCardWidth] = React.useState(328)
  const cardGap = 32 // gap을 상수로 정의

  // Instagram 스크립트 로드
  React.useEffect(() => {
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // 최드 너비 계산 및 업데이트
  React.useEffect(() => {
    const updateCardWidth = () => {
      const card = document.querySelector(`.${styles.postContainer}`)
      if (card) {
        const width = card.offsetWidth
        setCardWidth(width)
      }
    }

    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])

  // 최대 스크롤 거리 계산
  React.useEffect(() => {
    const updateMaxScroll = () => {
      if (sliderRef.current) {
        const totalWidth = sliderRef.current.scrollWidth
        const visibleWidth = sliderRef.current.offsetWidth
        setMaxScroll(totalWidth - visibleWidth)
      }
    }

    updateMaxScroll()
    window.addEventListener('resize', updateMaxScroll)
    return () => window.removeEventListener('resize', updateMaxScroll)
  }, [sliderRef.current, cardWidth]) // cardWidth 변경 시에도 재계산

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleNextClick = () => {
    const currentScroll = activeIndex * (cardWidth + cardGap)
    if (currentScroll < maxScroll) {
      setActiveIndex(activeIndex + 1)
    }
  }

  return (
    <section id="posts" className={styles.posts}>
      <div className={styles.content}>
        <h2 className={styles.title}>Posts</h2>
        <div className={styles.sliderContainer}>
          <div 
            ref={sliderRef}
            className={styles.slider}
            style={{ transform: `translateX(calc(-${activeIndex * (cardWidth + cardGap)}px))` }}
          >
            {posts.map((post) => (
              <div 
                key={post.id} 
                className={styles.postContainer}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`https://www.instagram.com/p/${post.id}/`}
                  data-instgrm-version="12"
                  style={{ 
                    margin: 0,
                    background: '#FFF',
                    borderRadius: '3px',
                    maxWidth: '540px',
                    minWidth: '326px'
                  }}
                >
                  <a href={`https://www.instagram.com/p/${post.id}/`}>View on Instagram</a>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.navigation}>
          <button 
            className={`${styles.navButton} ${activeIndex === 0 ? styles.disabled : ''}`}
            onClick={handlePrevClick}
            disabled={activeIndex === 0}
            aria-label="Previous posts"
          >
            ←
          </button>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ 
                width: `${(activeIndex * (cardWidth + cardGap) / maxScroll) * 100}%`
              }}
            />
          </div>
          <button 
            className={`${styles.navButton} ${activeIndex * (cardWidth + cardGap) >= maxScroll ? styles.disabled : ''}`}
            onClick={handleNextClick}
            disabled={activeIndex * (cardWidth + cardGap) >= maxScroll}
            aria-label="Next posts"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Posts