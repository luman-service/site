import React, { Component } from 'react'

import Phone from '../phone/phone'
import './dummy.scss';
import logo from './logo.png'

class Dummy extends Component {
  render() {
    return (
      <div className="dummy">
        <div className="container">
          <div className="logo-row">
            <div className="logo-row__logo__luman">
              <span>luman</span>
            </div>
            <div className="logo-row__logo__service">
              <span>service</span>
            </div>
            <div className="logo-row__in-development">сайт в разработке</div>
          </div>
          <div className="contacts-row">
            <div className="contacts-cell">
              <div className="contacts-cell__content">
                <div className="contact-prefix">Позвоните нам:</div>
                <Phone />
              </div>
            </div>
            <div className="contacts-cell">
              <div className="contacts-cell__content">
                <div className="contact-prefix">Адрес сервиса:</div>
                <div className="address">
                  кутузовский проспект 36 <span className="address-building">стр.</span> 15
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dummy
