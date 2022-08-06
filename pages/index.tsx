import Head from 'next/head'
import LeftSide from '../components/LeftSide'
import RightSide from '../components/RightSide'


export default function Home() {
	return (
		<div className='app'>
			<Head>
				<title>YoungMahesh</title>
				<link rel='stylesheet' href='/styles/index.css' />
				<link rel='stylesheet' href='/styles/left-side.css' />
				<link rel='stylesheet' href='/styles/right-side.css' />
				<link
					href='https://fonts.googleapis.com/css2?family=Catamaran:wght@400;800&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<LeftSide />
			<RightSide />
		</div>
	)
}
