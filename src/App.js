import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login"
import Maincontent from "./Seller-Component/Maincontent"


function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <div style={{ marginTop: "5rem" }}>
          <Switch>
            {/* <Route exact path="/" component={Login} /> */}
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Maincontent} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
