import Link from 'next/link'
import React from 'react'

import GitHub from '../../public/svg/GitHub'
import Language from '../../public/svg/Language'

import style from '../../styles/SmallComponents.module.scss'

const MadeBy = () => {
  return (
    <div className={style.MadeBy}>
        <h3>Developed</h3>
        <h1>Henrique Torres</h1>
        <div className={style.media}>
            <Link href="https://github.com/HenriqueFLTorres">
                <a target="_blank" className={style.IconContainer}>
                    <GitHub className={style.Icon} />
                </a>
            </Link>
            <Link href="https://htportfolio.vercel.app/">
                <a target="_blank" className={style.IconContainer}>
                    <Language className={style.Icon} />
                </a>
            </Link>
        </div>
    </div>
  )
}

export default MadeBy