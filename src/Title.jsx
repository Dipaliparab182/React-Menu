import React from 'react'

const Title = ({ text }) => {
  return (
    <section className="title">
      <header>
        <h3>{text || 'Default Title'}</h3>
        <div className="title-underline"></div>
      </header>
    </section>
  )
}

export default Title
