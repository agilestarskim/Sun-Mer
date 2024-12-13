/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Header from "./header"
import "./layout.css"
import * as styles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        {children}
      </main>
    </>
  )
}

export default Layout
