import React from 'react'

import './button.scss'

const Button = ({ className, text }) => (
  <button className={`button ${className}`}>{text}</button>
)

export default Button
