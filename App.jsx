import React from "react"
//import Question from "./Question"
import Header from "./Header"
import MainGrid from "./MainGrid"
import Footer from "./Footer"

export default function App() {

    const [logo, setLogo] = React.useState("img/logo_2020s_1.png")
    const [headDecade, setHeadDecade] = React.useState("2020s")

    function changeTheme(decade) {
        switch(decade) {
            case "1950s":
                setLogo("img/logo_50s_1.png")
                setHeadDecade("1950s")
                break
            case "1960s":
                setLogo("img/logo_60s_1.png")
                setHeadDecade("1960s")
                break
            case "1970s":
                setLogo("img/logo_70s_1.png")
                setHeadDecade("1970s")
                break
            case "1980s":
                setLogo("img/logo_80s_1.png")
                setHeadDecade("1980s")
                break
            case "1990s":
                setLogo("img/logo_90s_1.png")
                setHeadDecade("1990s")
                break
            case "2000s":
                setLogo("img/logo_2000s_1.png")
                setHeadDecade("2000s")
                break
            case "2010s":
                setLogo("img/logo_2010s_1.png")
                setHeadDecade("2010s")
                break
            default:
                setLogo("img/logo_2020s_1.png")
                setHeadDecade("2020s")
        }
    }

    return(
        <div id="app-div">
            <Header logo={logo} decade={headDecade}/>
            <MainGrid />
            <Footer buttonFunc={changeTheme}/>
        </div>
    )
}

// export default function App() {
    
//     const [questionData, setQuestionData] = React.useState([])
//     const [questionsReady, setQuestionsReady] = React.useState(false)
//     const [questionElements, setQuestionElements] = React.useState([])
//     const [score, setScore] = React.useState(0)
//     const [endQuiz, setEndQuiz] = React.useState(false)
    
//     React.useEffect(async () => { //start of the quiz; fetch question data
//         const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
//         const data = await res.json()
//         setQuestionData(data.results)
//         setQuestionsReady(true)
//     }, [])
    
//     React.useEffect(async () => {
//         if(endQuiz === true) { //end of the quiz
//             const elCorrect = document.getElementsByClassName("correct")
//             for (let i = 0; i < elCorrect.length; i++) { //mark the correct answers
//                 elCorrect[i].classList.add("correct-marked")
//                 setScore(prevScore => prevScore + 1)
//             }
//             const elIncorrect = document.getElementsByClassName("incorrect")
//             for (let i = 0; i < elIncorrect.length; i++) { //mark the incorrect answers
//                 elIncorrect[i].classList.add("incorrect-marked")
//             }
//         }
//     }, [endQuiz])
    
//     if(questionsReady) { //once question data ready, display questions on page
//         handleQuestionElements()
//         setQuestionsReady(false)
//     }
    
//     function handleQuestionElements() {
//         setQuestionElements(questionData.map(question => (
//                 <Question
//                     key={Math.floor((Math.random() * 1000000) + 1).toString()}
//                     id={Math.floor((Math.random() * 1000000) + 1).toString()}
//                     apiQuestion={question.question.replace(/&#039;/g, "'").replace(/&quot;/g, "''")}
//                     apiIncorrect={question.incorrect_answers}
//                     apiCorrect={question.correct_answer}
//                 />
//             )
//         ))
//     }
    
//     function checkAnswers(event) { //quiz ends when user clicks button
//         event.preventDefault()
//         setEndQuiz(true)
//         console.log(endQuiz)
//     }
    
//     return(
//         <form>
//             <div className="question-container">
//                 {/*questionsReady ? questionElements : "LOADING QUESTIONS"*/}
//                 {questionElements}
//                 {/*<p>Questions Here</p>*/}
//             </div>
//             <div className="check-answers">
//                 {endQuiz && <p>You scored {score}/5 correct answers</p>}
//                 <button className="check-answers-button" onClick={() => checkAnswers(event)}>Check answers</button>
//             </div>
//         </form>
//     )
// }