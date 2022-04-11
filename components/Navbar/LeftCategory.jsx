import React, { useState } from 'react'

import TwitchLogo from "../../public/svg/TwitchLogo.js"
import MoreOptions from "../../public/svg/MoreOptions.js"

import styles from '../../styles/Navbar.module.scss'
import classNames from 'classnames'

const LeftCategory = () => {
    const [moreOptions, setMoreOptions] = useState()

  return (
    <div className={styles.LeftCategory}>
        <TwitchLogo className={styles.Icon} />
        <p>Following</p>
        <p>Browse</p>
        <div className={styles.IconContainer} name="More" >
            <MoreOptions className={styles.IconMoreOptions}  onClick={() => setMoreOptions(!moreOptions)}  />
        </div>
        <div className={classNames( styles.moreOptions, { [styles.active]: moreOptions })}>
            <h3>GENERAL</h3>
            <ul>About</ul>
            <ul>Advertisers</ul>
            <ul>Blog</ul>
            <ul>Developers</ul>
            <ul>Download Apps</ul>
            <ul>Gift Card</ul>
            <ul>IGBD</ul>
            <ul>Jobs</ul>
            <ul>Loot Cave - Merch Store</ul>
            <ul>Music on Twitch</ul>
            <ul>Partners</ul>
            <ul>Press</ul>
            <ul>Turbo</ul>
        </div>
    </div>
  )
}

export default LeftCategory