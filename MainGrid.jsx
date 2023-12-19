import React from "react"
import RandomItem from "./RandomItem"

export default function MainGrid(props) {
    return(
        <main>
            <div id="ran-grid" style={props.mainGridStyles}>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
                <RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>
            </div>
            <div id="item-info" style={props.itemInfoStyles}>
                <div id="item-header" style={props.itemDescriptionStyles}>
                    <div></div>
                    <h3 style={props.itemDescriptionStyles}>ITEM</h3>
                    <button onClick={()=>props.returnFunc()}>↩</button>
                </div>
                <h4 id="item-subheader" style={props.itemDescriptionStyles}>SUBHEADING</h4>
                <img src="img/placeHolder.png" height="200" width="200"/>
                <div id="item-description" style={props.itemDescriptionStyles}>
                    <p style={props.itemDescriptionStyles}>Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here.</p>
                </div>
            </div>
            <div id="welcome" style={props.homeStyles}>
                <h3 stlye={props.homeDescriptionStyles}>WELCOME!</h3>
                <ul style={props.homeDescriptionStyles}>
                    <li>Welcome to the S.S. Nostalgia, an archive of modern pop culture history.</li>
                    <li>A time machine, if you will!</li>
                    <li>Feel free to click one of the buttons below to take yourself back to your decade of choice.</li>
                    <li>Reminisce by scrolling through the gallery of random items. Click on them to learn more!</li>
                    <li>When you're done learning, click the button in the top-right corner to return to the gallery.</li>
                </ul>
            </div>
            <div id="disclaimer" style={props.disclaimerStyles}>
                <h3 style={props.disclaimerDescriptionStyles}>DISCLAIMER</h3>
                <ul style={props.disclaimerDescriptionStyles}>
                    <li>I (the creator of this website) do not claim to be, by any means, an expert on pop culture or its history.</li>
                    <li>As a human being, there will be biases in what items I include in my database. Largely based on what I'm familiar with, or what I've at least heard of.</li>
                    <li>As pop culture is the focus, I opted to exclude the likes of disasters, controversies and political figures, except if they had a profound impact on pop culture (e.g. US presidents)</li>
                    <li>The item descriptions were generated using AI. Given the amount of items, it would take too long to write each description by myself.</li>
                    <li>AI has also been used to generate images where no suitable stock image was available for free use.</li>
                </ul>
            </div>
        </main>
    )
}