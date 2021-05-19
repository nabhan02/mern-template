//import logo from './logo.svg';
import '../App.css';
import './Multi.css';
//import Multiple from './pages/Multiple';
import React, { Component } from 'react';
import axios from 'axios';

class Multi extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      gameData: []
    };
  }

  // functional component: useEffect
  componentDidMount(){
    axios.get("http://localhost:5000/users").then((res) => {
      // console.log(res);
      this.setState({
        gameData: res.data
      })
    });
  }

  render(){
    return (
      <div className="App">
        <button className="backHome" onClick={() => window.location="/"}>
                Home
            </button>
            <button className="singleButton" onClick={() => window.location="/single"}>
                Single
            </button>
          <div className="Top-box">
            <div className="drpdwn">
              <button id="single-game"><h3>New game</h3></button>
              <button id="multi-game"><h3>New List</h3></button>
              <div className="dropdown">
                <a href="#">Xbox</a>
                <a href="#">Playstation</a>
                <a href="#">PC</a>
                <a href="#">Switch</a>
              </div>
            </div>
    
            <h1>
              picture background here
            </h1>
        </div>
        <div className="Table-title">
          <h2 id='title'>Game Suggestions</h2>
        </div>
        {
          this.state.gameData.length > 0 && 
          <div className="Table-data">
            <table id="data">
              <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
              </tbody>
            </table>
          </div>
        }
      </div>
    )
  }

  renderTableData() {
    return this.state.gameData.map((gameData, index) => {
      const { name, rating, link } = gameData
      return (
        <tr key={name}>
          <td id="left-column">{name}</td>
          <td id="middle-column">{rating}</td>
          <td id="right-column">{link}</td>
        </tr>
      )
    })
  }

  renderTableHeader(){
    let header = Object.keys(this.state.gameData[0])
    return header.map((key, index) => {
      return <th id="table-headers" key={index}>{key.toUpperCase()}</th>
    })
  }
}

export default Multi;

/*
function App() {
  return (
    <div className="App">
      <div className="Top-box">
        <h1>
          picture background here
        </h1>
      </div>
      <div className="Left-box">
        <h1>Name</h1>
      </div> 
      <div className="Middle-box">
        <h1>Reviews</h1>
      </div>
      <div className="Right-box">
        <h1>Links</h1>
      </div>


    
    </div>
  )

}*/

//ABOVE IS IMPORTED FROM APP.JS, MY COPY




/*
THIS IS THE ORIGINAL


//import logo from './logo.svg';
//import './App.css';
//import './Multiple.css';
//import Multiple from './pages/Multiple';
/*import React, { Component } from 'react'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state =
      gameData: [
        {name: "Rocket League", rating: 9/10, link: "<INSERT URL HERE>"},
        {name: "Valorant", rating: 8/10, link: "<INSERT URL HERE>"},
        {name: "League of Legends", rating: 6/10, link: "<INSERT URL HERE>"},
        {name: "Apex Legends", rating: 4/10, link: "<INSERT URL HERE>"}
      ]
    }
  }

  render(){
    return (
      <div className="App">
          <div className="Top-box">
          <h1>
            picture background here
          </h1>
        </div>
        <div className="Table-title">
          <h2 id='title'>Game Suggestions</h2>
        </div>
        
        <div className="Table-data">
          <table id="data">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  renderTableData() {
    return this.state.gameData.map((gameData, index) => {
      const { name, rating, link } = gameData
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{rating}</td>
          <td>{link}</td>
        </tr>
      )
    })
  }

  renderTableHeader(){
    let header = Object.keys(this.state.gameData[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }
}


/*
function App() {
  return (
    <div className="App">
      <div className="Top-box">
        <h1>
          picture background here
        </h1>
      </div>
      <div className="Left-box">
        <h1>Name</h1>
      </div> 
      <div className="Middle-box">
        <h1>Reviews</h1>
      </div>
      <div className="Right-box">
        <h1>Links</h1>
      </div>


    
    </div>
  )

}*/

//export default Multi;