import React from 'react'
import Link from 'gatsby-link'

import Phone from '../phone/phone'
import Promo from '../promo/promo'

import './header.scss'
import logo from './logo@1X.png'
import arrow from './arrow.png'

const Header = () => (
  <section className="header-wrapper">
    <header className="header center-layout-wrapper">
      <a href="/">
        <img src={logo} className="logo header__logo" />
      </a>
      <nav className="header__nav">
        <ul className="header__nav-inner">
          <li>
            <a className="link header__nav-item" href="#">
              услуги
            </a>
          </li>
          <li>
            <a className="link header__nav-item" href="#">
              контактная информация
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__phone">
        <button className="header__phone-order">
          заказать обратный звонок
        </button>
        <Phone />
      </div>
    </header>
    <Promo />
    <img className="header__arrow" src={arrow} alt="" />
  </section>
)

export default Header
