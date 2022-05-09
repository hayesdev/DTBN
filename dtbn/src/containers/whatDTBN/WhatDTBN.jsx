import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatDTBN.css'

const WhatDTBN = () => {
  return (
    <div className="dtbn__whatdtbn section__margin" id='whatdtbn'>
      <div className="dtbn__whatdtbn-feature">
        <Feature />  
      </div>
      <div className="dtbn__whatdtbn-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="dtbn__whatdtbn-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatDTBN