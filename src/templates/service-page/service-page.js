import React from 'react'

import PriceTable from './price-table/price-table'
import './service-page.scss'

export default ({ data }) => {
  const servicTableImageSrc = data.markdownRemark.frontmatter.table_image
  const serviceGroupDescription = data.markdownRemark.frontmatter.description
  const picture = data.markdownRemark.frontmatter.background

  if (!servicTableImageSrc) {
    return (
      <section id="service-groups" className="price-table-container">
        <div>Похоже вы не внесли данные для этой страницы!</div>
      </section>
    )
  }

  return (
    <section id="service-groups" className="price-table-section">
      <div className="price-table-container">
        <div className="service-groups-description">{serviceGroupDescription}</div>
        <img className="service-group__picture" src={picture} />
        <PriceTable tableImageSrc={servicTableImageSrc}/>
      </div>
    </section>
  )
}

export const query = graphql`
  query ServiceDataQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        description
        background
        table_image
      }
    }
  }
`
