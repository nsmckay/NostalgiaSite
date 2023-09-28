import React from "react"
import Question from "./Question"

export default function App() {
    
    const [questionData, setQuestionData] = React.useState([])
    const [questionsReady, setQuestionsReady] = React.useState(false)
    const [questionElements, setQuestionElements] = React.useState([])
    const [score, setScore] = React.useState(0)
    const [endQuiz, setEndQuiz] = React.useState(false)
    
    React.useEffect(async () => { //start of the quiz; fetch question data
        const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        const data = await res.json()
        setQuestionData(data.results)
        setQuestionsReady(true)
    }, [])
    
    React.useEffect(async () => {
        if(endQuiz === true) { //end of the quiz
            const elCorrect = document.getElementsByClassName("correct")
            for (let i = 0; i < elCorrect.length; i++) { //mark the correct answers
                elCorrect[i].classList.add("correct-marked")
                setScore(prevScore => prevScore + 1)
            }
            const elIncorrect = document.getElementsByClassName("incorrect")
            for (let i = 0; i < elIncorrect.length; i++) { //mark the incorrect answers
                elIncorrect[i].classList.add("incorrect-marked")
            }
        }
    }, [endQuiz])
    
    if(questionsReady) { //once question data ready, display questions on page
        handleQuestionElements()
        setQuestionsReady(false)
    }
    
    function handleQuestionElements() {
        setQuestionElements(questionData.map(question => (
                <Question
                    key={Math.floor((Math.random() * 1000000) + 1).toString()}
                    id={Math.floor((Math.random() * 1000000) + 1).toString()}
                    apiQuestion={question.question.replace(/&#039;/g, "'").replace(/&quot;/g, "''")}
                    apiIncorrect={question.incorrect_answers}
                    apiCorrect={question.correct_answer}
                />
            )
        ))
    }
    
    function checkAnswers(event) { //quiz ends when user clicks button
        event.preventDefault()
        setEndQuiz(true)
        console.log(endQuiz)
    }
    
    return(
        <form>
            <div className="question-container">
                {/*questionsReady ? questionElements : "LOADING QUESTIONS"*/}
                {questionElements}
                {/*<p>Questions Here</p>*/}
            </div>
            <div className="check-answers">
                {endQuiz && <p>You scored {score}/5 correct answers</p>}
                <button className="check-answers-button" onClick={() => checkAnswers(event)}>Check answers</button>
            </div>
        </form>
    )
}