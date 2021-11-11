// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

// class UserDetails extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             open: false,
//             email: props.location.state.email,
//             dogName: props.location.state.dogName,
//             userDetailId: props.location.state.userDetailId,
//             age: 0,
//             interests: "",
//             bio: "",
//         }
//     }

//     handleAgeUpdate = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleInterestsUpdate = (event) => {
//         this.setState({
//             interests: event.target.value
//         })
//     }

//     handleBioUpdate = (event) => {
//         this.setState({
//             bio: event.target.value
//         })
//     }

//     // handleFinishSignUp = () => {
//     //     const requestOptions = {
//     //         method: 'PUT',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         body: JSON.stringify({ 
//     //             id: this.state.userDetailId,
//     //             email: this.state.email,
//     //             dogName: this.state.dogName,
//     //             age: this.state.age,
//     //             interests: this.state.interests,
//     //             bio: this.state.bio,
//     //         })
//     //     };
//     //      fetch("http://localhost:3001/userDetails/", requestOptions)
//     // }

//   render() {
//     return (
//         <div className="dog-details">
//             <h1>Welcome {this.state.dogName}</h1>
//             <TextField id="standard-basic" label="Age" onBlur={this.handleAgeUpdate} />
//             <br></br>
//             <TextField id="standard-basic" label="Interests"  onBlur={this.handleInterestsUpdate}/>
//             <br></br>
//             <TextField id="standard-basic" label="Bio" onBlur={this.handleBioUpdate} />
//             <br></br>
    
//             <Link to="/findLove">
//                 <Button className="button" onClick={this.handleFinishSignUp} color="primary" variant="contained">
//                     Find Love!
//                 </Button>
                
//             </Link>
//         </div>
//     );
//   };
// }
 
// export default UserDetails;



// import React, { Component } from "react";
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import { Link, Redirect } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import EditIcon from '@material-ui/icons/Edit';


// class MyReview extends Component {
//   constructor(props) {
//     super(props)
//     console.log("In my reviews")
//     this.state = {
//         reviews: []
//     }
//   }

//   componentDidMount() {
//     const requestOptions = {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     }
//     fetch(`/reviews`, requestOptions)
//     .then((resp) => resp.json())
//     .then((data) => {
//       this.setState({
//         reviews: data
//       })
//     })
//   }


//    editDetails = (dog) => {
//      return (
//      <Redirect 
//         to={{
//           pathname: "/writeReview",
//           state: {
//             userDetailId: this.state.userDetailId,
//             dogName: dog.dogName,
//             age: dog.age,
//             interests: dog.interests,
//             bio: dog.bio,
//             edit: true
//           }
//         }} />)
//   }

//   deleteReview = (dogId) => {
//     const requestOptions = {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ 
//         id: dogId
//       })
//     }
//     fetch("/dogs", requestOptions)
//     .then(() => {
//       this.setState({
//         reviews: this.state.dogs.filter((dog) => {
//           return dog.id !== dogId
//         })
//       })
//     })
//   } 

//   renderReviews = () => {
//     return this.state.dogs.map((dog, index) => {
//       return (
//         <Grid item xs={12} md={4} key={index}>
//           <Card className="card-root">
//             <CardActionArea>
//               <CardContent>
//                   Restaurant:
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   {dog.dogName}
//                 </Typography>
//                 Rating:
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   {dog.age}
//                 </Typography>
//                 Likes:
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   {dog.interests}
//                 </Typography>
//                 Dislikes:
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   {dog.bio}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//             </CardActions>
//             <Button size="small" color="primary" onClick={() => this.deleteReview(dog.id)}>
//               <DeleteForeverIcon />
//             </Button>
//             <Link to={{
//               pathname: "/userDetails",
//               state: {
//                 userDetailId: this.state.userDetailId,
//                 reviewId: review.id,
//                 restaurant: review.restaurant,
//                 rating: review.rating,
//                 likes: review.likes,
//                 dislikes: review.dislikes,
//                 edit: true
//               }
//             }}>
//               <Button size="small" color="primary" onClick={() => this.editReview(review)}>
//                 <EditIcon />
//               </Button>
//             </Link>
//           </Card>
//         </Grid>
//       )
//     })
//   }

//   render() {
//     return (
//       <div> 
//         {this.state.reviews.length > 0 && 
//           <div>
//             <h2>My Reviews</h2>
//             <Grid container spacing={1}>
//               {this.renderReviews()}
//             </Grid>
//             <Link
//               to={{
//                 pathname: "/writeReview",
//                 state: {
//                   userDetailId: this.state.userDetailId
//               }
//               }}>
//                 <Button onClick={this.handleSignUp} color="primary">
//                     Add another
//                 </Button>
//               </Link>
//               </div>}
//           {this.state.reviews.length === 0 && 
//             <Link
//             to={{
//               pathname: "/writeReview",
//               state: {
//                 userDetailId: this.state.userDetailId
//             }
//             }}>
//               Add a review
//             </Link>}
//       </div>
//     )
//   }
// }
 
// export default MyReview;