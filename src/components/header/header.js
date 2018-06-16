import React from 'react'

import { MODAL_TYPES } from '../../constatnts'

import Phone from '../phone/phone'
import Promo from '../promo/promo'

import './header.scss'
import logo from './logo@1X.png'
import arrow from './arrow.png'

const Header = ({ showModal }) => (
  <section className="header-wrapper">
    <header className="header center-layout-wrapper">
      <a href="/">
        <img src={logo} className="logo header__logo" />
      </a>
      <nav className="header__nav">
        <ul className="header__nav-inner">
          <li>
            <a className="link header__nav-item" href="#services">
              услуги
            </a>
          </li>
          <li>
            <a className="link header__nav-item" href="#contacts">
              контактная информация
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__phone">
        <button
          className="header__phone-order"
          onClick={() => showModal(MODAL_TYPES.call)}
        >
          заказать обратный звонок
        </button>
        <Phone />
      </div>
    </header>
    <Promo showModal={showModal} />
    <img className="header__arrow" src={arrow} alt="" />
  </section>
)

export default Header
