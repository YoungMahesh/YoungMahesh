export default function ProjectBox({name, link, description}:{name: string, link: string, description: string}) {
  return (
    <div className="content-block">
      <h4>
        <a
          className="black"
          href={link}
          target="_blank"
          rel="noopener"
        >
          {name}
        </a>
      </h4>
      <p>
        {description}
      </p>
    </div>
  )
}
