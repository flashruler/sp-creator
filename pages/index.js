import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Menu_Bar from '../components/menu_bar.js'
import User from '../components/user.js'
import Playlists from '../components/playlists'

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#191716]">
<Menu_Bar/>
<User/>
<Playlists/>
    </div>
  )
}
