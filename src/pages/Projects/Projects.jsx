import React, { useState, useEffect } from 'react'
import './Projects.css'
import Project from '../../components/Projects/Project'
import { GetProjects } from '../../utils/Projects'

const Projects = () => {

    const [projects, setProjects] = useState(null)

    useEffect(() => {
        if(!projects) {

            const handleGetProjects = async () => {
                const _projects = await GetProjects()
                setProjects(_projects)
            }

            handleGetProjects()
        }
    }, [projects])

    return (
        <div id="projects">
            <header>
                <h1>
                    <b>PROJETOS</b>
                    <span>PRÁTICA</span>
                </h1>
            </header>
            <article>
                {
                    projects && projects?.map((item, index) => (
                        <Project 
                            key={index}
                            item={item}
                        />
                    ))
                }
            </article>
        </div>
    )
}

export default Projects