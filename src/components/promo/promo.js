import React from 'react';

import Button from '../button/button'

import './promo.scss';

const Promo = () => (
  <div className="promo center-layout-wrapper">
    <div className="promo__title">
      акция
    </div>
    <div className="promo__desc">
      При покупке масла MOTUL
    </div>
    <div className="promo__desc-sub">
      замена масла бесплатно!
    </div>
    <Button text="записаться" />
  </div>
)

export default Promo
