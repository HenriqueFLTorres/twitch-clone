import React, { useState } from 'react'

import PrimeLoot from '../../public/data/PrimeLoot.json'
import NotificationsData from '../../public/data/NotificationsData.json'

import Loots from '../../public/svg/Loots.js'
import Notifications from '../../public/svg/Notifications.js'
import Bits from "../../public/svg/Bits.js"
import Messages from '../../public/svg/Messages.js'
import Close from '../../public/svg/Close'
import Settings from '../../public/svg/Settings'
import ReadMessages from '../../public/svg/ReadMessages'

import styles from '../../styles/Navbar/RightCategory.module.scss'
import classNames from 'classnames'
import Image from 'next/image'

const RightCategory = () => {
    const [windowOpened, setWindowOpened] = useState()
    const [notificationsTab, setNotificationsTab] = useState("Twitch")

    const iconContainerClass = (name) => classNames( styles.IconContainer,   { [styles.open]: windowOpened === name } )

  return (
        <div className={styles.RightCategory} >
            <div className={ iconContainerClass("Loots") } name="Loots" >
                <Loots onClick={() => setWindowOpened( windowOpened === "Loots" ? "" : "Loots" )} className={styles.Icon} />

                    <div className={ classNames( styles.Dialog, { [styles.open]: windowOpened === "Loots" } )}>
                        <div className={styles.head}>
                            <h1>Prime Gaming Loot</h1>
                            <Close className={styles.Icon} onClick={() => setWindowOpened(null)}/>
                        </div>
                        <div className={styles.primeLootContainer}>
                            { PrimeLoot.map((item) => {
                                const { title, image, description, subDescription } = item
                                return (
                                    <div className={styles.lootContainer} key={image}>
                                        <h1>{title}</h1>
                                        <Image src={image} alt={title} width={320} height={180} />
                                        { description ? <h3>{description}</h3> : null }
                                        <h5>{subDescription}</h5>
                                        <button className={styles.FreeTrial}>Start Your Free Trial</button>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>

            </div>
            <div className={ iconContainerClass("Notifications") } name="Notifications" >
                <Notifications onClick={() => setWindowOpened("Notifications")} className={styles.Icon} />

                <div className={ classNames( styles.Dialog, { [styles.open]: windowOpened === "Notifications" } )}>
                        <div className={styles.head}>
                            <ReadMessages  className={styles.Icon} />
                            <ReadMessages  className={styles.IconInvisible} />
                            <h1>Notifications</h1>
                            <Settings className={styles.Icon}/>
                            <Close className={styles.Icon} onClick={() => setWindowOpened(null)}/>
                        </div>
                        <div className={styles.switchTab}>
                            <div className={styles.tabText}>
                                <p className={ classNames( [styles.text], { [styles.Active]: notificationsTab === "Twitch" } )} onClick={() => setNotificationsTab("Twitch")}>
                                    My Twitch (27)
                                </p>
                                <p className={ classNames( [styles.text], { [styles.Active]: notificationsTab === "Channel" } )} onClick={() => setNotificationsTab("Channel")}>
                                    My Channel (12)
                                </p>
                            </div>
                            <div className={ classNames( [styles.tabBorder], { [styles.tabBorderTwo]: notificationsTab === "Channel" } )}></div>
                        </div>
                        <div className={styles.mainNotificationsContainer}>
                            <p className={styles.mostRecent}>MOST RECENT</p>
                            { NotificationsData.map((item, index) => {
                                const { image, description, time } = item
                                return (
                                    <div className={styles.notificationsContainer} key={index}>
                                        <img src={image} alt="" />
                                        <div className={styles.Description}>
                                            <h5>{description}</h5>
                                            <p>{time}</p>
                                        </div>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>

            </div>
            <div className={ iconContainerClass("Messages") } name="Messages" >
                <Messages onClick={() => setWindowOpened("Messages")} className={styles.Icon} />
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