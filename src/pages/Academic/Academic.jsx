import React, { useState, useEffect } from 'react'
import './Academic.css'
import { GetAcademic } from '../../utils/Academic'
import AcademicExperience from '../../components/Academic/AcademicExperience'

const Academic = () => {

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
                    academic && academic.map(({subtitle, title, time, icon}, index) => (
                        <AcademicExperience 
                            key={index} 
                            title={title}
                            subtitle={subtitle}
                            time={time}
                            icon={icon}
                        />
                    ))
                }
            </article>
        </div>
    )
}

export default Academic