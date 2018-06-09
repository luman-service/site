import React from 'react'
import Link from 'gatsby-link'

import Services from '../components/services/services'

const IndexPage = ({ data }) => (
  <Services categories={data.allMarkdownRemark.edges} />
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (
      sort: {
        fields: [frontmatter___order],
        order: ASC
      }
    )
    {
      edges {
        node {
          id
          frontmatter {
            title
            description
            background
          }
        }
      }
    }
  }
`

export default IndexPage
