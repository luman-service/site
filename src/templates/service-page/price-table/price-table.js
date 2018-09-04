import React from 'react'

import './price-table.scss'

const PriceTable = ({ tableHtml }) => <div dangerouslySetInnerHTML={{ __html: tableHtml }} />

export default PriceTable
