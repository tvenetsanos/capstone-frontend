import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      showMenuList: false,
    }
  }

  logOut = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
    };
    fetch("http://localhost:4000/dog/signout", requestOptions)
    this.setState({
      redirect: true
    })
  }

  setShowMenuList = () => {
    this.setState({
      showMenuList: true
    })
  }

  render() {
    return (
      <div>
          <AppBar position="static" style={{backgroundColor: "#ebc344"}}>
        <Toolbar>
          <img className='size' src='https://1.bp.blogspot.com/-TS-FZ7WejCI/YLEcPS6SzjI/AAAAAAAAAjc/rz1avOEq6AglfyMk4TcBS3783GHPju1PQCLcBGAsYHQ/s320/puppylove.jpg'></img>
          <div style={{marginLeft: '60rem'}}>
            {this.props.isLoggedIn && 
              <div>
                <IconButton edge="end" style={{backgroundColor: "#ebc344"}} aria-label="menu">
                  <MenuIcon onClick={this.showMenuList}/>
                </IconButton>
                {this.state.showMenuList && 
                  <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>}
                <Button>Messages</Button>
                <Button onClick={this.logOut}>Logout</Button>
              </div>}
            {!this.props.isLoggedIn && <Button href="/login">Sign In</Button>}
          </div>
        </Toolbar>
      </AppBar>
        {this.state.redirect && <Redirect to="/" />}
      </div>
    );
  };
};

export default Header;
