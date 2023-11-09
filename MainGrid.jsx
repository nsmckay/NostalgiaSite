import React from "react"
import RandomItem from "./RandomItem"

export default function MainGrid(props) {
    return(
        <main>
            <div id="ran-grid" style={props.mainGridStyles}>
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles}/>
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles}/>
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles}/>
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles}/>
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles}/>
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
                <RandomItem randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} />
            </div>
            <div id="item-info">
                <div id="item-header">
                    <div></div>
                    <h3>ITEM</h3>
                    <button>↩</button>
                </div>
                <img src="placeHolder.png" height="200" width="200"/>
                <div id="item-description">
                    <p>Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here.</p>
                </div>
            </div>
            <div id="welcome">
                <h3>WELCOME!</h3>
                <p>Welcome to the S.S. Nostalgia, an archive of modern pop culture history.</p>
                <p>A time machine, if you will!</p>
                <p>Feel free to click one of the buttons below to take yourself back to your decade of choice.</p>
                <p>Reminisce by scrolling through the gallery of random items. Click on them to learn more!</p>
                <p>When you're done learning, click the button in the top-right corner to return to the gallery.</p>
            </div>
            <div id="disclaimer">
                <h3>DISCLAIMER</h3>
                <p>I (the creator of this website) am not, by any means, an expert on pop culture or its history.</p>
                <p>As a human being, there will be biases in what items I include in my database. Largely based on what I'm familiar with, or what I've at least heard of.</p>
                <p>As pop culture is the focus, I opted to exclude the likes of disasters, controversies and political figures, except if they had a profound impact on pop culture (e.g. US presidents)</p>
                <p>The item descriptions were generated using AI.</p>
                <p>AI has also been used to generate images where no suitable stock image was available for free use.</p>
            </div>
        </main>
    )
}