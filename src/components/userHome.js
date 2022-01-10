import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GoogleMapReact from 'google-map-react';
import Map from "./map.js"

class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      renderMap: false,
      userTo: null,
      userFrom: null,
      usersDogs: []
    }
    this.getUsers()
    this.getInitialCenter()
  }

  getInitialCenter = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
    };
    await fetch("http://localhost:4000/user", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userFrom: data.user,
          lat: data.user.lat,
          lng: data.user.lng
        })
      })
  }

  getUsers = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    fetch("http://localhost:4000/users", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          usersDogs: data,
          renderMap: true
        })
      })
  }

  redirectToMessageCenter = (userTo) => {
    console.log(userTo)
    this.setState({
      userTo: userTo,
      renderMap: false
    })
  }

  render() {
    return (
        <div style={{ height: '50vh', width: '100%', zIndex: "-1", position: "relative"}}>
            {this.state.renderMap && <Map usersDogs={this.state.usersDogs.users} lat={this.state.lat} lng={this.state.lng} redirect={this.redirectToMessageCenter} />}
            {this.state.userTo && <Redirect to={{pathname: "/message", state: {userTo: this.state.userTo.id, userFrom: this.state.userFrom.id}}} />}
        </div>
    );
  };
}
 
export default UserHome;