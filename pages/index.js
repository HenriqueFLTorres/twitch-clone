import Head from 'next/head'
import Image from 'next/image'
import AutoPlayVideo from '../components/MainPage/AutoPlayVideo'
import Carrousel from '../components/MainPage/Carrousel'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar/SideBar'

import style from '../styles/MainPage.module.scss'

export default function Home() {
  return (
    <div className={style.MainBackground}>
        <Navbar/>
        <SideBar/>
        <div className={style.PageContent}>
          <Carrousel/>
        </div>
    </div>
  )
}
