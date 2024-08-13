import React from 'react'
import './Home.css'

const Home = () => {

    return (
        <div id="home">
            <article>
                <section>
                    <span>Desenvolvedor <b>Full Stack</b></span>
                    <h1><b>Victor</b><span>Della Croce Maltez</span></h1>
                </section>
                <section>
                    <button>Projetos</button>
                    <button>Sobre mim</button>
                </section>
            </article>
            <footer>
                <a 
                    href='https://www.linkedin.com/in/victor-della-croce-maltez-48711b187/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a
                    href='https://github.com/dellacross'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                    href='https://www.instagram.com/victordella/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a
                    href='https://www.linkedin.com/in/victor-della-croce-maltez-48711b187/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
            </footer>
        </div>
    )
}

export default Home