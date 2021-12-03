import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  closeInfoWindow = () => {
    this.setState({
      selectedPlace: {},
      activeMarker: {},
      showingInfoWindow: false
    });
  }

  buildMarkers = () => {
    return (
      <Marker name={'Current location'} onClick={this.onMarkerClick} />
    )
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{lat: this.props.lat, lng: this.props.lng}}>
 
        {this.buildMarkers()}

        <InfoWindow visible={this.state.showingInfoWindow} onClose={this.closeInfoWindow} marker={this.state.activeMarker}>
            <div>
              <h1>hi</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAR8pjtTek4GgQP5MiIkfPVhc5XXD2rqbk')
})(MapContainer)