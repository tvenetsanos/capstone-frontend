import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GoogleMapReact from 'google-map-react';
import Map from "./map.js"

class DogHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      renderMap: false,
      dogTo: null,
      dogs: []
    }
    this.getDogs()
    this.getInitialCenter()
  }

  getInitialCenter = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
    };
    await fetch("http://localhost:4000/dog/details", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          lat: data.dog.lat,
          lng: data.dog.lng
        })
      })
  }

  getDogs = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    fetch("http://localhost:4000/dogs", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          dogs: data,
          renderMap: true
        })
      })
  }

  redirectToMessageCenter = (dogTo) => {
    this.setState({
      dogTo: dogTo,
      renderMap: false
    })
  }

  render() {
    return (
        <div style={{ height: '50vh', width: '50%' }}>
            {this.state.renderMap && <Map dogs={this.state.dogs.dogs} lat={this.state.lat} lng={this.state.lng} redirect={this.redirectToMessageCenter} />}
            {this.state.dogTo && <Redirect to={{pathname: "/message", state: {dogTo: this.state.dogTo}}} />}
        </div>
    );
  };
}
 
export default DogHome;