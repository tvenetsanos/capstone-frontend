import React, {Component, useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect, useHistory } from "react-router-dom";

const EditAccount = (props) => {
  const [redirect, setRedirect] = useState(false)
  const [email, setEmail] = useState("")
  const [addressOne, setAddressOne] = useState("")
  const [addressTwo, setAddressTwo] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [name, setName] = useState("")
  const [dogName, setDogName] = useState("")
  const [dogBreed, setDogBreed] = useState("")
  const [dogAge, setDogAge] = useState(0)
  const history = useHistory()
  const [dogId, setDogId] = useState(0)

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include"
    };
    fetch(`http://localhost:4000/user`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.user.email)
        setAddressOne(data.user.address_one)
        setAddressTwo(data.user.address_two)
        setZipCode(data.user.zip_code)
        setState(data.user.state)
        setCity(data.user.city)
        setName(data.user.name)
        setDogName(data.dog.dog_name)
        setDogBreed(data.dog.breed)
        setDogAge(data.dog.age)
        setDogId(data.dog.id)
      })
  }, [])

  const submitEditDog = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
      body: JSON.stringify({
        dog_name: dogName,
        age: dogAge,
        breed: dogBreed
      })
    };
    fetch(`http://localhost:4000/dogs/${dogId}`, requestOptions)
  }

  const submitEditUser = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
      body: JSON.stringify({ 
        name: name,
        email: email,
        address_one: addressOne,
        address_two: addressTwo,
        zip_code: zipCode,
        state: state,
        city: city,
      })
    };
    fetch(`http://localhost:4000/users`, requestOptions)
    .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  const handleUpdateUserAndDog = () => {
    submitEditUser()
    submitEditDog()
    setRedirect(true)
  }

  const handleDeleteUserAndDog = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include"
    };
    fetch(`http://localhost:4000/users`, requestOptions)
    history.push("/")
  }

  return (
    <div>
       <TextField
            autoFocus
            margin="dense"
            id="emailAddress"
            label="Email Address"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="addressOne"
            label="Address One"
            value={addressOne}
            onChange={(event) => setAddressOne(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="addressTwo"
            label="Address Two"
            value={addressTwo}
            onChange={(event) => setAddressTwo(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label="City"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="state"
            label="State"
            value={state}
            onChange={(event) => setState(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="zipCodes"
            label="Zip Code"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
            fullWidth
          />
          <h2>Dog Details</h2>
          <TextField
            autoFocus
            margin="dense"
            id="dogName"
            label="Name"
            value={dogName}
            onChange={(event) => setDogName(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="dogBreed"
            label="Breed"
            value={dogBreed}
            onChange={(event) => setDogBreed(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            value={dogAge}
            onChange={(event) => setDogAge(event.target.value)}
            fullWidth
          />
          <Button onClick={() => { handleUpdateUserAndDog()}} color="primary" variant="contained">Submit</Button>
          <Button onClick={() => { handleDeleteUserAndDog()}} color="secondary" variant="contained">Delete Account</Button>
          {redirect && <Redirect to="/findDogs" />}
    </div>
  )
}

export default EditAccount;