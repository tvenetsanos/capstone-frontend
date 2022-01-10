import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect, Link } from "react-router-dom";
import { TextField, Button, Input, InputLabel, InputAdornment, IconButton } from '@material-ui/core';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            redirect: false
        }
    }

      handleSignIn = () => {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ 
              email: this.state.email,
              password_digest: this.state.password
            })
          };
          fetch("http://localhost:4000/login", requestOptions)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            this.setState({
              redirect: true
            })
        })
      }

      handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
      handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

  componentDidMount() {
  }

  render() {
    return (
     <div className="sign-up-button">
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To login to this website, please enter your email address and password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            onBlur={this.handleEmailChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type='password'
            onBlur={this.handlePasswordChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <a href="/signup">Don't have an account?</a>
          <Link to={{
                pathname: "/"
            }}>
            <Button color="primary">
              Cancel
            </Button>
          </Link>
          <Button onClick={this.handleSignIn} color="primary">
                Log in
          </Button>
        </DialogActions>
      </Dialog>
      {this.state.redirect && 
      <Redirect
            to={{
            pathname: "/findDogs",
            state: { 
                    email: this.state.email,
                    dogName: this.state.dogName,
                    addressOne: this.state.addressOne,
                    addressTwo: this.state.addressTwo,
                    city: this.state.city,
                    state: this.state.state,
                    zipCode: this.state.zipCode
                }
          }}
        />}
    </div>
    );
  }
}

{/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          /> */}
 
export default SignIn;