import React from 'react'
import './styles.css'

const Project = (props) => {
  return (
    <div id="project">
        <header>
            {
                props.item?.restrictUrl ?
                (<span><ion-icon name="logo-github"></ion-icon></span>)
                :
                (
                    <a 
                        href={props.item?.repositoryUrl}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                )
            }
            {
                !props.item?.ownProject &&
                <p>Projeto de terceiros</p>
            }
            {
                props.item?.siteUrl &&
                <a href={props.item?.siteUrl}><ion-icon name="link-outline"></ion-icon></a>
            }
        </header>
        <strong>{props.item?.title}</strong>
        <p id="description">{props.item?.description}</p>
        <p id="status">{props.item?.status}</p>
        <div id="tools">
        {
            props.item?.tools && props.item?.tools?.map((tool, index) => (
                <span key={index}>
                    <i className={tool} />
                </span>
            ))
        }
        </div>
    </div>
  )
}

export default Project