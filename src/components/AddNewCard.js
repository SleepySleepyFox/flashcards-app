import React from 'react'
import './AddNewCard.css'

export default function AddNewCard({handleAdd, inpt, isAdded}) {
  return (
    <div className='to-add-card'>
        {inpt}
        <div className='to-add-card-content' onClick={handleAdd}>+</div>
    </div>
  )
}
