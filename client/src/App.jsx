import React from "react";
import { Switch, Route } from "react-router";

//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//jquery
import $ from "jquery";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED, SET_USER } from "./redux/actions/user-types";
import { signOut } from "./redux/actions/user-actions";

//pages
import IndexPage from "./pages/IndexPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import SendCoinsPage from "./pages/SendCoinsPage";
import ProfilePage from "./pages/ProfilePage";
import BlockchainPage from "./pages/BlockchainPage";

//components
import Authenitication from "./utils/Authentication";

//auth
//utils
import axios from "axios";
import jwtDecode from "jwt-decode";

axios.defaults.baseURL = "http://localhost:5000/api";

const token = localStorage.securum;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(signOut());
    window.location.href = "/signin-signup";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    store.dispatch({
      type: SET_USER,
      user: decodedToken,
    });
    axios.defaults.headers.common["Authorization"] = token;
  }
}

class App extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      (function blink() {
        $("#blink_text").fadeOut(500).fadeIn(500, blink);
      })();
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="Securum">
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/blockchain" component={BlockchainPage} />
            <Authenitication
              path="/signin-signup"
              component={SignInAndSignUpPage}
            />
            <Route
              path="/sign-in-and-sign-up"
              component={SignInAndSignUpPage}
            />
            <Route path="/send-coins" component={SendCoinsPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
