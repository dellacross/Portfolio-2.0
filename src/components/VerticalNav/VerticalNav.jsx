import React, { useState, useEffect } from 'react'
import './VerticalNav.css'
import { GetNavItems } from '../../utils/NavItems';

const VerticalNav = () => {

  const [currentSection, setCurrentSection] = useState('');
  const [navItems, setNavItems] = useState(null)

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if(!navItems) {
      const handleGetNavItems = async () => {
        const _projects = await GetNavItems()
        setNavItems(_projects)
      }

      handleGetNavItems()
    }
  }, [navItems])	

  useEffect(() => {
    const sections = ['home', 'about-me', 'professional', 'academic', 'knowledge', 'projects'];
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav id="vertical-nav">
      {
        navItems && navItems.map((item, index) => (
          <button 
            key={index}
            onClick={() => handleClick(item.title)}
            className={currentSection === item.title ? 'active' : ''}
          >
            <ion-icon name={item.icon}></ion-icon>
          </button>
        ))
      }
    </nav>
  )
}

export default VerticalNav