import React from "react"
import FooterButton from "./FooterButton"

export default function Footer(props) {
    return(
        <footer style={props.footerStyles}>
            <nav>
                <FooterButton func={props.buttonFunc} text={"1950s"} buttonStyles={props.footerButtonStyles}/>
                <FooterButton func={props.buttonFunc} text={"1960s"} buttonStyles={props.footerButtonStyles}/>
                <FooterButton func={props.buttonFunc} text={"1970s"} buttonStyles={props.footerButtonStyles}/>
                <FooterButton func={props.buttonFunc} text={"1980s"} buttonStyles={props.footerButtonStyles}/>
                <FooterButton func={props.buttonFunc} text={"1990s"} buttonStyles={props.footerButtonStyles}/>
                <FooterButton func={props.buttonFunc} text={"2000s"} buttonStyles={props.footerButtonStyles}/>
                <FooterButton func={props.buttonFunc} text={"2010s"} buttonStyles={props.footerButtonStyles}/>
                <FooterButton func={props.buttonFunc} text={"HOME"} buttonStyles={props.footerButtonStyles}/>
            </nav>
        </footer>
    )
}