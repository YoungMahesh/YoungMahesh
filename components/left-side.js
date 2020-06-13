export default function LeftSide () {
   return(
      <div className='left'>
         <div className='left-inner'>
            <div className='info'>
               <h2 className='name'>Hey, I am Mahesh</h2>
               <p className='subtext'>Web developer, based in Beed, Maharashtra.</p>
               <div className='social-links'>
                  <a className='icon1' href='https://twitter.com/MGhamand' target='_blank'>
                  <i className="fab fa-twitter fa-2x" style={{color: 'black'}}></i>
                  </a>
                  <a className='icon1' href='https://github.com/YoungMahesh' target='_blank'>
                  <i className="fab fa-github fa-2x" style={{color: 'black'}}></i>
                  </a>
                  <a className='icon1' href='https://www.linkedin.com/in/mahesh-ghamand-114a7b191/' target='_blank'>
                  <i className="fab fa-linkedin-in fa-2x" style={{color: 'black'}}></i>
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}