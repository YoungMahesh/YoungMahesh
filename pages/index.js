import Head from 'next/head'
import LeftSide from '../components/left-side'

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>YoungMahesh</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/all.min.css" />
      </Head>

      <LeftSide />

    </div>
  )
}
