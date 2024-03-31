import React from "react"
import RandomItem from "./RandomItem"

export default function MainGrid(props) {
    return(
        <main>
            <div id="ran-grid" style={props.mainGridStyles}>
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {/*<RandomItem func={props.itemClickFunc} randomItemStyles={props.randomItemStyles} randomImageStyles={props.randomImageStyles} decade={props.decade}/>*/}
                {props.itemArray}
            </div>
            <div id="item-info" style={props.itemInfoStyles}>
                <div id="item-header" style={props.itemDescriptionStyles}>
                    <div></div>
                    {/* <h3 style={props.itemDescriptionStyles}>ITEM</h3> */}
                    <h3 style={props.itemDescriptionStyles}>{props.itemDescriptionTitle}</h3>
                    <button onClick={()=>props.returnFunc()}>↩</button>
                </div>
                {/* <h4 id="item-subheader" style={props.itemDescriptionStyles}>SUBHEADING</h4> */}
                <h4 id="item-subheader" style={props.itemDescriptionStyles}>{props.itemDescriptionSub}</h4>
                {/*<img src="img/placeHolder.png" height="200" width="200"/>*/}
                <img src={props.itemDescriptionImage} height="200" width="200"/>
                <div id="item-description" style={props.itemDescriptionStyles}>
                    {/* <p style={props.itemDescriptionStyles}>Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here. Info about item here.</p> */}
                    <p style={props.itemDescriptionStyles}>
                        <pre>{props.itemDescriptionText}</pre>
                    </p>
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
                    <li>Most English language resources I used to research what was popular each decade were American, so there is likely to be a bias towards what was popular in the USA at the time.</li>
                    <li>As pop culture is the focus, I opted to exclude the likes of disasters, controversies and political figures, except if they had a profound impact on pop culture (e.g. US presidents)</li>
                    <li>The item descriptions were generated using AI. Given the amount of items, it would take too long to write each description by myself.</li>
                    <li>AI has also been used to generate images where no suitable stock image was available for free use.</li>
                    <li>As this is an educational website, it is believed all resources used would fall under Fair Use anyway.</li>
                </ul>
            </div>
            <div id="credits" style={props.creditsStyles}>
                <h3 style={props.creditsDescriptionStyles}>CREDITS</h3>
                <ul style={props.creditsDescriptionStyles}>
                    <li>Concept and Design - Me (Neil McKay)</li>
                    <li>Website frontend - Me</li>
                    <li>Website backend/API - www.xapphub.com</li>
                    <li>Database used for API - Me</li>
                    <li>Image thumbnails - Public domain stock images from Pixabay and Wikipedia</li>
                    <li>AI generated thumbnails - Bing Image Creator and Craiyon</li>
                    <li>AI generated text descriptions - Bing Chat (now Microscoft Copilot)</li>
                    <li>Nostalgia site logos - Me (1950-1990 were edited using public domain stock resources from Pixabay)</li>
                    <li>Backgrounds - public domain stock resources from Pixabay</li>
                </ul>
            </div>
        </main>
    )
}