import React from 'react'
import './VerticalNav.css'

const VerticalNav = () => {

  return (
    <nav id="vertical-nav">
      <button>
        <ion-icon name="home"></ion-icon>
      </button>
      <button>
        <ion-icon name="person"></ion-icon>
      </button>
      <button>
        <ion-icon name="school"></ion-icon>
      </button>
      <button>
        <ion-icon name="ribbon"></ion-icon>
      </button>
      <button>
        <ion-icon name="code"></ion-icon>
      </button>
    </nav>
  )
}

export default VerticalNav