import React, { Component } from 'react'

import { MODAL_TYPES, SLIDER_INTERVAL } from '../../constatnts'

import Button from '../button/button'
import SliderControls from '../slider-controls/slider-controls'

import slides from './slides'

import './promo.scss'
import arrow from './arrow.png'

class Promo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: slides,
      activeSlide: 0
    }
  }

  componentDidMount() {
    this.setSliderInterval()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setSliderInterval = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        const { activeSlide, slides } = prevState

        if (activeSlide === slides.length - 1) {
          return { ...prevState, activeSlide: 0 }
        } else {
          return { ...prevState, activeSlide: activeSlide + 1 }
        }
      })
    }, SLIDER_INTERVAL)
  }

  setActiveSlide = id => {
    this.setState(prevState => {
      return { ...prevState, activeSlide: id }
    })

    clearInterval(this.interval)
    this.setSliderInterval()
  }

  render() {
    const { activeSlide, slides } = this.state
    const { showModal } = this.props
    const slide = slides[activeSlide]

    return (
      <section className={`promo promo_type_${slide.type}`}>
        <div className="promo__wrapper center-layout-wrapper">
          {slide.title && <div className="promo__title">{slide.title}</div>}
          <div className="promo__desc">{slide.desc}</div>
          <div className="promo__desc-sub">{slide.descSub}</div>
          <Button
            text="записаться"
            onClickHandler={() => showModal(MODAL_TYPES.order)}
          />
          <img className="promo__arrow" src={arrow} alt="" />
          <SliderControls
            activeSlide={activeSlide}
            setActiveSlide={this.setActiveSlide}
            slides={slides}
          />
        </div>
        {slides.map((slide, i) => (
          <img
            key={slide.title}
            className={`promo__bg promo__bg_${
              activeSlide === i ? 'active' : ''
            }`}
            src={slide.bg}
          />
        ))}
      </section>
    )
  }
}

export default Promo
