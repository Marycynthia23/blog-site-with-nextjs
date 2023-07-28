"use client"
import React, { useContext } from 'react'
import styles from "./DarkModeToggle.module.css"
import { ThemeContext } from '../../../context/ThemeContext';

const DarkModeToggle = () => {
    const  {toggle, mode } = useContext(ThemeContext);   //const mode = "dark"
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>m &nbsp;</div>
        <div className={styles.icon}>s</div>
        <div className={styles.ball} style={mode === "light" ? {left: "2px"} : {right: "2px"}}/>
    </div>
  )
}

export default DarkModeToggle