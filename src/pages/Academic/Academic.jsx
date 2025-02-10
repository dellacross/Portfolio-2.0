import React from 'react'
import './Academic.css'

const Academic = () => {
  return (
    <div id="academic">
        <header>
            <h1>
                FORMAÇÃO&nbsp;<b>ACADÊMICA</b>
                <span>EDUCAÇÃO</span>
            </h1>
        </header>
        <article>
            <section>
                <header><ion-icon name="code-slash"></ion-icon></header>
                <main>
                    <p>Graduação</p>
                    <h2>Bacharel em Sistemas de Informação - Universidade Federal de Minas Gerais (UFMG)</h2>
                </main>
                <footer>2020 - 2024</footer>  
            </section>
            <section>
                <header><ion-icon name="calculator"></ion-icon></header>
                <main>
                    <p>Graduação Interrompida</p>
                    <h2>Matemática - Universidade Federal de Minas Gerais (UFMG)</h2>
                </main>
                <footer>2019 - 2020</footer>  
            </section>
            <section>
                <header><ion-icon name="library"></ion-icon></header>
                <main>
                    <p>Ensino Médio</p>
                    <h2>Colégio Espanhol Santa Maria Minas</h2>
                </main>
                <footer>2016 - 2018</footer>  
            </section>
        </article>
    </div>
  )
}

export default Academic