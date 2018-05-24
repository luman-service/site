import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="header-wrapper">
    <div className="header">
      <div className="logo header__logo"></div>
      <nav className="header__nav">
        <ul>
          <li>
            <a className="header__nav-item" href="#">услуги</a>
          </li>
          <li>
            <a className="header__nav-item" href="#">контактная информация</a>
          </li>
        </ul>
      </nav>
      <div className="header__phone">
        <span className="header__phone-order">заказать обратный звонок</span>
        +7 903 557 67 22
      </div>
    </div>
    <div className="promo">
    </div>
  </div>
)

export default Header
