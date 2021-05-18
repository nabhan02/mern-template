import logo from './logo.svg';
import './App.css';
import Single from './pages/Single';
import Home from './pages/Home';
import Multi from './pages/Multi';

import {Route, BrowserRouter as Router, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      {/*
      <div className="linkHeader">
        <nav>
          <Link to="/">Home </Link>
          <Link to="/single">Single </Link>
          <Link to="/multi">Multi</Link>
        </nav>
        <br/>
      </div>
      */}
      
      
      <Route path="/" exact component={Home} />
      <Route path="/single" component={Single} />
      <Route path="/multi" component={Multi} />
    </Router>

    
    //<Single />
  )
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
