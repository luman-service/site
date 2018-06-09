import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Brands from '../components/brands/brands'
import Contacts from '../components/contacts/contacts'
import Map from '../components/map/map'
import Modal from '../components/modal/modal'
import Header from '../components/header/header'

import './index.css'

const MODAL_TYPES = {
  call: 'call',
  order: 'order'
}

class IndexLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: {
        show: false,
        type: ''
      }
    }
  }

  hideModal() {
    this.setState({ modal: { show: false, type: '' } })
  }

  showModal(type) {
    this.setState({ modal: { show: true, type } })
  }

  render() {
    const { modal: { show } } = this.state
    const { children, data: { site: { siteMetadata } } } = this.props

    return (
      <div>
        <Helmet
          title={siteMetadata.title}
          link={[{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]}
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
        {show && <Modal />}
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
