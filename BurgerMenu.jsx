import React from "react"

export default function BurgerMenu(props) {
    return(
        <div className={props.burgerMenuOpen ? "burger-open" : "burger-closed"}>
            <nav>
                <ul>
                    <li onClick={()=>props.menuHelp()}>Help</li>
                    <li onClick={()=>props.menuDisclaimer()}>Disclaimer</li>
                </ul>
            </nav>
        </div>
    )
}