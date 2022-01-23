import React, { Component, useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";
import Geocode from "react-geocode";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [addressOne, setAddressOne] = useState("")
  const [addressTwo, setAddressTwo] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [userDetailId, setUserDetailId] = useState(0)
  const [dogName, setDogName] = useState("")
  const [dogBreed, setDogBreed] = useState("")
  const [dogAge, setDogAge] = useState(0)
  const [redirect, setRedirect] = useState(false)

  console.log(process.env.REACT_APP_GOOGLE_API_KEY)
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

      const handleAddDog = (user_id) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ 
              name: dogName,
              breed: dogBreed,
              age: dogAge,
              user_id: user_id
            })
          };
          fetch("http://localhost:4000/dogs", requestOptions)
          .then(setRedirect(true))
      }

      const handleSignUp = () => {
        console.log("you're in the signup")
        let address = `${addressOne} ${city}, ${state} ${zipCode}`
        Geocode.fromAddress(address).then(
        (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log("hello")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ 
              email: email,
              password_digest: password,
              name: name, 
              address_one: addressOne,
              address_two: addressTwo,
              city: city,
              state: state,
              zip_code: zipCode,
              lat: lat,
              lng: lng
            })
          };
          fetch("http://localhost:4000/signup", requestOptions)
          .then(res => res.json())
          .then((data) => {
            handleAddDog(data.id)
          })
      },
      (error) => {
        console.error(error);
      }
    );    
  }

  return (
     <div className="sign-up-button">
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="emailAddress"
            label="Email Address"
            type="email"
            onBlur={(event) => setEmail(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            onBlur={(event) => setPassword(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            onBlur={(event) => setName(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="addressOne"
            label="Address One"
            onBlur={(event) => setAddressOne(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="addressTwo"
            label="Address Two"
            onBlur={(event) => setAddressTwo(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label="City"
            onBlur={(event) => setCity(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="state"
            label="State"
            onBlur={(event) => setState(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="zipCodes"
            label="Zip Code"
            onBlur={(event) => setZipCode(event.target.value)}
            fullWidth
          />
          <h2>Dog Details</h2>
          <TextField
            autoFocus
            margin="dense"
            id="dogName"
            label="Name"
            onBlur={(event) => setDogName(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="dogBreed"
            label="Breed"
            onBlur={(event) => setDogBreed(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            onBlur={(event) => setDogAge(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <a href="/login">Already have an account?</a>
          <Link to={{
                pathname: "/"
            }}>
            <Button color="primary">
              Cancel
            </Button>
          </Link>
            <Button onClick={() => handleSignUp()} color="primary">
                Sign Up
            </Button>
        </DialogActions>
      </Dialog>
      {redirect && <Redirect to={{pathname: "/findDogs", state: { 
                    email: email,
                    name: name,
                }}} />}
    </div>
  );
}

export default SignUp;