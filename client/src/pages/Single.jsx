import '../App.css';
import './Single.css';

function Single() {
    return (
      <div className="App">
        <div className="Top-box">
          <button
          className="list-button"
          onClick = {() => window.location = "/multi"}
          >
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
          <h1><a href="https://www.smashbros.com/en_US/" title="filler" target="_blank">link</a>
            +description?</h1>
        </div>
        <div className="Right-box">
          {Review(1)} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis fugit quod neque perferendis ab minus ea cumque quae! Dolorum ipsa, corrupti, praesentium quo eaque aperiam harum pariatur ipsam quae, ex dolorem accusamus numquam quam itaque sapiente quis. Ullam, autem eaque tempora minima quia est deserunt explicabo saepe, ipsam voluptatem labore.
          {Review(2)} Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, perspiciatis iusto harum, eligendi debitis similique accusamus consequatur eveniet sed laudantium corrupti, quod aspernatur perferendis illum mollitia dolores minus repudiandae vero dicta voluptatibus impedit velit pariatur laboriosam? Quis, explicabo optio vitae cumque praesentium officia doloribus, perspiciatis illo totam, nesciunt eligendi ex?
          {Review(3)} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque, a consequatur atque sequi enim vitae, repellendus iusto nam nostrum aperiam ab. Velit, placeat consectetur?
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