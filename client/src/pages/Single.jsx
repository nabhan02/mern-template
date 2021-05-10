import '../App.css';
import './Single.css';

function Single() {
    return (
      <div className="App">
        <div className="Top-box">
          <button className="list-button">
            <b>List by genre</b>
          </button>
          <button className="random-button">
            <b>Generate new</b>
          </button>
          <header className="Game-title">
            Name right here
          </header>
          <text>
            Should we even include a picture background?
          </text>
        </div>
        <div className="Left-box">
          <h1>link+description?</h1>
        </div>
        <div className="Right-box">
          {Review(1)}
          {Review(2)}
          {Review(3)}
        </div>
      </div>
    )
}

function Review(props) {
  return(
    <h2>
      Review {props}
    </h2>
  )
}

export default Single;