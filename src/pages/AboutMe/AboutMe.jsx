import React from 'react'
import './AboutMe.css'
import Photo from '../../assets/images/photo.jpeg'

const AboutMe = () => {


  return (
    <div id="about-me">
      <header>
        <h1>
          SOBRE&nbsp;<b>MIM</b>
          <span>RESUMO</span>
        </h1>
      </header>
      <article>
        <div id="image-wrapper">
          <img 
            src={Photo}
            alt='photo' 
          />
        </div>
      </article>
      <article>
        <section id="datas-wrapper">
          <h3>
            <span><ion-icon name="remove-outline"></ion-icon></span>
            Meu nome é&nbsp;<b>Victor</b>, desenvolvedor web full stack
          </h3>
          <p>
            Sou graduando do 8º período do curso de Sistemas de Informação, pela Universidade Federal de Minas Gerais (UFMG). Ao longo da minha formação, desenvolvi diversos projetos, em diferentes linguagens, e, atualmente, busco aplicar os conhecimentos adquiridos no mercado de trabalho como desenvolvedor web.
          </p>
          <div id="infos-container">
            <div className="info">
              <strong>Nome</strong>
              <p>Victor Della Croce Maltez</p>
            </div>
            <div className="info">
              <strong>Idade</strong>
              <p>23 anos</p>
            </div>
            <div className="info">
              <strong>Localização</strong>
              <p>Belo Horizonte/MG - Brasil</p>
            </div>
            <div className="info">
              <strong>Contato</strong>
              <p>victordella652@gmail.com</p>
            </div>
          </div>
          <button>Download CV</button>
        </section>
      </article>
    </div>
  )
}

export default AboutMe