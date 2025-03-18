import React, { useState, useEffect } from 'react'
import './Professional.css'
import { GetProfissionalExperiences } from '../../utils/Professional'
import Certificate from '../../components/Knowledge/Certificate'

const Professional = () => {
    const [experiences, setExperiences] = useState(null)

    useEffect(() => {
        if(!experiences) {
            const handleGetExperiences = async () => {
                const _experiences = await GetProfissionalExperiences()
                setExperiences(_experiences)
            }
            handleGetExperiences()
        }
    }, [experiences])

  return (
    <div id="professional">
        <header>
            <h1>
                <b>EXPERIÊNCIA</b>
                <span>PROFISSIONAL</span>
            </h1>
        </header>
        <article>
            {
                experiences && experiences?.map((item, index) => (
                    <Certificate 
                        key={index}
                        item={item}
                    />
                ))
            }
        </article>
    </div>
  )
}

export default Professional