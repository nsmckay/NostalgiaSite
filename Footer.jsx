import React from "react"
import FooterButton from "./FooterButton"

export default function Footer(props) {
    return(
        <footer>
            <nav>
                <FooterButton func={props.buttonFunc} text={"1950s"}/>
                <FooterButton func={props.buttonFunc} text={"1960s"}/>
                <FooterButton func={props.buttonFunc} text={"1970s"}/>
                <FooterButton func={props.buttonFunc} text={"1980s"}/>
                <FooterButton func={props.buttonFunc} text={"1990s"}/>
                <FooterButton func={props.buttonFunc} text={"2000s"}/>
                <FooterButton func={props.buttonFunc} text={"2010s"}/>
                <FooterButton func={props.buttonFunc} text={"HOME"}/>
            </nav>
        </footer>
    )
}