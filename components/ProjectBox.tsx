import Image from 'next/image'
import GithubIcon from '../public/svgs/github.svg'

export default function ProjectBox({
  name,
  link,
  description,
  stack,
  github,
}: {
  name: string
  link: string
  description: string
  stack?: string[]
  github?: string
}) {
  return (
    <div className="content-block">
      <h4>
        <a className="black" href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
        {github ? (
          <a
            className="icon1"
            href="https://github.com/YoungMahesh"
            target="_blank"
            rel="noreferrer"
          >
            <Image className="svg" src={GithubIcon} alt="Github" />
          </a>
        ) : (
          <></>
        )}
      </h4>
      <p>{description}</p>
      {stack ? (
        <p>
          {' '}
          Tech-Stack: &nbsp;
          {stack.map((el, idx) => (
            <span key={idx}>{el}, &nbsp;</span>
          ))}
        </p>
      ) : (
        <></>
      )}
    </div>
  )
}
