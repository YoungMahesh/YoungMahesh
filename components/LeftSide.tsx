import Image from 'next/image'
import GithubIcon from '../public/svgs/github.svg'
import LinkedInIcon from '../public/svgs/linkedin.svg'
import DevToIcon from '../public/svgs/dev-to.svg'
import StackOverflowIcon from '../public/svgs/stack-overflow.svg'
import MailIcon from '../public/svgs/mail.svg'
import TwitterIcon from '../public/svgs/twitter.svg'

export default function LeftSide() {
  return (
    <div className="left">
      <section className="info">
        <h2 className="name">Hey, I&apos;m Mahesh</h2>
        <p className="subtext">Web developer, based in Beed, Maharashtra.</p>

        <div className="social-links">
          <a
            className="icon1"
            href="https://github.com/YoungMahesh"
            target="_blank"
            rel="noreferrer"
          >
            <Image className="svg" src={GithubIcon} alt="Github" />
          </a>
          <a
            className="icon1"
            href="https://www.linkedin.com/in/YoungMahesh"
            target="_blank"
            rel="noreferrer"
          >
            <Image className="svg" src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a
            className="icon1"
            href="https://twitter.com/mahesh_0411"
            target="_blank"
            rel="noreferrer"
          >
            <Image className="svg" src={TwitterIcon} alt="Twitter" />
          </a>
          <a
            className="icon1"
            href="mailto:maheshghamand@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              style={{ filter: 'invert(1)' }}
              className="svg"
              src={MailIcon}
              alt="Mail"
            />
          </a>
          <a
            className="icon1"
            href="https://dev.to/YoungMahesh"
            target="_blank"
            rel="noreferrer"
          >
            <Image className="svg" src={DevToIcon} alt="Dev.to" />
          </a>
          <a
            className="icon1"
            href="https://stackoverflow.com/users/12344647"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="svg"
              src={StackOverflowIcon}
              alt="stack-overflow"
            />
          </a>
        </div>
      </section>
    </div>
  )
}
