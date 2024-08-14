import React from 'react'
import './Knowledge.css'

const Knowledge = () => {
  return (
    <div id="knowledge">
        <header>
            <h1>
                <b>EXPERIÊNCIA</b>
                <span>CONHECIMENTO</span>
            </h1>
        </header>
        <article>
            <section>
                <header><ion-icon name="code"></ion-icon></header>
                <main>
                    <h2>Curso de Desenvolvimento Full Stack - Udemy</h2>
                    <div className="techs">
                        <span><ion-icon name="logo-react"></ion-icon></span>
                        <span><ion-icon name="logo-html5"></ion-icon></span>
                        <span><ion-icon name="logo-css3"></ion-icon></span>
                        <span><ion-icon name="logo-javascript"></ion-icon></span>
                        <span><ion-icon name="logo-nodejs"></ion-icon></span>
                    </div>
                </main>
                <a>
                    <span>Em andamento</span>
                </a>
            </section>
            <section>
                <header><ion-icon name="code"></ion-icon></header>
                <main>
                    <h2>Curso de Desenvolvimento Web - Udemy</h2>
                    <div className="techs">
                        <span><ion-icon name="logo-react"></ion-icon></span>
                        <span><ion-icon name="logo-html5"></ion-icon></span>
                        <span><ion-icon name="logo-css3"></ion-icon></span>
                        <span><ion-icon name="logo-javascript"></ion-icon></span>
                    </div>
                </main>
                <a
                    href="https://www.udemy.com/certificate/UC-c0f8489a-620c-4687-873b-51d54226a028/"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <span>Exibir credencial</span>
                </a>
            </section>
            <section>
                <header><ion-icon name="code"></ion-icon></header>
                <main>
                    <h2>Desenvolvimento Web</h2>
                    <div className="techs">
                        <span><ion-icon name="logo-react"></ion-icon></span>
                        <span><ion-icon name="logo-html5"></ion-icon></span>
                        <span><ion-icon name="logo-css3"></ion-icon></span>
                        <span><ion-icon name="logo-javascript"></ion-icon></span>
                        <span><ion-icon name="logo-nodejs"></ion-icon></span>
                    </div>
                </main>
                <p><span>2+</span> anos</p>
            </section>
            <section>
                <header><ion-icon name="code"></ion-icon></header>
                <main>
                    <h2>Estágio - Cotemig - Colégio e Faculdade</h2>
                    <div className="techs">
                        <span><ion-icon name="logo-react"></ion-icon></span>
                        <span><ion-icon name="logo-html5"></ion-icon></span>
                        <span><ion-icon name="logo-css3"></ion-icon></span>
                        <span><ion-icon name="logo-javascript"></ion-icon></span>
                    </div>
                </main>
                <p><span>1+</span> ano</p>
            </section>
        </article>
    </div>
  )
}

export default Knowledge