import React from 'react'
import './styles.css'

const AcademicExperience = (props) => {
  return (
    <section>
      <header><ion-icon name={props.item?.icon}></ion-icon></header>
      <main>
          <p>{props.item?.subtitle}</p>
          <h2>{props.item?.title}</h2>
      </main>
      <footer>{props.item?.time}</footer>
    </section>
  )
}

export default AcademicExperience