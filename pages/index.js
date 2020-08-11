import Head from 'next/head'
import LeftSide from '../components/left-side'
import RightSide from '../components/right-side'

export default function Home() {
	return (
		<div className='app'>
			<Head>
				<title>YoungMahesh</title>
				<link rel='stylesheet' href='/styles/index.css' />
				<link rel='stylesheet' href='/styles/left-side.css' />
				<link rel='stylesheet' href='/styles/right-side.css' />
			</Head>

			<LeftSide />
			<RightSide />
		</div>
	)
}
