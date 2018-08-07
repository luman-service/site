import React, { Fragment } from 'react'

import { MODAL_TYPES } from '../../constatnts'

import './modal.scss'

const MODAL_TITLES = {
  call: 'заказать обратный звонок',
  order: 'записаться на обслуживание'
}

class Modal extends React.Component {
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
          <form
            method="POST"
            action="https://formspree.io/serviceluman@gmail.com"
            className="modal__form">
            <div>
              <input
                type="hidden"
                name="_next"
                value={window.location.origin}
              />
            </div>
            <div className="modal__form-input-wrapper modal__form-input-wrapper-name">
              <input
                name="name"
                placeholder="ВАШЕ ИМЯ"
                type="text"
                className="modal__form-input modal__form-input-name"
              />
            </div>
            <div className="modal__form-input-wrapper modal__form-input-wrapper-phone">
              <input
                name="phone"
                placeholder="+7"
                type="phone"
                className="modal__form-input modal__form-input-phone"
              />
            </div>
            {type === MODAL_TYPES.order ? (
              <Fragment>
                <div className="modal__form-input-wrapper modal__form-input-wrapper-car">
                  <input
                    name="car"
                    placeholder="МОДЕЛЬ АВТОМОБИЛЯ"
                    type="text"
                    className="modal__form-input modal__form-input-car"
                  />
                </div>
                <div className="modal__form-input-wrapper modal__form-input-wrapper-date">
                  <input
                    name="visit-date"
                    placeholder="ДД7ММ.ГГГ"
                    type="date"
                    className="modal__form-input modal__form-input-date"
                  />
                </div>
                <div className="modal__form-input-wrapper modal__form-input-wrapper-time">
                  <input
                    name="visit-time"
                    placeholder="ЧЧ:ММ"
                    type="text"
                    className="modal__form-input modal__form-input-time"
                  />
                </div>
              </Fragment>
            ) : null}
            <div className="modal__form-input-wrapper modal__form-input-wrapper-comment">
              <textarea
                name="comment"
                placeholder="КОММЕНТАРИЙ"
                type="text"
                className="modal__form-input modal__form-input-comment"
              />
            </div>
            <input
              type="submit"
              value={
                type === MODAL_TYPES.order ? 'записаться' : 'позвоните мне'
              }
              className="modal__form-submit"
              // onClick={e => e.preventDefault()}
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
