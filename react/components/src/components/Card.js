import React from 'react'

function Card({
  title,
  description,
  children,
  number,
  darkMode,
}) {
  return (
    <article className="card">
      <h2>{title} {number}</h2>
      <p>{description}</p>
      <p>{children}</p>
      {darkMode ? <p>dark</p> : <p>light</p>}
    </article>
  )
}

export default Card
