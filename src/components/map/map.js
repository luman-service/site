import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import styles from './styles'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'LUMAN service',
      location: { lat: 55.7407549, lng: 37.5263965 },
    }
  }

  componentDidMount() {
    this.loadMap()
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks to make sure that props have been passed
      const { location, title } = this.state
      const {
        google: { maps },
      } = this.props // sets props equal to google
      const node = ReactDOM.findDOMNode(this.map) // finds the 'map' div in the React DOM, names it node
      const mapConfig = {
        center: location,
        zoom: 16, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap', // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
        disableDefaultUI: true,
        styles,
      }

      this.map = new maps.Map(node, mapConfig) // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

      const marker = new google.maps.Marker({
        // creates a new Google maps Marker object.
        position: { lat: location.lat, lng: location.lng }, // sets position of marker to specified location
        map: this.map, // sets markers to appear on the map we just created on line 35
        title, // the title of the marker is set to the name of the location
      })
    }
  }

  render() {
    const style = {
      width: '100vw',
      height: '280px',
    }

    return (
      // in our return function you must return a div with ref and style.
      <div ref={node => (this.map = node)} style={style}>
        loading map...
      </div>
    )
  }
}

export default Map
