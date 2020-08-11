import Head from 'next/head'
import LeftSide from '../components/left-side'
import RightSide from '../components/right-side'

export default function Home() {
	return (
		<div className='app'>
			<Head>
				<title>YoungMahesh</title>
				<meta name='description' content='Mahesh Ghamand Profile' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='/styles/index.css' />
				<link rel='stylesheet' href='/styles/left-side.css' />
				<link rel='stylesheet' href='/styles/right-side.css' />
				<link rel='stylesheet' href='/styles/font-awesome.css' />
			</Head>

			<LeftSide />

			<RightSide />
		</div>
	)
}
