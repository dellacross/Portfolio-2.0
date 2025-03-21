import React from 'react'
import './styles.css'

const AcademicExperience = ({title, subtitle, time, icon}) => {
  return (
    <section>
      <header><ion-icon name={icon}></ion-icon></header>
      <main>
          <p>{subtitle}</p>
          <h2>{title}</h2>
      </main>
      <footer>{time}</footer>
    </section>
  )
}

export default AcademicExperience