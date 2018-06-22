import React, { Component } from 'react'

import { MODAL_TYPES } from '../../constatnts'

import Phone from '../phone/phone'
import Promo from '../promo/promo'
import SliderControls from '../slider-controls/slider-controls'

import './header.scss'
import logo from './logo@1X.png'
import arrow from './arrow.png'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { slides: {
      list: [1,2,3],
      active: 0
    }}
  }

  setActiveSlide = id => {
    const { slides } = this.state
    console.log('hey');


    this.setState({ slides: { ...slides, active: id } })
  }

  render() {
    const { showModal } = this.props
    const { slides } = this.state

    return (
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
              onClick={() => showModal(MODAL_TYPES.call)}>
              заказать обратный звонок
            </button>
            <Phone />
          </div>
        </header>
        <Promo showModal={showModal} />
        <img className="header__arrow" src={arrow} alt="" />
        <SliderControls
          setActiveSlide={this.setActiveSlide}
          slides={slides} />
      </section>
    )
  }
}

export default Header
