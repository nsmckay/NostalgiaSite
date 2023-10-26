import React from "react"

export default function Header(props) {
    return(
        <header>
            <nav>
                <div></div>
                <div id="heading-display">
                    <img src={props.logo} height="50" width="50"/>
                    <h1>S.S. NOSTALGIA</h1>
                </div>
                <button>≡</button>
            </nav>
            <div id="decade-display">
                <h2>{props.decade}</h2>
            </div>
        </header>
    )
}