import React, { Component } from 'react'

import { MODAL_TYPES, SLIDER_INTERVAL } from '../../constatnts'

import Phone from '../phone/phone'
import Promo from '../promo/promo'
import SliderControls from '../slider-controls/slider-controls'

import slides from './slides'
import './header.scss'
import logo from './logo@1X.png'
import arrow from './arrow.png'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: slides,
      activeSlide: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        const { slides, activeSlide } = prevState

        if (activeSlide === slides.length - 1) {
          return { ...prevState, activeSlide: 0 }
        } else {
          return { ...prevState, activeSlide: activeSlide + 1 }
        }
      })
    }, SLIDER_INTERVAL)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setActiveSlide = id => {
    const { slides } = this.state

    this.setState(prevState => {
      return { ...prevState, activeSlide: id }
    })
  }

  render() {
    const { showModal } = this.props
    const { slides, activeSlide } = this.state
    const style = {
      backgroundImage: `linear-gradient(0.25turn, rgba(0, 0, 0, .8), rgba(0, 0, 0, .5), rgba(0, 0, 0, .8)), url(${slides[activeSlide].bg})`
    }

    return (
      <section className="header-wrapper" style={style}>
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
        <Promo showModal={showModal} slide={slides[activeSlide]} />
        <img className="header__arrow" src={arrow} alt="" />
        <SliderControls
          activeSlide={activeSlide}
          setActiveSlide={this.setActiveSlide}
          slides={slides} />
      </section>
    )
  }
}

export default Header
