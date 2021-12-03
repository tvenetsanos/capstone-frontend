import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import PrivateRoute from "./components/privateroute.js"
//import Main from "./main.js"
import SignUp from "./components/signup.js"
import SignIn from "./components/signin.js"
import DogHome from "./components/dogHome.js"
import PrivateRoute from "./components/privateroute.js"
import Main from "./main.js"


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <PrivateRoute component={DogHome}
                                path="/finddogs">
                            </PrivateRoute>
                            {/* <PrivateRoute 
                                component={WriteReview}
                                path="/writereview">
                            </PrivateRoute> */}
                            <Route path="/signup" exact>
                                <SignUp />
                            </Route>
                            <Route path="/login" exact>
                                <SignIn />
                            </Route>
                            <Route path="/">
                                <Main />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

// import React, {Component} from 'react';
// // import {
// //     BrowserRouter as Router,
// //     Switch,
// //     Route,
// //     Link
// // } from "react-router-dom";
// // import SignUp from "./components/signUp.js"
// // import FindLove from "./components/findLove.js"
// // import UserDetails from "./components/dogDetails.js"
// // import Main from "./main.js"
// import Footer from './components/footer.js';
// import Header from './components/header.js';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;
