import "./Multi.css";

function Multi() {
    return(
        <div>
            Multi!
            <br />
            <button className="backHome" onClick={() => window.location="/"}>
                Home
            </button>
            <button className="singleButton" onClick={() => window.location="/single"}>
                Single
            </button>
        </div>
    )
}

export default Multi;