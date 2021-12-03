import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className='size' src='https://1.bp.blogspot.com/-TS-FZ7WejCI/YLEcPS6SzjI/AAAAAAAAAjc/rz1avOEq6AglfyMk4TcBS3783GHPju1PQCLcBGAsYHQ/s320/puppylove.jpg'></img>
        {this.props.isLoggedIn && <Button>Hello</Button>}
        {!this.props.isLoggedIn && <Button href="/login">Sign In</Button>}
      </div>
    );
  };
};

export default Header;
