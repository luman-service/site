import React from 'react'

import './slider-controls.scss'

const SliderControls = ({ setActiveSlide, slides }) => {
    return (
        <div className="slider-controls center-layout-wrapper">
          {slides.list.map((slide, i) => (
            <div
              className={`slider-controls__item ${slides.active === i ? 'slider-controls__item_active' : ''}`}
              key={i}
              onClick={() => setActiveSlide(i)} />
          ))}
        </div>
    )
}

export default SliderControls
