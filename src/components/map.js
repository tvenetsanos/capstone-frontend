import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Link } from '@material-ui/core';
import ReactDOM from 'react-dom';

 
export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      dog: null
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      dog: marker.dog
    });
  }

  closeInfoWindow = () => {
    this.setState({
      selectedPlace: {},
      activeMarker: {},
      showingInfoWindow: false,
    });
  }

  renderInfoWindowButton = () => {
    const infoBody = (<div>
        <h1>{this.state.dog && this.state.dog.dog_name}</h1>
        <Link onClick={() => {this.props.redirect(this.state.dog.id)}}>message</Link>
      </div>);
    ReactDOM.render(infoBody, document.getElementById("info-window"));
  }

  buildMarkers = () => {
    return this.props.dogs.map((dog, index) => {
        return (
          <Marker name={dog.dog_name} onClick={this.onMarkerClick} key={index} dog={dog} position={{lat: dog.lat, lng: dog.lng}}/>
        )
    })
  }

  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14} initialCenter={{lat: this.props.lat, lng: this.props.lng}}>
          {this.buildMarkers()}
          <InfoWindow visible={this.state.showingInfoWindow} onClose={this.closeInfoWindow} onOpen={this.renderInfoWindowButton} marker={this.state.activeMarker}>
                <div id="info-window" />
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAR8pjtTek4GgQP5MiIkfPVhc5XXD2rqbk')
})(MapContainer)