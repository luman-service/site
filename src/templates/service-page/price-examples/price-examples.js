import React from 'react';
import './price-examples.scss';


const renderPriceExamplesTable = priceExampleData => (
  <table className="price-examples-table">
    {
      priceExampleData.map((priceExampleData) => {
        return (
          <tr>
            <td className="price-examples-table__td price-examples-table__td__service-name">{priceExampleData.service_name}</td>
            <td className="price-examples-table__td price-examples-table__td__service-price">{priceExampleData.service_price}</td>
          </tr>
        );
      })
    }
  </table>
);


export default ({ data }) => {
  const leftExamples = data.filter((priceExample, i) => i % 2 == 0);
  const rightExamples = data.filter((priceExample, i) => i % 2 == 1);

  return (
    <div className="price-examples__wrapper">
      {renderPriceExamplesTable(leftExamples)}
      {renderPriceExamplesTable(rightExamples)}
    </div>
  );
};
