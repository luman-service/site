import React from 'react'

import PriceTable from './price-table/price-table'
import './service-page.scss'

export default ({ data }) => {
  const servicTableHtml = data.markdownRemark.frontmatter.table_html

  console.log(data.markdownRemark.frontmatter)

  if (!servicTableHtml) {
    return (
      <section id="service-groups">
        <div>Похоже вы не внесли данные для этой страницы!</div>
      </section>
    )
  }

  return (
    <section id="service-groups">
      <PriceTable tableHtml={servicTableHtml}/>
    </section>
  )
}

export const queruy = graphql`
  query ServiceDataQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        service_groups_description
        table_html
      }
    }
  }
`
