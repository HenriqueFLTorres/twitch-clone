import React, { useState } from 'react'

import AutoPlayVideo from './AutoPlayVideo'

import style from '../../styles/MainPage/Carrousel.module.scss'
import Arrow from '../../public/svg/Arrow'

const Carrousel = () => {
    const [generalPosition, setGeneralPosition] = useState(0)

    const checkPosition = (num) => {
        let newNumber = num
        if ( newNumber >= 5 || newNumber <= -5 ) {
            newNumber = 0
        }
        return newNumber
    }
    
    console.log(generalPosition);

  return (
    <div className={style.carrousel}>
        <div className={style.iconContainer} onClick={ ()  => setGeneralPosition( checkPosition( generalPosition + 1 ) ) }>
            <Arrow className={style.ArrowLeft} />
        </div>
        <AutoPlayVideo position={generalPosition - 2} text="Position -2" />
        <AutoPlayVideo position={generalPosition - 1} text="Position -1" />
        <AutoPlayVideo position={generalPosition} text="Position 0" />
        <AutoPlayVideo position={generalPosition + 1} text="Position +1" />
        <AutoPlayVideo position={generalPosition + 2} text="Position +2" />
        <div className={style.iconContainer}>
            <Arrow className={style.ArrowRight} onClick={ ()  => setGeneralPosition( checkPosition( generalPosition - 1 ) ) }/>
        </div>
    </div>
  )
}

export default Carrousel