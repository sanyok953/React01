import React from 'react'
import s from './Preloader.module.css'
import circle from './../../../assets/images/circle.gif'

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img alt="" src={circle} />
    </div>
  )
}

export default Preloader