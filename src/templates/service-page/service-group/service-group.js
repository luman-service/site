import React from 'react';
import './service-group.scss';

import PriceExamples from '../price-examples/price-examples';
import Button from '../../../components/button/button';
import { MODAL_TYPES } from '../../../constatnts';


export default ({ data, index, showModal }) => {
  return (
    <section className={`service-group service-group__wrapper-${index % 2 === 0 ? 'dark' : 'light'}`}>
      <div className="service-group__container">
        <div className="service-group__caption">{data.caption}</div>
        <div className="service-group__description">{data.description}</div>
        <img className="service-group__picture" src={data.picture} />
        <div className="call-manager-block">
          <div>
            <div className="service-group__price_example_caption">Примеры цен</div>
            <div className="service-group__description">Если в списке нет интересующих вас работ или у вас есть вопросы по ценам, задавайте вопрос менеджеру.</div>
          </div>
          <div className="call-button-container">
            <Button
              text="Записаться на ремонт"
              onClickHandler={() => showModal(MODAL_TYPES.order)} />
          </div>
        </div>
        <PriceExamples data={data.price_examples} />
      </div>
    </section>
  );
};
