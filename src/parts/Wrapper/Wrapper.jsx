import React from 'react'
import './Wrapper.css'
import VerticalNav from '../../components/VerticalNav/VerticalNav'

const Wrapper = ({children}) => {
  return (
    <div id="wrapper">
        <VerticalNav />
        {children}
    </div>
  )
}

export default Wrapper