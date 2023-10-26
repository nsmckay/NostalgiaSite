import React from "react"

export default function FooterButton(props) {
    return(
        <span onClick={()=>props.func(props.text)}>
            <button>{props.text}</button>
        </span>
    )
}