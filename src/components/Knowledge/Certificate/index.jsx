import React from 'react'
import './styles.css'

const Certificate = ({title, tools, conclude, link, experience, company}) => {

  return (
    <section id="certificate">
        <header><ion-icon name="code"></ion-icon></header>
        <main>
            <h2>{title}<p>{company && `Empresa: ${company}`}</p></h2>
            <div className="techs">
            {
                tools && tools?.map((tool, index) => (
                    <span key={index}>
                        <i className={tool} />
                    </span>
                ))
            }
            </div>
        </main>
        {
            link &&
            <a
                href={link}
                rel='noopener noreferrer'
                target='_blank'
            >
                Acessar certificado
            </a>
        }
        {
            !link && experience &&
            <p>{experience}</p>
        }
        {
            !link && !experience && !conclude &&
            <span>Em andamento</span>
        }
    </section>
  )
}

export default Certificate