export default function RightSide() {
	return (
		<div className='right'>
			<div className='info-block'>
				<h4 className='info-title'>INTRO</h4>
				<div className='content'>
					<p>Recently completed my B.Com from KSK college, Beed.</p>
					<p>I started web-development since last year.</p>
				</div>
			</div>

			<div className='info-block'>
				<h4 className='info-title'>PROJECTS</h4>
				<div className='content'>
					<p>
						<a
							className='project-name'
							href='https://quick-json-api.now.sh'
							target='_blank'
						>
							Quick-JSON-API
						</a>
						Quick Create, Edit, Use(fetch on any website or server) and
						Delete your API
					</p>
					<p>
						<a
							className='project-name'
							href='https://techtube.now.sh/'
							target='_blank'
						>
							TechTube
						</a>
						Collection of best tech-videos using YouTube api. [Website in
						development]
					</p>
					<p>
						<a
							className='project-name'
							href='https://crownclothing.now.sh/'
							target='_blank'
						>
							Crown-Clothing
						</a>
						My first project build while learning from a Udemy course on
						ReactJS
					</p>
				</div>
			</div>

			<div className='info-block'>
				<h4 className='info-title'>SKILLS</h4>
				<div className='content'>
					<p>
						<b>LANGUAGES:</b> JavaScript (ES6), HTML5, CSS3, C++, Python
					</p>
					<p>
						<b>LIBRARIES & FRAMEWORKS:</b> Node, React, NextJS, GatsbyJS,
						Firebase, MongoDB, Express
					</p>
					<p>
						<b>TOOLS:</b> Git & Github, Bash, GIMP, Figma
					</p>
				</div>
			</div>

			<div className='info-block'>
				<h4 className='info-title'>EDUCATION</h4>
				<div className='content'>
					<p>
						<b>Yashwantrao Chavan Open University</b>
					</p>
					<p>
						<b>
							<em>KSK college, Beed</em>
						</b>
					</p>
					<p>
						<b>Course: </b>Bachelor of Commerce
					</p>
					<p>
						<b>Duration: </b>May 2016 - May 2019
					</p>
				</div>
			</div>

			<a className='pdf-link' href='/assets/Mahesh_Resume.pdf' download>
				<p>GRAB A PDF OF MY FULL RESUME</p>
			</a>
		</div>
	)
}
