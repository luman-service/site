import React, { Fragment } from 'react'

import Service from '../service/service'

import './services.scss'

const Services = ({ categories }) => (
  <section className="services-wrapper" id="services">
    <div className="services">
      <div className="services__header center-layout-wrapper">
        <div className="services__title">наши услуги</div>
      </div>
      <div className="services__content">
        {categories.map(cat => (
          <Service
            {...cat.node.frontmatter}
            text="Подробнее"
            key={cat.node.frontmatter.type}
            slug={cat.node.fields.slug}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Services
