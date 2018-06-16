import React from 'react'

import { MODAL_TYPES } from '../../constatnts'

import Button from '../button/button'

import './promo.scss'

const Promo = ({ showModal }) => (
  <div className="promo center-layout-wrapper">
    <div className="promo__title">акция</div>
    <div className="promo__desc">При покупке масла MOTUL</div>
    <div className="promo__desc-sub">замена масла бесплатно!</div>
    <Button
      text="записаться"
      onClickHandler={() => showModal(MODAL_TYPES.order)}
    />
  </div>
)

export default Promo
