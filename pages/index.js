import Head from 'next/head'
import '../styles/index.css'
import LeftSide from '../components/left-side'
import RightSide from '../components/right-side'

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>YoungMahesh</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/all.min.css" />
      </Head>

      <LeftSide />

      <RightSide />

      <style jsx global>{`
        @font-face {
          font-family: Catamaran;
          src: url(./fonts/Catamaran-Regular.ttf) format("truetype");
          font-weight: normal;
        }

        @font-face {
            font-family: CatamaranBold;
            src: url(./fonts/Catamaran-ExtraBold.ttf) format("truetype");
            font-weight: bolder;
        }
      `}</style>

    </div>
  )
}
