export default function RightSide() {
   return(
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
               <a className='project-name' href='https://crownclothing.now.sh/' target='_blank'>
                  Crown-Clothing
               </a>
               <p className='project-description'>
                  My first project build while learning from a Udemy course on ReactJS
               </p>

               <a className='project-name' href='https://notebook007.now.sh/' target='_blank'>
                  Notebook007
               </a>
               <p className='project-description'>
                  A reference guide for a web-developer.
               </p>

               <a className='project-name' href='https://techtube.now.sh/' target='_blank'>
                  TechTube
               </a>
               <p className='project-description'>
                  Collection of best tech-videos using YouTube api. [Website in development]
               </p>
            </div>

         </div>

         <div className='info-block'>
            <h4 className='info-title'>SKILLS</h4>
            <div className='content'>
               <p>
                  <b>LANGUAGES:</b>  JavaScript (ES6), HTML5, CSS3, C++, Python
               </p>
               <p>
                  <b>LIBRARIES & FRAMEWORKS:</b> Node, React, NextJS, GatsbyJS, Firebase, MongoDB, Express
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
                  <b><em>Yashwantrao Chavan Open University
                  KSK college, Beed</em></b>
               </p>
               <p>
                  <b>Course: </b>Bachelor of Commerce
               </p>
               <p>
                  <b>Duration: </b>May 2016 - May 2019
               </p>
            </div>
         </div>



         <a className='pdf-link' href='https://www.dropbox.com/s/2d56l22t6q0pszk/Mahesh%20Resume.pdf?raw=1' target='_blank'>
               <p>GRAB A PDF OF MY FULL RESUME</p>
            </a>

      </div>
   )
}