import React from 'react'
import './Academic.css'

const Academic = () => {
  return (
    <div id="academic">
        <header>
            <h1>
                FORMAÇÃO&nbsp;<b>ACADÊMICA</b>
                <span>ESTUDOS</span>
            </h1>
        </header>
        <article>
            <section>
                <ion-icon name="library"></ion-icon>
                <h3>Ensino Médio</h3>
                <h2>Colégio Espanhol Santa Maria Minas</h2>
                <h3>2016 - 2018</h3>  
            </section>
            <section>
                <ion-icon name="calculator"></ion-icon>
                <h3>Graduação Interrompida</h3>
                <h2>Matemática - Universidade Federal de Minas Gerais (UFMG)</h2>
                <h3>2019 - 2020</h3>  
            </section>
            <section>
                <ion-icon name="code-slash"></ion-icon>
                <h3>Graduação em andamento</h3>
                <h2>Sistemas de Informação - Universidade Federal de Minas Gerais (UFMG)</h2>
                <h3>2020 - atual</h3>  
            </section>
        </article>
    </div>
  )
}

export default Academic