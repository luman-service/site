import React from 'react'

import Button from '../button/button'

import './service.scss'

const getBackground = (background) => ({
  backgroundImage: `linear-gradient(0.25turn, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${background})`
})

const Service = ({ background, description, title, text, type }) => (
  <article className="service service_body" style={getBackground(background)}>
    <div className="service__name">{title}</div>
    <div className="service__desc">{description}</div>
    <Button size="s" text={text} theme="inverse" />
  </article>
)

export default Service
