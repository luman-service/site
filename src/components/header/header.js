import React, { Component } from 'react'

import { MODAL_TYPES } from '../../constatnts'

import Phone from '../phone/phone'

import './header.scss'
import logo from './logo@1X.png'

class Header extends Component {
  render() {
    const { showModal } = this.props

    return (
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
            onClick={() => showModal(MODAL_TYPES.call)}>
            заказать обратный звонок
          </button>
          <Phone />
        </div>
      </header>
    )
  }
}

export default Header
