import React from 'react'
import './VerticalNav.css'

const VerticalNav = () => {

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav id="vertical-nav">
      <button onClick={() => handleClick('home')}>
        <ion-icon name="home"></ion-icon>
      </button>
      <button onClick={() => handleClick('about-me')}>
        <ion-icon name="person"></ion-icon>
      </button>
      <button onClick={() => handleClick('academic')}>
        <ion-icon name="school"></ion-icon>
      </button>
      <button onClick={() => handleClick('knowledge')}>
        <ion-icon name="ribbon"></ion-icon>
      </button>
      <button onClick={() => handleClick('projects')}>
        <ion-icon name="code"></ion-icon>
      </button>
    </nav>
  )
}

export default VerticalNav