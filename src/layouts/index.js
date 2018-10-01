import React from 'react'
import Helmet from 'react-helmet'

import Dummy from '../components/dummy/dummy'

import './index.css'

class IndexLayout extends React.Component {
  render() {
    const {
      data: {
        site: { siteMetadata }
      },
    } = this.props

    return (
      <div>
        <Helmet
          title={siteMetadata.title}
          link={[{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]}
          meta={[
            { name: 'description', content: 'LUMAN service' },
            { name: 'keywords', content: '' }
          ]}
        />
        <Dummy />
      </div>
    )
  }
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexLayout
