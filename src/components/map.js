import React, { Component, useState } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Link } from '@material-ui/core';
import ReactDOM from 'react-dom';

const MapContainer = (props) => {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [selectedPlace, setSelectedPlace] = useState({})
  const [userDog, setUserDog] = useState(null)

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props)
    setActiveMarker(marker)
    setShowingInfoWindow(true)
    setUserDog(marker.userDog)
  }

  const closeInfoWindow = () => {
    setSelectedPlace({})
    setActiveMarker({})
    setShowingInfoWindow(false)
  }

  const renderInfoWindowButton = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        const infoBody = (<div style={{margin: '0 auto'}}>
        <img style={{maxHeight: '10rem', maxWidth: '10rem'}} className='size' src={data.message}></img>
        <h1>{userDog && userDog.dog.dog_name}</h1>
        <h3>{userDog.user.address_one}</h3>
        <h3>{userDog.user.address_two}</h3>
        <h3>{userDog.user.city} {userDog.user.zip_code}</h3>
        <br />
        <h2>User Details</h2>
        <h3>{userDog.user.name} • {userDog.user.email}</h3>
        <Link onClick={() => {props.redirect(userDog.user)}}>message</Link>
        </div>);
        ReactDOM.render(infoBody, document.getElementById("info-window"));
      })
  }

  const buildMarkers = () => {
    console.log(props.usersDogs)
    return props.usersDogs.map((userDog, index) => {
        return (
          <Marker name={userDog.user.name} onClick={onMarkerClick} key={index} userDog={userDog} position={{lat: userDog.user.lat, lng: userDog.user.lng}}/>
        )
    })
  }

  return (
      <div>
        <Map google={props.google} zoom={14} initialCenter={{lat: props.lat, lng: props.lng}} disableDefaultUI={true}>
          {buildMarkers()}
          <InfoWindow visible={showingInfoWindow} onClose={closeInfoWindow} onOpen={renderInfoWindowButton} marker={activeMarker}>
                <div id="info-window" />
          </InfoWindow>
        </Map>
      </div>
    );
  }

 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAR8pjtTek4GgQP5MiIkfPVhc5XXD2rqbk')
})(MapContainer)