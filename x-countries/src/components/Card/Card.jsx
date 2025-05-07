import React from 'react'
import reactLogo from "../../assets/react.svg"
import styles from "./Card.module.css"

const Card = ({name, flag, abbr}) => {
  return (
    <div className ={styles.card} key={abbr}>
       <img src={flag} alt={name}/>
       <h3 style={{marginBottom:"0px"}} >{name}</h3>
    </div>
   
  )
}

export default Card