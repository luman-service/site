import React from 'react';
import './service-group.scss';

import PriceExamples from './price-examples';
import Button from '../../components/button/button';


export default ({ data, index }) => {
  return (
    <section className={`service-group service-group__wrapper-${index % 2 === 0 ? 'dark' : 'light'}`}>
      <div className="service-group__container">
        <div className="service-group__caption">{data.caption}</div>
        <div className="service-group__description">{data.description}</div>
        <div className="call-manager-block">
          <div className="">
            <div className="service-group__price_example_caption">Примеры цен</div>
            <div className="service-group__description">Если в списке нет интересующих вас работ или у вас есть вопросы по ценам, задавайте вопрос менеджеру.</div>
          </div>
          <Button text="Записаться на ремонт" />
        </div>
        <PriceExamples data={data.price_examples} />
      </div>
    </section>
  );
};
