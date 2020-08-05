export default function LeftSide() {
	return (
		<div className='left'>
			<div className='info'>
				<h2 className='name'>Hey, I'm Mahesh</h2>
				<p className='subtext'>
					Web developer, based in Beed, Maharashtra.
				</p>

				<div className='social-links'>
					<a
						className='icon1'
						href='https://twitter.com/MGhamand'
						target='_blank'
					>
						<i
							className='fab fa-twitter fa-lg'
							style={{ color: 'white' }}
						></i>
					</a>
					<a
						className='icon1'
						href='https://github.com/YoungMahesh'
						target='_blank'
					>
						<i
							className='fab fa-github fa-lg'
							style={{ color: 'white' }}
						></i>
					</a>
					<a
						className='icon1'
						href='https://www.linkedin.com/in/mahesh-ghamand-114a7b191/'
						target='_blank'
					>
						<i
							className='fab fa-linkedin-in fa-lg'
							style={{ color: 'white' }}
						></i>
					</a>
					<a
						className='icon1'
						href='https://dev.to/youngmahesh'
						target='_blank'
					>
						<i
							className='fab fa-dev fa-2x'
							style={{ color: 'white', fontSize: '1.7em' }}
						></i>
					</a>
				</div>
			</div>
		</div>
	)
}
