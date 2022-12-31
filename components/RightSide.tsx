import ProjectBox from './ProjectBox'

export default function RightSide() {
  return (
    <article className="right">
      <section className="info-block">
        <h3 className="info-title">INTRO</h3>
        <div className="content">
          <div className="content-block">
            <p>Working as Web-developer since Jan-2019</p>
          </div>
        </div>
      </section>

      <section className="info-block">
        <h3 className="info-title">EXPERIENCE</h3>
        <div className="content">
          <ProjectBox
            name="Web3werx"
            link="https://web3werx.com/"
            description="Working as a full-stack web3 developer since July-2021"
          />
        </div>
      </section>

      <section className="info-block">
        <h3 className="info-title">PROJECTS</h3>
        <div className="content">
          <ProjectBox
            name="Timers"
            link="https://timers0.vercel.app/"
            description="A full-stack app to create Time-based targets and track your progress in real-time"
          />
          <ProjectBox
            name="Notes"
            link="https://notes0.vercel.app/"
            description="Save your notes in a simple, open-source, ad-free project."
          />
          <ProjectBox
            name="Tools"
            link="https://tools0.vercel.app/"
            description="A collection of various utilities which includes text-encryption,web3-wallet generatoration, 
                FD Calculator, Loan Calculator, etc"
          />
          <ProjectBox
            name="IN (URL-shortner)"
            link="https://in.vercel.app/"
            description='Shorten URLs to your own custom-url starting with "in.vercel.app/"'
          />
          <ProjectBox
            name="Telegraph"
            link="https://telegraph.vercel.app/"
            description="Clone of famous 'telegr.ph', with additional functionality to
              delete post"
          />
          <ProjectBox
            name="Sticky Notes"
            link="https://keep0.vercel.app/"
            description="Quickly create/publish, edit, delete sticky notes on Internet, no
              need to Login"
          />
        </div>
      </section>

      <section className="info-block">
        <h3 className="info-title">SKILLS</h3>
        <div className="content">
          <div className="content-block">
            <h4>Languages: </h4>
            <span>
              JavaScript (ES6), Typescript, HTML5, CSS3, Solidity, Rust for
              Solana
            </span>
          </div>

          <div className="content-block">
            <h4>Libraries & Frameworks: </h4>
            <span>
              NodeJS, NextJS, Hardhat, Anchor for Solana, Tailwind, Prisma
            </span>
          </div>

          <div className="content-block">
            <h4>Tools: </h4>
            <span>Git, Bash, VS Code</span>
          </div>
        </div>
      </section>

      <section className="info-block">
        <h3 className="info-title">EDUCATION</h3>
        <div className="content">
          <div className="content-block">
            <h4>University: </h4>
            <span>Yashwantrao Chavan Open University</span>
          </div>

          <div className="content-block">
            <h4>College: </h4>
            <span>
              <em>KSK college, Beed</em>
            </span>
          </div>

          <div className="content-block">
            <h4>Course: </h4>
            <span>Bachelor of Commerce</span>
          </div>

          <div className="content-block">
            <h4>Duration: </h4>
            <span>May 2016 - May 2019</span>
          </div>
        </div>
      </section>

      <a
        className="pdf-link"
        href="https://filedn.com/lKynGAEFLyJzDVbxA8PDmdk/mahesh_resume.pdf"
        target="_blank"
        rel="noreferrer"
        download
      >
        <p>GRAB A PDF OF MY FULL RESUME</p>
      </a>
    </article>
  )
}
