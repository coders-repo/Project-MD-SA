
import React from "react";
import './App.css';
import AdminDashboard from './pages/AdminDashboard';
import { NotificationContainer } from "react-notifications";
import {
  BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import "react-notifications/lib/notifications.css";
import { Web3ReactProvider } from "@web3-react/core"
import Web3Provider from "web3"

function getLibrary(provider, connector) {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

function App() {
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <NotificationContainer/>
        <Router>
          <Switch>
            <Route path="/" component={AdminDashboard} />
          </Switch>
        </Router>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
