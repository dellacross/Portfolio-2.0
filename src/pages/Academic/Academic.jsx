import React, { useState, useEffect } from 'react'
import './Academic.css'
import { GetAcademic } from '../../utils/Academic'
import AcademicExperience from '../../components/Academic/AcademicExperience'

const Academic = () => {
<<<<<<< HEAD
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
=======

    const [academic, setAcademic] = useState(null)

    useEffect(() => {
        if(!academic) {
            const getAcademic = async () => {
                const _academic = await GetAcademic()
                setAcademic(_academic)
            }
            
            getAcademic()
        }
    }, [academic])

    return (
        <div id="academic">
            <header>
                <h1>
                    FORMAÇÃO&nbsp;<b>ACADÊMICA</b>
                    <span>EDUCAÇÃO</span>
                </h1>
            </header>
            <article>
                {
                    academic && academic.map((item, index) => (
                        <AcademicExperience 
                            key={index} 
                            item={item} 
                        />
                    ))
                }
            </article>
        </div>
    )
>>>>>>> c7c3dbd351b62a00999666d52b6346ff17b22f4a
}

export default Academic