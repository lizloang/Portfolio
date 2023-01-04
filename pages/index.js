import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>LizLoang</title>
        <meta name="description" content="Lizbeth portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-red-600">
        <h1 className='text-2xl '>Liz Loang portfolio</h1>
      </main>
    </>
  )
}
