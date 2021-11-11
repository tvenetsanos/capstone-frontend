// import React, { Component } from "react";
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import MoodIcon from '@material-ui/icons/Mood';
// import MoodBadIcon from '@material-ui/icons/MoodBad';
// import { MoodBad } from "@material-ui/icons";
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import Image from "./"


// class FindLove extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       dogs: [],
//       input: 0,
//     }
//   }

//   componentDidMount() {
//     fetch("http://localhost:3001/dogs")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       this.setState({
//         dogs: data
//       })
//     })
//   }

//   removeDogFromList = (dogId) => {
//     console.log(dogId)
//     let newDogs = this.state.dogs.filter((dog) => {
//       return dogId !== dog.id
//     })
//     console.log(newDogs)
//     this.setState({
//       dogs: newDogs
//     })
//   }

//   handleInput = (event) => {
//     this.setState({
//       input: this.state.input
//     })
//   }

//   renderDogs = () => {
//     return this.state.dogs.map(dog => 
//     <Grid item xs={12} md={4}>
//       <p>{this.state.input}</p>
//       <Card className="card-root">
//         <CardActionArea>
//           <CardMedia
//             className="card-image"
//             image={dog.image}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {dog.name}
//             </Typography>
//             <Typography gutterBottom variant="h5" component="h2">
//               {dog.age}
//             </Typography>
//               Bio:
//             <Typography variant="body2" color="textSecondary" component="p">
//               {dog.bio}
//               </Typography>
//               <br></br>
//               Likes:
//             <Typography variant="body2" color="textSecondary" component="p">
//               {dog.likes}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           {/* make a like button */}
//           <Button size="small" color="primary" onClick={this.handleInput}>
//             like
//             </Button>
//           <Button size="small" color="primary">
//             <MoodIcon/>
//           </Button>
//           <Button size="small" color="primary" onClick={() => this.removeDogFromList(dog.id)}>
//             <MoodBad />
//           </Button>
//         </CardActions>
//       </Card>
//     </Grid>
//     );
//   }

//   render() {
//     return (
//       <div>
//         {/* make an input field that accepts a number */}
//         <TextField id="standard-basic" label="Input"/>
//         <Grid container spacing={1}>
//           {this.renderDogs()}
//         </Grid>
//       </div>
//     );
//   }
// }
 
// export default FindLove;