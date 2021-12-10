import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";
import Geocode from "react-geocode";

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            email: "",
            addressOne: "",
            addressTwo: "",
            zipCode: "",
            state: "",
            city: "",
            dogName: "",
            password: "",
            userDetailId: 0
        }
        Geocode.setApiKey("AIzaSyAR8pjtTek4GgQP5MiIkfPVhc5XXD2rqbk");
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        })
      };

      handleClose = () => {
        this.setState({
            open: false,
        })
      };

      handleSignUp = () => {
        let address = `${this.state.addressOne} ${this.state.city}, ${this.state.state} ${this.state.zipCode}`
        Geocode.fromAddress(address).then(
        (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ 
              email: this.state.email,
              password_digest: this.state.password,
              dog_name: this.state.dogName, 
              address_one: this.state.addressOne,
              address_two: this.state.addressTwo,
              city: this.state.city,
              state: this.state.state,
              zip_code: this.state.zipCode,
              lat: lat,
              lng: lng
            })
          };
          fetch("http://localhost:4000/dog/signup", requestOptions)
      },
      (error) => {
        console.error(error);
      }
    );
          this.handleClose()
          
      }

      handleEmailChange = (event) => {
          this.setState({
              email: event.target.value
          })
      }

      handleDogNameChange = (event) => {
        this.setState({
            dogName: event.target.value
        })
    }
    
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleAddressOneChange = (event) => {
        this.setState({
            addressOne: event.target.value
        })
    }
    handleAddressTwoChange = (event) => {
        this.setState({
            addressTwo: event.target.value
        })
    }
    handleZipCodeChange = (event) => {
        this.setState({
            zipCode: event.target.value
        })
    }
    handleStateChange = (event) => {
        this.setState({
            state: event.target.value
        })
    }
    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

  componentDidMount() {
  }

  render() {
    return (
     <div className="sign-up-button">
      <Dialog open={true} onClose={this.handleClose} aria-labelledby="form-dialog-title">
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
            onBlur={this.handleEmailChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            onBlur={this.handlePasswordChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Dog Name"
            onBlur={this.handleDogNameChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="addressOne"
            label="Address One"
            onBlur={this.handleAddressOneChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="addressTwo"
            label="Address Two"
            onBlur={this.handleAddressTwoChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label="City"
            onBlur={this.handleCityChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="state"
            label="State"
            onBlur={this.handleStateChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="zipCodes"
            label="Zip Code"
            onBlur={this.handleZipCodeChange}
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
          <Link to={{
                pathname: "/finddogs", 
                state: { 
                    email: this.state.email,
                    dogName: this.state.dogName,
                }
            }}>
            <Button onClick={this.handleSignUp} color="primary">
                Sign Up
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
    );
  }
}

export default SignUp;