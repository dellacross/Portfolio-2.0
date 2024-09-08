import React, { createContext } from 'react'
import './Wrapper.css'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import Home from '../../pages/Home/Home'
import AboutMe from '../../pages/AboutMe/AboutMe'
import Academic from '../../pages/Academic/Academic'
import Knowledge from '../../pages/Knowledge/Knowledge'
import Projects from '../../pages/Projects/Projects'

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
        <Academic />
        <Knowledge />
        <Projects />
      </div>
    </PagesContext.Provider>
  )
}

export default Wrapper