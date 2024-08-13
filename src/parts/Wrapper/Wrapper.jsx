import React, { createContext, useState, useEffect } from 'react'
import './Wrapper.css'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import Home from '../../pages/Home/Home'
import AboutMe from '../../pages/AboutMe/AboutMe'

export const PagesContext = createContext({})

const Wrapper = () => {

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const { deltaY } = event
      console.log("dy", deltaY)

      setCurrentSection((prev) => prev+deltaY)
    }

    window.addEventListener('wheel', handleScroll, { passive: false });

    // Cleanup para remover o event listener
    return () => {
      window.removeEventListener('wheel', handleScroll);
    }
  }, []);

  useEffect(() => {console.log("cs", currentSection)}, [currentSection])

  return (
    <PagesContext.Provider
      value={{currentSection}}
    >      
      <div id="wrapper">
        <VerticalNav />
        <Home />
        <AboutMe />
      </div>
    </PagesContext.Provider>
  )
}

export default Wrapper