import React from "react"

export default function RandomItem(props) {
    return(
        <div onClick={()=>props.func(props.decade)} class="ran-item" style={props.randomItemStyles}>
            <img src="img/placeHolder.png" style={props.randomImageStyles}/>
        </div>
    )
}