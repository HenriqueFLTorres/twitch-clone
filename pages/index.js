import React, { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import AutoPlayVideo from '../components/MainPage/AutoPlayVideo'
import Carrousel from '../components/MainPage/Carrousel'
import RecommendedChannels from '../components/MainPage/RecommendedChannels'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar/SideBar'

import style from '../styles/MainPage.module.scss'
import Categories from '../components/MainPage/Categories'

export default function Home() {
  const [collapse, setCollapse] = useState(false)

  return (
    <div className={style.MainBackground}>
        <Navbar />
        <SideBar collapse={collapse} setCollapse={setCollapse} />
        <div className={style.PageContent}>
          <Carrousel collapse={collapse} />
          <RecommendedChannels collapse={collapse} />
          <Categories />
        </div>
    </div>
  )
}
