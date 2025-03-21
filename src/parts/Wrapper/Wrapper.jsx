import React, { createContext } from 'react'
import './Wrapper.css'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import Home from '../../pages/Home/Home'
import AboutMe from '../../pages/AboutMe/AboutMe'
import Academic from '../../pages/Academic/Academic'
import Knowledge from '../../pages/Knowledge/Knowledge'
import Projects from '../../pages/Projects/Projects'
import Professional from '../../pages/Professional/Professional'

export const PagesContext = createContext({})

const Wrapper = () => {

  return (
    <PagesContext.Provider
      value={{}}
    >      
      <div id="wrapper">
        <VerticalNav />
        <Home />
        <AboutMe />
        <Professional />
        <Academic />
        <Knowledge />
        <Projects />
      </div>
    </PagesContext.Provider>
  )
}

export default Wrapper