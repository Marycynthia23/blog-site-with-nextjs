import React from 'react'
import styles from "./page.module.css"

const Layout = ({children}) => {
  return (
    <div>
        <h1 classname={styles.mainTitle}>Our Works</h1>
        {children}
    </div>
  )
}

export default Layout