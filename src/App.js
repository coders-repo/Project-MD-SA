
import React from "react";
import './App.css';
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core"
import Web3Provider from "web3"
import AdminDashboard from './pages/adminDashboard.js';

function getLibrary(provider, connector) {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

function App() {
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <NotificationContainer />
        <Router>
          <Switch>
            <Route exact path="/" component={AdminDashboard} />
          </Switch>
        </Router>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
