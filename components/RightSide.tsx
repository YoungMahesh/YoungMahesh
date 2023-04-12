import ProjectBox from './ProjectBox'

export default function RightSide() {
  return (
    <article className="right">
      <section className="info-block">
        <h3 className="info-title">INTRO</h3>
        <div className="content">
          <div className="content-block">
            <p>Working as a Full-stack freelance Web-developer</p>
          </div>
        </div>
      </section>

      <section className="info-block">
        <h3 className="info-title">EXPERIENCE</h3>
        <div className="content">
          <ProjectBox
            name="Web3werx"
            link="https://web3werx.com/"
            description="Working as a full-stack web3 developer in freelance agency named Web3Werx"
          />
        </div>
      </section>

      <section className="info-block">
        <h3 className="info-title">PROJECTS</h3>
        <div className="content">
          <ProjectBox
            name="Timers"
            link="https://timers.mogali.in/"
            description="Save your notes in a simple, open-source, ad-free project."
          />
          <ProjectBox
            name="Notes"
            link="https://notes.mogali.in/"
            description="Save your notes in a simple, open-source, ad-free project."
          />
          <ProjectBox
            name="Tools"
            link="https://tools.mogali.in/"
            description="A collection of various utilities which includes text-encryption,web3-wallet generatoration, 
                FD Calculator, Loan Calculator, etc"
          />
          <ProjectBox
            name="IN (URL-shortner)"
            link="https://sh.mogali.in"
            description='Shorten URLs to your own custom-url starting with "sh.mogali.in" or "in.vercel.app"'
          />
          <ProjectBox
            name="Telegraph"
            link="http://telegraph.mogali.in/"
            description="Clone of famous 'telegr.ph', with additional functionality to
              delete post"
          />
          <ProjectBox
            name="Sticky Notes"
            link="https://sticky.mogali.in/"
            description="Quickly create/publish, edit, delete sticky notes on Internet, no
              need to Login"
          />
        </div>
      </section>

      <section className="info-block">
        <h3 className="info-title">SKILLS</h3>
        <div className="content">
          <div className="content-block">
            <h4>Proficient: </h4>
            <span>
              JavaScript (ES6), Typescript, HTML5, CSS3, TailwindCSS, NextJS,
              Git
            </span>
          </div>

          <div className="content-block">
            <h4>Familiar: </h4>
            <span>
              NodeJS, TRPC, Solidity, Hardhat, Rust for Solana, Anchor for
              Solana, Prisma, Bash
            </span>
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
