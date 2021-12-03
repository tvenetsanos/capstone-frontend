import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import Map from "./map.js"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class DogHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      addressLoaded: false,
      dogsLoaded: false,
      dogs: []
    }
    Geocode.setApiKey("AIzaSyAR8pjtTek4GgQP5MiIkfPVhc5XXD2rqbk");
    this.getLatLng()
    this.getDogs()
  }

  getLatLng = async () => {
    await Geocode.fromAddress("213 Heritage Circle Mount Pleasant SC, 29464").then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          lat: lat,
          lng: lng,
          loaded: true
        })
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getDogs = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch("http://localhost:4000/dogs", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        this.setState({dogs: data})
      })
  }

  render() {
    return (
        <div style={{ height: '50vh', width: '50%' }}>
            {this.state.loaded && <Map lng={this.state.lng} lat={this.state.lat} dogs={this.state.dogs} />}
        </div>
    );
  };
}
 
export default DogHome;