import React, { useState } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect, Link } from "react-router-dom";
import { TextField, Button, Input, InputLabel, InputAdornment, IconButton } from '@material-ui/core';

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)

      const handleSignIn = () => {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ 
              email: email,
              password_digest: password
            })
          };
          fetch("http://localhost:4000/login", requestOptions)
          .then((res) => res.json())
          .then((data) => {
            setRedirect(true)
        })
      }

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
            onBlur={(event) => setEmail(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type='password'
            onBlur={(event) => setPassword(event.target.value)}
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
          <Button onClick={handleSignIn} color="primary">
                Log in
          </Button>
        </DialogActions>
      </Dialog>
      {redirect && 
      <Redirect
            to={{
            pathname: "/findDogs",
            state: { 
                    email: email
                }
          }}
        />}
    </div>
    );
}

export default SignIn;