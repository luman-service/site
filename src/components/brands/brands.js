import React from 'react'

import bmw from './bmw.png'
import mercedes from './mercedes.png'
import audi from './audi.png'
import vw from './vw.png'
import mini from './mini.png'

import './brands.scss'

const Brands = () => (
  <section className="brands-wrapper">
    <div className="brands center-layout-wrapper">
      <div className="brands__item">
        <img className="brands__item-logo" src={bmw} alt="" />
      </div>
      <div className="brands__item">
        <img className="brands__item-logo" src={mercedes} alt="" />
      </div>
      <div className="brands__item">
        <img className="brands__item-logo" src={audi} alt="" />
      </div>
      <div className="brands__item">
        <img className="brands__item-logo" src={vw} alt="" />
      </div>
      <div className="brands__item">
        <img className="brands__item-logo" src={mini} alt="" />
      </div>
    </div>
  </section>
)

export default Brands
