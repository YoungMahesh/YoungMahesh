import ProjectBox from './ProjectBox'

const TECH_STACK = {
  POSTGRESQL: 'Postgresql',
  TAILWIND: 'TailwindCSS',
  NEXTJS: 'NextJS',
  NEXT_AUTH: 'NextAuth',
  CLERK_AUTH: 'ClerkAuth',
  TRPC: 'TRPC',
  METAMASK: 'Metamask',
  PRISMA: 'PrismaORM',
  FAUNA: 'FaunaDB',
  MUI: 'MUI',
  FIREBASE: 'Firebase',
}

export default function RightSide() {
  const {
    POSTGRESQL,
    TAILWIND,
    NEXTJS,
    NEXT_AUTH,
    CLERK_AUTH,
    TRPC,
    METAMASK,
    PRISMA,
    FAUNA,
    MUI,
    FIREBASE,
  } = TECH_STACK
  return (
    <article className="right">
      <section className="info-block">
        <h3 className="info-title">INTRO</h3>
        <div className="content">
          <div className="content-block">
            <p>
              Working as a Full-stack Web-developer, Web3-developer, Golang
              developer.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="info-block">
        <h3 className="info-title">EXPERIENCE</h3>
        <div className="content">
          <ProjectBox
            name="Freelancing"
            description="Working as a full-stack developer. Currently inclined towards learning Golang."
          />
        </div>
      </section> */}

      <section className="info-block">
        <h3 className="info-title">PROJECTS</h3>
        <div className="content">
          <ProjectBox
            name="Timers"
            link="https://timers.mogali.in/"
            description="Save your notes in a simple, open-source, ad-free project."
            stack={[NEXTJS, NEXT_AUTH, TAILWIND, POSTGRESQL, TRPC, PRISMA]}
            github="https://github.com/YoungMahesh/timers"
          />
          <ProjectBox
            name="Notes"
            link="https://notes.mogali.in/"
            description="Save your notes in a simple, open-source, ad-free project."
            stack={[NEXTJS, CLERK_AUTH, TAILWIND, POSTGRESQL, TRPC, PRISMA]}
            github="https://github.com/YoungMahesh/notes"
          />
          <ProjectBox
            name="Tools"
            link="https://tools.mogali.in/"
            description="A collection of various utilities which includes text-encryption,web3-wallet generatoration, 
                FD Calculator, Loan Calculator, etc"
            stack={[NEXTJS, TAILWIND, METAMASK]}
            github="https://github.com/YoungMahesh/tools"
          />
          <ProjectBox
            name="IN (URL-shortner)"
            link="https://sh.mogali.in"
            description='Shorten URLs to your own custom-url starting with "sh.mogali.in" or "in.vercel.app"'
            stack={[NEXTJS, POSTGRESQL, PRISMA]}
            github="https://github.com/YoungMahesh/short"
          />
          <ProjectBox
            name="Telegraph"
            link="http://telegraph.mogali.in/"
            description="Clone of famous 'telegr.ph', with additional functionality to
              delete post"
            stack={[NEXTJS, FAUNA, MUI]}
            github="https://github.com/YoungMahesh/telegraph"
          />
          <ProjectBox
            name="Sticky Notes"
            link="https://sticky.mogali.in/"
            description="Quickly create/publish, edit, delete sticky notes on Internet, no
              need to Login"
            stack={[NEXTJS, FIREBASE]}
            github="https://github.com/YoungMahesh/sticky-notes"
          />
        </div>
      </section>

      <section className="info-block">
        <h3 className="info-title">SKILLS</h3>
        <div className="content">
          <div className="content-block">
            <h4>Proficient: </h4>
            <span>
              Javascript, Typescript, Solidity, TailwindCSS, ReactJS, NextJS,
              NodeJS
            </span>
          </div>

          <div className="content-block">
            <h4>Familiar: </h4>
            <span>Golang, TRPC, PrismaORM, Git, Hardhat, Bash</span>
          </div>
        </div>
      </section>

      <section className="info-block">
        <h3 className="info-title">EDUCATION</h3>
        <div className="content">
          <div className="content-block">
            <p>
              Bachelor of Commerce (May 2016 - May 2019), KSK college,
              Yashwantrao Chavan Open University, Beed
            </p>
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
        <p>RÉSUMÉ</p>
      </a>
    </article>
  )
}
