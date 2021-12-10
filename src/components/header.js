import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";

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
        <img className='size' src='https://1.bp.blogspot.com/-TS-FZ7WejCI/YLEcPS6SzjI/AAAAAAAAAjc/rz1avOEq6AglfyMk4TcBS3783GHPju1PQCLcBGAsYHQ/s320/puppylove.jpg'></img>
        {this.props.isLoggedIn && <Button style={{float: "right"}} onClick={this.logOut}>Logout</Button>}
        {!this.props.isLoggedIn && <Button style={{float: "right"}} href="/login">Sign In</Button>}
        {this.state.redirect && <Redirect to="/" />}
      </div>
    );
  };
};

export default Header;
