import React from 'react'

import Loots from '../../public/svg/Loots.js'
import Notifications from '../../public/svg/Notifications.js'
import Bits from "../../public/svg/Bits.js"
import Messages from '../../public/svg/Messages.js'

import styles from '../../styles/Navbar.module.scss'

const RightCategory = () => {
  return (
        <div className={styles.RightCategory} >
            <div className={styles.IconContainer} name="Loots" >
                <Loots className={styles.Icon} />
            </div>
            <div className={styles.IconContainer} name="Notifications" >
                <Notifications className={styles.Icon} />
            </div>
            <div className={styles.IconContainer} name="Messages" >
                <Messages className={styles.Icon} />
            </div>
            <div className={styles.GetBits}>
                <Bits className={styles.Icon} />
                <p>Get Bits</p>
            </div>
            <img src="images/DefaultAvatar.png" alt="Default Avatar" className={styles.Avatar} />
        </div>
  )
}

export default RightCategory