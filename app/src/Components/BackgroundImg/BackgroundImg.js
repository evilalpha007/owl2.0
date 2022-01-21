import React from 'react'
import Styles from './BackgroundImg.module.css'

const BackgroundImg = props => {
  return <img className={Styles.img} src={props.image} alt='bg' />
}

export default BackgroundImg
