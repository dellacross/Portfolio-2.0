import React from 'react'
import './styles.css'

const Project = (props) => {
  return (
    <div id="project">
        <header>
            {
                props.restrictUrl ?
                (<span><ion-icon name="logo-github"></ion-icon></span>)
                :
                (
                    <a 
                        href={props.url}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                )
            }

        </header>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div id="tools">
        {
            props.tools && props.tools?.map((tool, index) => (
                <span key={index}>
                    <ion-icon name={tool}></ion-icon>
                </span>
            ))
        }
        </div>
    </div>
  )
}

export default Project