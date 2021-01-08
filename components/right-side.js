export default function RightSide() {
	return (
		<article className='right'>
			<section className='info-block'>
				<h3 className='info-title'>INTRO</h3>
				<div className='content'>
					<div className='content-block'>
						<p>Completed my B.Com from KSK college, Beed in May-2019.</p>
						<p>I started web-development since Jan-2019.</p>
					</div>
				</div>
			</section>

			<section className='info-block'>
				<h3 className='info-title'>PROJECTS</h3>
				<div className='content'>
					<div className='content-block'>
						<h4>
							<a
								className='black'
								href='https://quick-json-api.now.sh'
								target='_blank'
								rel='noopener'
							>
								Quick-JSON-API
							</a>
						</h4>
						<p>
							Quick Create, Edit, Use(fetch on any website or server) and
							Delete your API
						</p>
					</div>

					<div className='content-block'>
						<h4>
							<a
								className='black'
								href='https://telegraph.now.sh/'
								target='_blank'
								rel='noopener'
							>
								Telegraph
							</a>
						</h4>
						<p>
							Clone of famous 'telegr.ph', with additional functionality to delete post
						</p>
					</div>

					<div className='content-block'>
						<h4>
							<a
								className='black'
								href='https://in.now.sh/'
								target='_blank'
								rel='noopener'
							>
								IN (URL-shortner)
							</a>
						</h4>
						<p>
							Shorten URLs to your own custom-url starting with "in.now.sh/"
						</p>
					</div>

					<div className='content-block'>
						<h4>
							<a
								className='black'
								href='https://crypt0.now.sh/'
								target='_blank'
								rel='noopener'
							>
								Crypt0
							</a>
						</h4>
						<p>
							Encrypt and Decrypt text with your own password
						</p>
					</div>

					<div className='content-block'>
						<h4>
							<a
								className='black'
								href='https://miniprojects.now.sh/'
								target='_blank'
								rel='noopener'
							>
								MiniProjects
							</a>
						</h4>
						<p>
							Convert cloud storage (Google drive, Onedrive, Dropbox, Github) sharing link to direct download link, Compound Interest Calculater
						</p>
					</div>

					<div className='content-block'>
						<h4>
							<a
								className='black'
								href='https://keep0.now.sh/'
								target='_blank'
								rel='noopener'
							>
								Sticky Notes
							</a>
						</h4>
						<p>
							Quickly create/publish, edit, delete sticky notes on Internet, no need to Login
						</p>
					</div>

					<div className='content-block'>
						<h4>
							<a
								className='black'
								href='https://techtube.now.sh/'
								target='_blank'
								rel='noopener'
							>
								TechTube
							</a>
						</h4>
						<p>
							Collection of best tech-videos using YouTube api. [Website
							in development]
						</p>
					</div>

				</div>
			</section>

			<section className='info-block'>
				<h3 className='info-title'>SKILLS</h3>
				<div className='content'>
					<div className='content-block'>
						<h4>Languages: </h4>
						<span>
							JavaScript (ES6), TypeScript, HTML5, CSS3, C++14, Python3
						</span>
					</div>

					<div className='content-block'>
						<h4>Libraries & Frameworks: </h4>
						<span>
							Node, React, NextJS, Firebase, Express
						</span>
					</div>

					<div className='content-block'>
						<h4>Tools: </h4>
						<span>Git & Github, Bash, cURL</span>
					</div>
				</div>
			</section>

			<section className='info-block'>
				<h3 className='info-title'>EDUCATION</h3>
				<div className='content'>
					<div className='content-block'>
						<h4>University: </h4>
						<span>Yashwantrao Chavan Open University</span>
					</div>

					<div className='content-block'>
						<h4>College: </h4>
						<span>
							<em>KSK college, Beed</em>
						</span>
					</div>

					<div className='content-block'>
						<h4>Course: </h4>
						<span>Bachelor of Commerce</span>
					</div>

					<div className='content-block'>
						<h4>Duration: </h4>
						<span>May 2016 - May 2019</span>
					</div>
				</div>
			</section>

			<a className='pdf-link' href='/assets/mahesh-resume.pdf' download>
				<p>GRAB A PDF OF MY FULL RESUME</p>
			</a>
		</article>
	)
}
