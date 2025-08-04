import './Professional.css'
import { useState, useEffect } from 'react'
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
                experiences?.map(({ title, tools, conclude, link, experience, company }, index) => (
                    <Certificate 
                        key={index}
                        title={title}
                        tools={tools}
                        conclude={conclude}
                        link={link}
                        experience={experience}
                        company={company}
                    />
                ))
            }
        </article>
    </div>
  )
}

export default Professional