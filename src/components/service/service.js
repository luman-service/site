import React from 'react'

const Service = ({text}) => (
  <article className="service service_body">
    <div className="service__name"></div>
    <div className="service__desc"></div>
    <Button text={text} />
  </article>
)

export default Service
