import React from "react"

export default function RandomItem(props) {
    return(
        <div class="ran-item" style={props.randomItemStyles}>
            <img src="placeHolder.png" style={props.randomImageStyles}/>
        </div>
    )
}