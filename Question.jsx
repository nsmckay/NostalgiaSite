import React from "react"
import Answer from "./Answer"

export default function Question(props) {
    
    const correctArray = [props.apiCorrect]
    const incorrectArray = props.apiIncorrect
    const [randId, setRandId] = React.useState(props.id)
    const [countId, setCountId] = React.useState(0)
    const [currentId, setCurrentId] = React.useState(0)
    const answerIDs = [Math.floor((Math.random() * 1000000) + 1).toString(), Math.floor((Math.random() * 1000000) + 1).toString(), Math.floor((Math.random() * 1000000) + 1).toString(), Math.floor((Math.random() * 1000000) + 1).toString()] //random ids to identify each answer option
    const [answerChoices, setAnswerChoices] = React.useState(shuffle([correctArray.concat(incorrectArray)]))

    function shuffle(a) { // function to shuffle the answer options (Fisher–Yates shuffle)
        let i = a.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
        return a;
    }
    
    let answerChoicesFixed = answerChoices[0]
    answerChoicesFixed = shuffle(answerChoicesFixed)
    
    return (
        <div className="question" id={randId}>
            <p className="question-question">{props.apiQuestion}</p>
            {/*<p>TESTING</p>*/}
            <div className="question-answers">
                <Answer id={answerIDs[0]} key={Math.floor((Math.random() * 1000000) + 1).toString()} //qKey={props.key} 
                apiAnswer={answerChoicesFixed[0]} correctAnswer={props.apiCorrect} qID={randId} aID={answerIDs[0]}/>
                <Answer id={answerIDs[1]} key={Math.floor((Math.random() * 1000000) + 1).toString()} //qKey={props.key}
                apiAnswer={answerChoicesFixed[1]} correctAnswer={props.apiCorrect} qID={randId} aID={answerIDs[1]}/>
                <Answer id={answerIDs[2]} key={Math.floor((Math.random() * 1000000) + 1).toString()} //qKey={props.key}
                apiAnswer={answerChoicesFixed[2]} correctAnswer={props.apiCorrect} qID={randId} aID={answerIDs[2]}/>
                <Answer id={answerIDs[3]} key={Math.floor((Math.random() * 1000000) + 1).toString()} //qKey={props.key}
                apiAnswer={answerChoicesFixed[3]} correctAnswer={props.apiCorrect} qID={randId} aID={answerIDs[3]}/>
            </div>
        </div>
    )
}