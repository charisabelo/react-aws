import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <Authenticator />
    </div>
  );
}

export default withAuthenticator(App);
