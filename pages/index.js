import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar/SideBar'

import style from '../styles/MainPage.module.scss'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <SideBar/>
    </div>
  )
}
