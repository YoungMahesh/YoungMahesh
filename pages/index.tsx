import Head from 'next/head'
import LeftSide from '../components/LeftSide'
import RightSide from '../components/RightSide'


export default function Home() {
	return (
		<div className='app'>
			<Head>
				<title>YoungMahesh</title>
			</Head>

			<LeftSide />
			<RightSide />
		</div>
	)
}
