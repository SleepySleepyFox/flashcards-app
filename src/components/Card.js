import React from 'react'
import './Card.css'
import {CSSTransition} from 'react-transition-group'
import { useState } from 'react'

function Card({word, translation, remove, id}) {
  const [isFliped, setIsFliped] = useState(true)

  function handleCardFlip(){
    setIsFliped( (e) => !e)
  }


  return (
    <div className='outter-container'>

        <h3 onClick={remove}>x</h3>

      <CSSTransition
      in={isFliped}
      timeout={300}
      classNames='flip'
    >
      <div className='card-container' onClick={handleCardFlip}>
          <div className='card card-front'>
            {word}
          </div>
          <div className='card card-back'>
            {translation}
          </div>
      </div>
    </CSSTransition>
    </div>
  )
}

export default Card