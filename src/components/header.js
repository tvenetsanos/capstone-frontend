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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
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

  render() {
    return (
      <div>
          <AppBar position="static" style={{backgroundColor: "#ebc344"}}>
        <Toolbar>
          <IconButton edge="start" style={{backgroundColor: "#ebc344"}} aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <img className='size' src='https://1.bp.blogspot.com/-TS-FZ7WejCI/YLEcPS6SzjI/AAAAAAAAAjc/rz1avOEq6AglfyMk4TcBS3783GHPju1PQCLcBGAsYHQ/s320/puppylove.jpg'></img>
          <div style={{marginLeft: '60rem'}}>
            {this.props.isLoggedIn && <Button onClick={this.logOut}>Logout</Button>}
            {!this.props.isLoggedIn && <Button href="/login">Sign In</Button>}
            </div>
            <div>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      <AccountCircleIcon/>
                    </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                <MenuItem onClick={popupState.close}>My account</MenuItem>
                <MenuItem onClick={popupState.close}>Logout</MenuItem>
              </Menu>
            </React.Fragment>
                )}
              </PopupState>
            </div>
        </Toolbar>
      </AppBar>
        {this.state.redirect && <Redirect to="/" />}
      </div>
    );
  };
};

export default Header;
