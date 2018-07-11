import React from 'react'

import './slider-controls.scss'

const SliderControls = ({ activeSlide, setActiveSlide, slides }) => {
  return (
    <div className="center-layout-wrapper">
      <div className="slider-controls">
        {slides.map((slide, i) => (
          <div
            className={`slider-controls__item ${activeSlide === i ? 'slider-controls__item_active' : ''}`}
            key={i}
            onClick={() => setActiveSlide(i)} />
        ))}
      </div>
    </div>
  )
}

export default SliderControls
