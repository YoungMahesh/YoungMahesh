export default function ProjectBox({
  name,
  link,
  description,
  stack,
  github,
}: {
  name: string
  link?: string
  description: string
  stack?: string[]
  github?: string
}) {
  return (
    <div className="content-block">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4 style={{ margin: 0 }}>
          {link ? (
            <a className="black" href={link} target="_blank" rel="noreferrer">
              {name}
            </a>
          ) : (
            name
          )}
        </h4>
        &nbsp; &nbsp;
        {github ? (
          <a
            style={{ textDecoration: 'underline' }}
            className="black"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        ) : (
          <></>
        )}
      </div>
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
