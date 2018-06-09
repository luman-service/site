import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Brands from '../components/brands/brands'
import Contacts from '../components/contacts/contacts'
import Map from '../components/map/map'
import Header from '../components/header/header'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
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

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
