import React from 'react'

import GenericChannelList from './GenericChannelList'

import Collapse from '../../public/svg/Collapse'

import styles from '../../styles/SideBar/SideBar.module.scss'

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
        <div className={styles.topHead}>
            <p>FOLLOWED CHANNELS</p>
            <div className={styles.IconContainer}>
                <Collapse className={styles.Icon}/>
            </div>
        </div>
            <GenericChannelList />
            <p className={styles.RecommendedChannels}>RECOMMENDED CHANNELS</p>
            <GenericChannelList />
    </div>
  )
}

export default SideBar