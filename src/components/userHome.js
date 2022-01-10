import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GoogleMapReact from 'google-map-react';
import Map from "./map.js"

const UserHome = () => {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [renderMap, setRenderMap] = useState(false)
  const [userTo, setUserTo] = useState(null)
  const [userFrom, setUserFrom] = useState(null)
  const [usersDogs, setUsersDogs] = useState([])

  useEffect(() => {
    getUsers()
    getInitialCenter()
  }, [])

  const getInitialCenter = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
    };
    await fetch("http://localhost:4000/user", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setUserFrom(data.user)
        setLat(data.user.lat)
        setLng(data.user.lng)
      })
  }

  const getUsers = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    fetch("http://localhost:4000/users", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setUsersDogs(data)
        setRenderMap(true)
      })
  }

  const redirectToMessageCenter = (userTo) => {
    setUserTo(userTo)
    setRenderMap(false)
  }

  return (
    <div style={{ height: '50vh', width: '100%', zIndex: "-1", position: "relative"}}>
        {renderMap && <Map usersDogs={usersDogs.users} lat={lat} lng={lng} redirect={redirectToMessageCenter} />}
        {userTo && <Redirect to={{pathname: "/message", state: {userTo: userTo.id, userFrom: userFrom.id}}} />}
    </div>
  );
}
 
export default UserHome;