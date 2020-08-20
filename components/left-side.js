export default function LeftSide() {
	return (
		<article className='left'>
			<section className='info'>
				<h2 className='name'>Hey, I'm Mahesh</h2>
				<p className='subtext'>
					Web developer, based in Beed, Maharashtra.
				</p>

				<div className='social-links'>
					<a
						className='icon1'
						href='https://twitter.com/YoungMahesh'
						target='_blank'
						rel='noopener'
						// with "noopener" new page opens in a seperate process which comes under "Best-Practices" in Lighthouse-audit
					>
						<img className='svg' src='/svgs/twitter.svg' />
					</a>
					<a
						className='icon1'
						href='https://github.com/YoungMahesh'
						target='_blank'
						rel='noopener'
					>
						<img className='svg' src='/svgs/github.svg' />
					</a>
					<a
						className='icon1'
						href='https://www.linkedin.com/in/YoungMahesh'
						target='_blank'
						rel='noopener'
					>
						<img className='svg' src='/svgs/linkedin.svg' />
					</a>
					<a
						className='icon1'
						href='https://dev.to/YoungMahesh'
						target='_blank'
						rel='noopener'
					>
						<img className='svg' src='/svgs/dev-dot-to.svg' />
					</a>
					<a
						className='icon1'
						href='mailto:maheshghamand@gmail.com'
						target='_blank'
						rel='noopener'
					>
						<img
							style={{ filter: 'invert(1)' }}
							className='svg'
							src='/svgs/mail.svg'
						/>
					</a>
				</div>
			</section>
		</article>
	)
}
