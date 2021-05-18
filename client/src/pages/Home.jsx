import './Home.css';

function Home() {
    return (
        <div>
            <button className="randomButton" onClick={() => window.location = "/single"}>
                Generate a random game
            </button>
            <button className="byConsole" onClick={() => window.location = "/multi"}>
                List games by console
            </button>
        </div>
    )
}

export default Home;