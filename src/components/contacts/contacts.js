import React from 'react'

import { MODAL_TYPES } from '../../constatnts'

import Button from '../button/button'
import Phone from '../phone/phone'

import './contacts.scss'

const Contacts = ({ showModal }) => (
  <div className="contacts-wrapper" id="contacts">
    <div className="contacts center-layout-wrapper">
      <div className="contacts__item">
        <div className="contacts__item-title contacts__item-title_phone">
          свяжитесь с нами
        </div>
        <Phone />
        <Button
          size="s"
          text="заказать обратный звонок"
          onClickHandler={() => showModal(MODAL_TYPES.call)}
        />
      </div>
      <div className="contacts__item">
        <div className="contacts__item-title contacts__item-title_schedule">
          время работы
        </div>
        <div className="contacts__schedule">
          <div className="contacts__schedule-weekdays">
            <div className="contacts__schedule-days">пн &ndash; пт</div>
            <div className="contacts__schedule-time">10.00 &ndash; 21.00</div>
          </div>
          <div className="contacts__schedule-weekends">
            <div className="contacts__schedule-days">сб</div>
            <div className="contacts__schedule-time">10.00 &ndash; 19.00</div>
            <div className="contacts__schedule-days">вс &ndash; выходной</div>
          </div>
        </div>
      </div>
      <div className="contacts__item">
        <div className="contacts__item-title contacts__item-title_address">
          адрес
        </div>
        <div className="contacts__address">
          кутузовский проспект 36{' '}
          <span className="contacts__address-building">стр.</span> 41
        </div>
      </div>
    </div>
  </div>
)

export default Contacts
