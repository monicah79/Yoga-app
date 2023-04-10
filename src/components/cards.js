import React from 'react'
import CardsItem from './CardsItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out this EPIC Experiences</h1>
      <div className='cards__container'>
       <div className='cards__wrapper'>
         <ul className='cards__items'>
            <CardsItem 
            src='images/card-1.jpeg'
            text="Enjoy a smooth flow of yoga sequence to awaken, energize, and relax your body.
             Physically, mentally, and emotionally."
             label='Relaxation'
             path='/Services'
            />
            <CardsItem 
            src='images/card-2.jpeg'
            text="Have fun by strengthening your body by combining yoga and acrobatics."
             label='Power'
             path='/Services'
            />
            <CardsItem 
            src='images/card-3.jpeg'
            text="Have fun by strengthening your body by combining yoga and acrobatics."
             label='Power'
             path='/Services'
            />
         </ul>
         <ul className='cards__items'>
            <CardsItem 
            src='images/card-4.jpeg'
            text="Enjoy a smooth flow of yoga sequence to awaken, energize, and relax your body.
             Physically, mentally, and emotionally."
             label='Relaxation'
             path='/Services'
            />
            <CardsItem 
            src='images/card-5.jpeg'
            text="Have fun by strengthening your body by combining yoga and acrobatics."
             label='Power'
             path='/Services'
            />
            <CardsItem 
            src='images/card-6.jpeg'
            text="Have fun by strengthening your body by combining yoga and acrobatics."
             label='Power'
             path='/Services'
            />
         </ul>
       </div>
      </div>
    </div>
  )
}

export default Cards;
