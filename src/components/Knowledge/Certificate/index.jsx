import React from 'react'
import './styles.css'

const Certificate = (props) => {

  return (
    <section id="certificate">
        <header><ion-icon name="code"></ion-icon></header>
        <main>
            <h2>{props.item?.title}</h2>
            <div className="techs">
            {
                props.item?.tools && props.item?.tools?.map((tool, index) => (
                    <span key={index}>
                        <i className={tool} />
                    </span>
                ))
            }
            </div>
        </main>
        {
            props.item?.link &&
            <a
                href={props.item?.link}
                rel='noopener noreferrer'
                target='_blank'
            >
                Acessar certificado
            </a>
        }
        {
            !props.item?.link && props.item?.experience &&
            <p>{props.item?.experience}</p>
        }
        {
            !props.item?.link && !props.item?.experience && !props.item?.finalizado &&
            <span>Em andamento</span>
        }
    </section>
  )
}

export default Certificate