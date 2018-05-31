import React from 'react'

const Service = ({ text }) => (
  <article className="service service_body">
    <div className="service__name" />
    <div className="service__desc" />
    <Button text={text} />
  </article>
)

export default Service
