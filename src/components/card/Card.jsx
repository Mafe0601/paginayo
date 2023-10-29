import React from 'react'
import "./card.css"
import foto from "../../assests/images/logoyo1.png"
import { Typewriter, Cursor } from 'react-simple-typewriter'

const Card = ({texto1,texto3}) => {
  return (
    <div className='card'>
      <div className='texto'>
        <h2 className='subtitulo'>
            {texto1}
        </h2>
        <h1 className='titulo'>
          <Typewriter
            words={['María Arana', 'Content Manager', 'SEM Manager']}
            loop={0}
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000} 
          />
          <Cursor cursorColor='blue'/>
        </h1>
        <h2 className='subtitulo'>
            {texto3}
        </h2>
      </div>
      <div className="container__Image">
        <img src={foto} alt="" />
      </div>
    </div>
  )
}

export default Card
