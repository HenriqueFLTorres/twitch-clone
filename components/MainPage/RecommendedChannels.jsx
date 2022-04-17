import React from 'react'

import style from '../../styles/MainPage/RecommendedChannels.module.scss'
import ChannelDisplayer from './ChannelDisplayer'

import classNames from 'classnames'

const RecommendedChannels = ({ collapse }) => {

  const display = collapse ? 12 : 10;
   
  return (
    <div className={ classNames( style.Container, { [style.expand]: collapse } ) }>
      <h1>Live channels we think you’ll like</h1>
      <div className={style.ChannelList}>
      {Array(display).fill(<ChannelDisplayer />)}
      </div>
    </div>
  )
}

export default RecommendedChannels