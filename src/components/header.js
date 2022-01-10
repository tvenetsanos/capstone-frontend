import React, {Component, useState} from 'react';
import { Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import "../css/header.css"

const Header = (props) => {
  const anchorRef = React.useRef(null);
  const [redirect, setRedirect] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState("/")
  const [showMenuList, setShowMenuList] = useState(false)

  const logOut = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
    };
    fetch("http://localhost:4000/logout", requestOptions)
    setRedirect(true)
  }

  const viewMessages = () => {
    setRedirectUrl("/viewMessages")
    setRedirect(true)
  }

  const editAccount = () => {
    setRedirectUrl("/editAccount")
    setRedirect(true)
  }

  const viewMap = () => {
    setRedirectUrl("/findDogs")
    setRedirect(true)
  }

  return (
    <div>
      <AppBar position="static" className="headerColor">
      <Toolbar>
        <img className='size' src='https://1.bp.blogspot.com/-TS-FZ7WejCI/YLEcPS6SzjI/AAAAAAAAAjc/rz1avOEq6AglfyMk4TcBS3783GHPju1PQCLcBGAsYHQ/s320/puppylove.jpg'></img>
        <div className="menu">
          {props.isLoggedIn && 
            <div>
              <IconButton edge="end" className="headerColor" aria-label="menu" onClick={() => setShowMenuList(true)} ref={anchorRef}>
                <MenuIcon />
              </IconButton>
              <Popper open={showMenuList} transition disablePortal anchorEl={anchorRef.current}>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={() => setShowMenuList(false)}>
                        <MenuList autoFocusItem={true} id="menu-list-grow">
                          <MenuItem onClick={() => viewMessages()}>Messages</MenuItem>
                          <MenuItem onClick={() => editAccount()}>My account</MenuItem>
                          <MenuItem onClick={() => viewMap()}>View Map</MenuItem>
                          <MenuItem onClick={() => logOut()}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
          </div>}
          {!props.isLoggedIn && <Button href="/login">Sign In</Button>}
          </div>
      </Toolbar>
    </AppBar>
      {redirect && <Redirect to={redirectUrl} />}
    </div>
  );
};

export default Header;
