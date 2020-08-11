export default function RightSide() {
	return (
		<article className='right'>
			<section className='info-block'>
				<h3 className='info-title'>INTRO</h3>
				<div className='content'>
					<div className='content-block'>
						<p>Recently completed my B.Com from KSK college, Beed.</p>
						<p>I started web-development since last year.</p>
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

					<div className='content-block'>
						<h4>
							<a
								className='black'
								href='https://crownclothing.now.sh/'
								target='_blank'
								rel='noopener'
							>
								Crown-Clothing
							</a>
						</h4>
						<p>
							My first project build while learning from a Udemy course
							on ReactJS
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
							JavaScript (ES6), TypeScript, HTML5, CSS3, C++17, Python3
						</span>
					</div>

					<div className='content-block'>
						<h4>Libraries & Frameworks: </h4>
						<span>
							Node, React, NextJS, GatsbyJS, Firebase, MongoDB, Express
						</span>
					</div>

					<div className='content-block'>
						<h4>Tools: </h4>
						<span>Git & Github, Bash, GIMP, Figma</span>
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

			<a className='pdf-link' href='/assets/Mahesh_Resume.pdf' download>
				<p>GRAB A PDF OF MY FULL RESUME</p>
			</a>
		</article>
	)
}
