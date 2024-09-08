import React, { useState, useEffect } from 'react'
import './Knowledge.css'
import { GetExperiences } from '../../utils/Experiences'
import Certificate from '../../components/Knowledge/Certificate'

const Knowledge = () => {

    const [experiences, setExperiences] = useState(null)

    useEffect(() => {
        if(!experiences) {
            const handleGetExperiences = async () => {
                const _experiences = await GetExperiences()
                setExperiences(_experiences)
            }
            handleGetExperiences()
        }
    }, [experiences])

  return (
    <div id="knowledge">
        <header>
            <h1>
                <b>EXPERIÊNCIA</b>
                <span>CONHECIMENTO</span>
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

export default Knowledge