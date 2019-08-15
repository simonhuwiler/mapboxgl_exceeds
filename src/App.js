import React from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';

class App extends React.Component {

  componentDidMount()
  {
    mapboxgl.accessToken = "XXX";

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/blick-storytelling/cjghx2h8f00582rs2kk0h3c3r',
      zoom: 7,
      minZoom: 1,
      maxZoom: 15,
      center: [8.272, 46.662],
      interactive: true
    });
  }

  render() 
  {
    return (
      <div style={{width: '100%', height: '100%'}} ref={el => this.mapContainer = el} />
    )
  }
}

export default App;