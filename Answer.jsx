import React from "react"
import {useRef} from "react"

export default function Answer(props) {
    
    const ref = useRef(null)
    const [answered, setAnswered] = React.useState(false)
    const [correctOrNot, setCorrectOrNot] = React.useState("")
    
    React.useEffect(async () => { //handle question once answered
        const el = document.getElementById(props.qID) //id of related question
        const elA = document.getElementById(props.aID) //id of this answer
        if (answered) { //once question answered, disable other options
            el.classList.add("disabled")
        }
        console.log(correctOrNot) //take note of correctness for later
        if (answered === true && correctOrNot === "Correct") {
            elA.classList.add("correct")
            console.log("FEOMFOEIFM")
        }
        console.log(correctOrNot) //take note of incorrectness for later
        if (answered === true && correctOrNot === "Incorrect") {
            elA.classList.add("incorrect")
            console.log("NONFNOFEPN")
        }
    }, [answered])

    function checkAnswer(event) { //check if answer correct by comparing to props
        event.preventDefault()
        const el2 = ref.current
        if (answered === false) {
            if (props.apiAnswer === props.correctAnswer) {
                setCorrectOrNot("Correct")
            } else {
                setCorrectOrNot("Incorrect")
            }
            setAnswered(true)
        }
    }
    
    function markAnswer() { //control CSS class of answer
        if (answered === true && correctOrNot === "Correct") {
            return ("correct")
        } else if(answered === true && correctOrNot === "Incorrect") {
            return ("incorrect")
        } else {
            return ("answer")
        }
    }
    
    return ( //some formatting errors from data source needed tp be handled
        <button className={markAnswer()} onClick={() => checkAnswer(event)}>{props.apiAnswer.replace(/&#039;/g, "'").replace(/&quot;/g, "''")}</button>
    )
}