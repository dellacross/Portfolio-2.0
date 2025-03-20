import React from 'react'
import './AboutMe.css'
import Photo from '../../assets/images/photo-bkg-clean.png'

const AboutMe = () => {

  const GetAge = () => {
    const today = new Date();
    const initDate = new Date('2/3/2001');
    return today.getFullYear() - initDate.getFullYear()
  }

  return (
    <div id="about-me">
      <header>
        <h1>
          SOBRE&nbsp;<b>MIM</b>
          <span>RESUMO</span>
        </h1>
      </header>
      <article id="img-article">
        <div id="image-wrapper">
          <img 
            src={Photo}
            alt='' 
          />
        </div>
      </article>
      <article id="datas-article">
        <section id="datas-wrapper">
          <h3>
            <span><ion-icon name="remove-outline"></ion-icon></span>
            <p>Meu nome é&nbsp;<b>Victor</b>, desenvolvedor web full stack</p>
          </h3>
          <p>
            Sou desenvolvedor full stack e Bacharel em Sistemas de Informação pela Universidade Federal de Minas Gerais (UFMG), formação na qual desenvolvi diversos projetos, em diferentes tecnologias, como JavaScript, TypeScript, Python, C/C++, ReactJS, entre outras. Durante 2 anos atuei como estagiário em desenvolvimento web, período no qual pude aprimorar minhas habilidades na criação de interfaces dinâmicas e responsivas utilizando ReactJS, JavaScript, HTML e CSS. No momento, atuo como desenvolvedor front end júnior. 
          </p>
          <div id="infos-container">
            <div className="info">
              <strong>Nome</strong>
              <p>Victor Della Croce Maltez</p>
            </div>
            <div className="info">
              <strong>Idade</strong>
              <p>{`${GetAge()} anos`}</p>
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
          <a 
            href='https://drive.google.com/drive/folders/1GLNuHUa5mNxuew29f-AvDy4cozlIv5zH?usp=sharing'
            rel='noreferrer noopener'
            target='_blank'
          >
            Download CV
          </a>
        </section>
      </article>
    </div>
  )
}

export default AboutMe