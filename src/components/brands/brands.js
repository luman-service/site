import React from 'react'

import bmw from './bmw.png'
import mercedes from './mercedes.png'
import audi from './audi.png'
import vw from './vw.png'
import mini from './mini.png'

import './brands.scss';

const Brands = () => (
  <section className="brands-wrapper">
    <div className="brands center-layout-wrapper">
      <img className="brands__item" src={bmw} alt=""/>
      <img className="brands__item" src={mercedes} alt=""/>
      <img className="brands__item" src={audi} alt=""/>
      <img className="brands__item" src={vw} alt=""/>
      <img className="brands__item" src={mini} alt=""/>
    </div>
  </section>
)

export default Brands
