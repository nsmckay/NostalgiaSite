import React from "react"

export default function RandomItem(props) {
    return(
        //<div onClick={()=>props.func(props.decade)} class="ran-item" style={props.randomItemStyles}>
        <div onClick={()=>props.func(props.id)} className="ran-item" style={props.randomItemStyles}>
            {/*<img src="img/placeHolder.png" style={props.randomImageStyles}/>*/}
            <img src={`img/${props.imgurl}.png`} style={props.randomImageStyles}/>
        </div>
    )
}