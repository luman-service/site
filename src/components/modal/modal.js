import React, { Component, Fragment } from 'react'

import { MODAL_TYPES } from '../../constatnts'

import './modal.scss'

const MODAL_TITLES = {
  call: 'заказать обратный звонок',
  order: 'записаться на обслуживание'
}

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { hideModal, type } = this.props

    return (
      <div className="modal-wrapper" onClick={hideModal}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <div className="modal__close" onClick={hideModal}>
            &#10005;
          </div>
          <div className="modal__title">{MODAL_TITLES[type]}</div>
          <div className="modal__sub">
            Заполните форму и мы с вами свяжемся в самое ближайшее время.
          </div>
          <form className="modal__form">
            <div className="modal__form-input-wrapper modal__form-input-wrapper-name">
              <input
                placeholder="ВАШЕ ИМЯ"
                type="text"
                className="modal__form-input modal__form-input-name"
              />
            </div>
            <div className="modal__form-input-wrapper modal__form-input-wrapper-phone">
              <input
                placeholder="+7"
                type="phone"
                className="modal__form-input modal__form-input-phone"
              />
            </div>
            {type === MODAL_TYPES.order && (
              <Fragment>
                <div className="modal__form-input-wrapper modal__form-input-wrapper-car">
                  <input
                    placeholder="МОДЕЛЬ АВТОМОБИЛЯ"
                    type="text"
                    className="modal__form-input modal__form-input-car"
                  />
                </div>
                <div className="modal__form-input-wrapper modal__form-input-wrapper-date">
                  <input
                    placeholder="ДД7ММ.ГГГ"
                    type="date"
                    className="modal__form-input modal__form-input-date"
                  />
                </div>
                <div className="modal__form-input-wrapper modal__form-input-wrapper-time">
                  <input
                    placeholder="ЧЧ:ММ"
                    type="text"
                    className="modal__form-input modal__form-input-time"
                  />
                </div>
              </Fragment>
            )}
            <div className="modal__form-input-wrapper modal__form-input-wrapper-comment">
              <textarea
                placeholder="КОММЕНТАРИЙ"
                type="text"
                className="modal__form-input modal__form-input-comment"
              />
            </div>
            <input
              type="submit"
              value="позвоните мне"
              className="modal__form-submit"
              onClick={e => e.preventDefault()}
            />
          </form>
          <div className="modal__sub modal__required">
            * обязательно к заполнению
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
