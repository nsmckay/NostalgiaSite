import React from "react"

export default function Header(props) {
    return(
        <header style={props.headerStyles}>
            <nav>
                <div></div>
                <div id="heading-display">
                    <img src={props.logo} height="50" width="50" style={props.logoRadius}/>
                    <h1 style={props.headingFont}>S.S. NOSTALGIA</h1>
                </div>
                <button>≡</button>
            </nav>
            <div id="decade-display">
                <h2 style={props.mainFont}>{props.decade}</h2>
            </div>
        </header>
    )
}