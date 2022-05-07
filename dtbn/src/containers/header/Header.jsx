import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

const Header = () => {
  return (
    <div className="dtbn__header section__padding" >
      <div className="dtbn__header-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing With DTBN-1 OpenAI
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto doloremque nesciunt fugiat sunt aut libero a enim consequatur voluptatibus perspiciatis porro sapiente ex totam, hic modi aliquid quos laborum, voluptatum quo qui nemo non at ab. Iure, sapiente eaque?</p>
        <div className="dtbn__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="dtbn__header-content__people">
          <img src={people} alt="people" />
          <p>1697 people requested access or visited in last 24 hours</p>
        </div>
      </div>        
      <div className="dtbn__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header