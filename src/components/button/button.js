import React from 'react'

import './button.scss'

const Button = ({ size, text, theme }) => (
  <button
    className={`button button_theme_${theme || 'normal'} button_size_${size ||
      'm'}`}
  >
    {text}
  </button>
)

export default Button
