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
      userDog: null
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      userDog: marker.userDog
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
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        const infoBody = (<div style={{margin: '0 auto'}}>
        <img style={{maxHeight: '10rem', maxWidth: '10rem'}} className='size' src={data.message}></img>
        <h1>{this.state.userDog && this.state.userDog.dog.dog_name}</h1>
        <h3>{this.state.userDog.user.address_one}</h3>
        <h3>{this.state.userDog.user.address_two}</h3>
        <h3>{this.state.userDog.user.city} {this.state.userDog.user.zip_code}</h3>
        <br />
        <h2>User Details</h2>
        <h3>{this.state.userDog.user.name} • {this.state.userDog.user.email}</h3>
        <Link onClick={() => {this.props.redirect(this.state.userDog.user)}}>message</Link>
        </div>);
        ReactDOM.render(infoBody, document.getElementById("info-window"));
      })
  }

  buildMarkers = () => {
    console.log(this.props.usersDogs)
    return this.props.usersDogs.map((userDog, index) => {
        return (
          <Marker name={userDog.user.name} onClick={this.onMarkerClick} key={index} userDog={userDog} position={{lat: userDog.user.lat, lng: userDog.user.lng}}/>
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