import ProjectBox from './ProjectBox'

export default function RightSide() {
  return (
    <article className="right">
      <section className="info-block">
        <h3 className="info-title">INTRO</h3>
        <div className="content">
          <div className="content-block">
            <p>Completed my B.Com from KSK college, Beed in May-2019.</p>
            <p>I started web-development since Jan-2019.</p>
          </div>
        </div>
      </section>

      <section className="info-block">
        <h3 className="info-title">PROJECTS</h3>
        <div className="content">
          <ProjectBox
            name="Blockchain Tools"
            link="https://blockchaintools.app/"
            description="Few blockchain related apps such as multisender, locker, erc20-generator written in solidity"
          />
          <ProjectBox
            name="Quick-JSON-API"
            link="https://quick-json-api.now.sh"
            description="Quick Create, Edit, Use(fetch on any website or server) and
							Delete your API"
          />
          <ProjectBox
            name="Telegraph"
            link="https://telegraph.now.sh/"
            description="Clone of famous 'telegr.ph', with additional functionality to
              delete post"
          />
          <ProjectBox
            name="IN (URL-shortner)"
            link="https://in.now.sh/"
            description='Shorten URLs to your own custom-url starting with "in.now.sh/"'
          />
          <ProjectBox
            name="Crypt0"
            link="https://crypt0.now.sh/"
            description="Encrypt and Decrypt text with your own password"
          />
          <ProjectBox
            name="Sticky Notes"
            link="https://keep0.now.sh/"
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
            <span>JavaScript (ES6), Typescript, HTML5, CSS3, Solidity</span>
          </div>

          <div className="content-block">
            <h4>Libraries & Frameworks: </h4>
            <span>NodeJS, NextJS, Hardhat</span>
          </div>

          <div className="content-block">
            <h4>Tools: </h4>
            <span>Git, Github, Bash, cURL</span>
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

      <a className="pdf-link" href="/assets/mahesh-resume.pdf" download>
        <p>GRAB A PDF OF MY FULL RESUME</p>
      </a>
    </article>
  )
}
