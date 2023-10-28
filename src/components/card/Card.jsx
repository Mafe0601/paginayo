import React from 'react'
import "./card.css"

const Card = ({texto1,texto2,texto3}) => {
  return (
    <div className='card'>
      <div className='texto'>
        <h2 className='subtitulo'>
            {texto1}
        </h2>
        <h1 className='titulo'>
            {texto2}
        </h1>
        <h2 className='subtitulo'>
            {texto3}
        </h2>
      </div>
    </div>
  )
}

export default Card
