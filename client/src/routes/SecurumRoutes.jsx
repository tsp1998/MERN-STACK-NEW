import React from "react";
import { Switch, Route } from "react-router";
import IndexPage from "../pages/IndexPage";
import SignInAndSignUpPage from "../../ecomm/pages/SignInAndSignUpPage";
import SendCoinsPage from "../pages/SendCoinsPage";
import ProfilePage from "../pages/ProfilePage";
import { BrowserRouter } from "react-router-dom";

export default function AllRoutes() {
  return (
    <div>
      {/* <Route path="/sign-in-and-sign-up" component={SignInAndSignUpPage} />
        <Route path="/send-coins" component={SendCoinsPage} />
        <Route path="/profile" component={ProfilePage} /> */}
    </div>
  );
}
