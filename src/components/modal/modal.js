import React from 'react'

const Modal = () => (
  <div className="modal-wrapper">
    <div className="modal">
      <div className="modal__title"></div>
      <div className="modal__sub"></div>
      <div className="modal__form">
        <input type="text" className="modal__form-name"/>
        <input type="phone" className="modal__form-phone"/>
        <input type="text" className="modal__form-comment"/>
      </div>
    </div>
  </div>
)

export default Modal
