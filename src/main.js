import React, {Component} from 'react';
// import SignUp from "./components/signUp.js"
// import { makeStyles } from '@material-ui/core/styles';
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
import Footer from './components/footer.js';
import Header from './components/header.js';

class Main extends Component {

  render() {
    return (
      <div>
        <Header isLoggedIn={false} />
        <img className='home-image' src='https://i.ytimg.com/vi/FHytoCvj90w/maxresdefault.jpg' style={{width: '100%', height: '45rem'}}></img>
        <Footer />
      </div>
    );
  }
}

export default Main;
