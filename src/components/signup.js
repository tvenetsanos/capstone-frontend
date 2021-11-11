// import React, { Component } from "react";
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { Redirect } from "react-router-dom";

// class SignUp extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             open: false,
//             email: "",
//             dogName: "",
//             userDetailId: 0
//         }
//     }

//     handleClickOpen = () => {
//         this.setState({
//             open: true,
//         })
//       };

//       handleClose = () => {
//         this.setState({
//             open: false,
//         })
//       };

//       handleSignUp = () => {
//           console.log(this.state.email)
//           this.handleClose()
//           const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ 
//               email: this.state.email,
//               dogName: this.state.dogName, 
//             })
//           };
//           fetch("http://localhost:3001/userDetails", requestOptions)
//           .then((res) => res.json())
//           .then((data) => { 
//             console.log(data.id)
//             this.setState({
//               userDetailId: data.id
//           })})
//       }

//       handleEmailChange = (event) => {
//           this.setState({
//               email: event.target.value
//           })
//       }

//       handleDogNameChange = (event) => {
//         this.setState({
//             dogName: event.target.value
//         })
//     }

//   componentDidMount() {
//   }

//   render() {
//     return (
//      <div className="sign-up-button">
//       <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
//         Sign up
//       </Button>
//       <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here. We will send updates
//             occasionally.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             onBlur={this.handleEmailChange}
//             fullWidth
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Dog Name"
//             onBlur={this.handleDogNameChange}
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={this.handleClose} color="primary">
//             Cancel
//           </Button>
//           <Link to={{
//                 pathname: "/userDetails", 
//                 state: { 
//                     email: this.state.email,
//                     dogName: this.state.dogName,
//                     userDetailId: this.state.userDetailId,
//                 }
//             }}>
//             <Button onClick={this.handleSignUp} color="primary">
//                 Sign Up
//             </Button>
//           </Link>
//         </DialogActions>
//       </Dialog>
//     </div>
//     );
//   }
// }

// export default SignUp;