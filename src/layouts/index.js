import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Brands from '../components/brands/brands'
import Contacts from '../components/contacts/contacts'
import Map from '../components/map/map'
import Header from '../components/header/header'

import './index.css'

class IndexLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callModal: false,
      orderModal: false
    }
  }

  toggleModal() {
    const { callModal } = this.state
    this.setState({callModal: !callModal})
  }

  render() {
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          link={[{rel: 'icon', type: 'image/png', href: '/favicon.png'}]}
          meta={[
            { name: 'description', content: 'LUMAN service' },
            { name: 'keywords', content: '' },
          ]}
        />
        <Header />
        <Brands />
        {children()}
        <Contacts />
        <Map />
      </div>
    )
  }
}

IndexLayout.propTypes = {
  children: PropTypes.func,
}

export default IndexLayout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
