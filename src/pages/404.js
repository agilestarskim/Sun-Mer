import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./404.module.css"

const NotFoundPage = () => (
  <Layout>
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>Oops! Page Not Found</h1>
      <p className={styles.message}>이 페이지는 존재하지 않거나, 이동되었습니다.</p>
      <p className={styles.suggestion}>아래 링크를 통해 다른 페이지로 이동해 보세요:</p>
      <div className={styles.linkContainer}>
        <a href="/" className={styles.link}>홈으로 돌아가기</a>
        <a href="/about" className={styles.link}>소개 페이지</a>
        <a href="/contact" className={styles.link}>연락하기</a>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
