import  { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import {invoke} from 'skia-wallet';
import { TokenDapp } from "../components/TokenDapp"

import styles from "../styles/Home.module.css"

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Argent x StarkNet test dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
            <TokenDapp />
      </main>
    </div>
  )
}

export default Home
