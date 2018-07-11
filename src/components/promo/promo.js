import React from 'react'

import { MODAL_TYPES } from '../../constatnts'

import Button from '../button/button'

import './promo.scss'

const Promo = ({ showModal, slide }) => (
    <div className={`promo center-layout-wrapper promo_type_${slide.type}`}>
      {slide.title && <div className="promo__title">{slide.title}</div>}
      <div className="promo__desc">{slide.desc}</div>
      <div className="promo__desc-sub">{slide.descSub}</div>
      <Button
        text="записаться"
        onClickHandler={() => showModal(MODAL_TYPES.order)}
      />
    </div>
  )

export default Promo
