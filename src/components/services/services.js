import React, { Fragment } from 'react'

import Service from '../service/service'

import './services.scss'

const Services = ({ categories }) => (
  <section className="services-wrapper" id="services">
    <div className="services">
      <div className="services__header center-layout-wrapper">
        <div className="services__title">наши услуги</div>
        <div className="services__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="services__content">
        {categories.map(cat => (
          <Service
            {...cat.node.frontmatter}
            text="Подробнее"
            key={cat.node.frontmatter.type}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Services
