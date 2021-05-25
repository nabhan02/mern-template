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
          <div className="Top-box">
            <button className="home-button" onClick={() => window.location="/"}>
                Home
            </button>
            <div className="drpdwn">
              <button className="random-button" onClick={() => window.location = "/single"}>
                <h3>Random Game</h3>
              </button>
              <button className="list-button" onClick={() => window.location = "/multi"}><h3>New List</h3></button>
              <div className="dropdown">
                <a href="#">Xbox</a>
                <a href="#">Playstation</a>
                <a href="#">PC</a>
                <a href="#">Switch</a>
              </div>
              <header className="Console">
                Console
              </header>
            </div>
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
