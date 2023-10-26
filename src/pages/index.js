import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile.js'
import Gallery from './components/gallery.js'
import Profile from './qcomps/profile_mistake.js'
import Comp from './qcomps/firstcomp.js'
import Bio from './qcomps/bios.js'
import TodoList from './qcomps/todos.js'
//import Counter from './components/snapshot.js'
//import Form from "./components/snapshot2.js"
import Counter from './components/queueUpdates.js'
import RequestTracker from "./qcomps/shoppingCart.js"
import Form from './components/updObjects.js'
import Scoreboard from './qcomps/updObjectsForm.js'
import List from './qcomps/artistsRemoveArr.js'
import BucketList from './qcomps/arrObj.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <BucketList />
    </div>
  )
}
