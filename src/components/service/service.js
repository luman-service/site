import React from 'react'
import Link from 'gatsby-link'

import './service.scss'

const getBackground = background => ({
  backgroundImage: `linear-gradient(0.25turn, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${background})`
})

const Service = ({ background, description, title, text, slug }) => (
  <article className="service service_body" style={getBackground(background)}>
    <div className="service__name">{title}</div>
    <div className="service__desc">{description}</div>
    <Link to={slug} className="button button_theme_inverse button_size_s">
      {text}
    </Link>
  </article>
)

export default Service
