import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateMovies from "./components/create-user.component";
import Users from "./components/users.component";

function App() {
  return (<Router>
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
          <Link className="navbar-brand">MovieMaster</Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/create-movie"}>Create Movie</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/movies"}>Movie List</Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={CreateMovies} />
              <Route path="/create-movie" component={CreateMovies} />
              <Route path="/movies" component={Users} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;