import React from "react"
//import Question from "./Question"
import Header from "./Header"
import MainGrid from "./MainGrid"
import Footer from "./Footer"

export default function App() {

    const [logo, setLogo] = React.useState("img/logo_2020s_1.png")
    const [logoRadius, setLogoRadius] = React.useState({
        borderRadius: "0%"
    })
    const [headDecade, setHeadDecade] = React.useState("2020s")
    const [headingFontStyles, setHeadingFontStyles] = React.useState({
        color: "black"
    })
    const [mainFontStyles, setMainFontStyles] = React.useState({
        color: "black"
    })
    const [headerFooterStyles, setHeaderFooterStyles] = React.useState({
        backgroundColor: "red"
    })
    const [mainGridStyles, setMainGridStyles] = React.useState({
        backgroundColor: "blue"
    })
    const [randomItemStyles, setRandomItemStyles] = React.useState({
        backgroundColor: "lightblue"
    })
    const [randomImageStyles, setRandomImageStyles] = React.useState({
        borderRadius: "50%"
    })
    const [footerButtonStyles, setFooterButtonStyles] = React.useState({
        color: "black",
        borderRadius: "10%"
    })

    function changeTheme(decade) {
        switch(decade) {
            case "1950s":
                setLogo("img/logo_50s_2.png")
                setLogoRadius({
                    borderRadius: "0%"
                })
                setHeadDecade("1950s")
                setHeadingFontStyles({
                    color: "#e09e0d",
                    fontFamily: "'Rakkas', serif"
                })
                setMainFontStyles({
                    color: "black",
                    fontFamily: "'Georgia', serif"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#7a542b"
                })
                setMainGridStyles({
                    backgroundColor: "#2b2116"
                })
                setRandomItemStyles({
                    backgroundColor: "#fff0a3"
                })
                setRandomImageStyles({
                    borderRadius: "0%"
                })
                setFooterButtonStyles({
                    color: "black",
                    borderRadius: "0%",
                    backgroundColor: "#e09e0d",
                    fontFamily: "'Georgia', serif"
                })
                break
            case "1960s":
                setLogo("img/logo_60s_1.png")
                setLogoRadius({
                    borderRadius: "50%"
                })
                setHeadDecade("1960s")
                setHeadingFontStyles({
                    color: "#ba312d",
                    fontFamily: "'Agbalumo', sans-serif"
                })
                setMainFontStyles({
                    color: "black",
                    fontFamily: "'Helvetica', serif"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#ffda75"
                })
                setMainGridStyles({
                    backgroundColor: "#336d80"
                })
                setRandomItemStyles({
                    backgroundColor: "#bcdfeb"
                })
                setRandomImageStyles({
                    borderRadius: "50%"
                })
                setFooterButtonStyles({
                    color: "black",
                    borderRadius: "50%",
                    backgroundColor: "#acb53b",
                    fontFamily: "'Helvetica', serif"
                })
                break
            case "1970s":
                setLogo("img/logo_70s_1.png")
                setLogoRadius({
                    borderRadius: "50%"
                })
                setHeadDecade("1970s")
                setHeadingFontStyles({
                    color: "#ffc800",
                    fontFamily: "'Leckerli One', sans-serif"
                })
                setMainFontStyles({
                    color: "white",
                    fontFamily: "'Arial', serif"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#d26020"
                })
                setMainGridStyles({
                    backgroundColor: "#951458"
                })
                setRandomItemStyles({
                    backgroundColor: "#e3afba"
                })
                setRandomImageStyles({
                    borderRadius: "50%"
                })
                setFooterButtonStyles({
                    color: "white",
                    borderRadius: "50%",
                    backgroundColor: "#637727",
                    fontFamily: "'Arial', serif"
                })
                break
            case "1980s":
                setLogo("img/logo_80s_1.png")
                setLogoRadius({
                    borderRadius: "50%"
                })
                setHeadDecade("1980s")
                setHeadingFontStyles({
                    color: "#ff3864",
                    fontFamily: "'Monoton', sans-serif"
                })
                setMainFontStyles({
                    color: "#ff3864",
                    fontFamily: "Courier, monospace"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#791e94"
                })
                setMainGridStyles({
                    backgroundColor: "#004bbd"
                })
                setRandomItemStyles({
                    backgroundColor: "black"
                })
                setRandomImageStyles({
                    borderRadius: "0%"
                })
                setFooterButtonStyles({
                    color: "#ff3864",
                    borderRadius: "0%",
                    backgroundColor: "black",
                    fontFamily: "Courier, monospace"
                })
                break
            case "1990s":
                setLogo("img/logo_90s_2.png")
                setLogoRadius({
                    borderRadius: "0%"
                })
                setHeadDecade("1990s")
                setHeadingFontStyles({
                    color: "#ff00aa",
                    fontFamily: "'Barriecito', sans-serif"
                })
                setMainFontStyles({
                    color: "black",
                    fontFamily: "'Comic Sans MS', Comic Sans, cursive"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#b0c4de"
                })
                setMainGridStyles({
                    backgroundColor: "grey"
                })
                setRandomItemStyles({
                    backgroundColor: "white"
                })
                setRandomImageStyles({
                    borderRadius: "0%"
                })
                setFooterButtonStyles({
                    color: "black",
                    borderRadius: "0%",
                    backgroundColor: "grey",
                    fontFamily: "'Comic Sans MS', Comic Sans, cursive"
                })
                break
            case "2000s":
                setLogo("img/logo_2000s_1.png")
                setLogoRadius({
                    borderRadius: "50%"
                })
                setHeadDecade("2000s")
                setHeadingFontStyles({
                    color: "blue",
                    fontFamily: "'Bungee', sans-serif"
                })
                setMainFontStyles({
                    color: "black",
                    fontFamily: "'Helvetica', sans-serif"
                })
                setHeaderFooterStyles({
                    backgroundColor: "red"
                })
                setMainGridStyles({
                    backgroundColor: "black"
                })
                setRandomItemStyles({
                    backgroundColor: "yellow"
                })
                setRandomImageStyles({
                    borderRadius: "20%"
                })
                setFooterButtonStyles({
                    color: "black",
                    borderRadius: "10%",
                    backgroundColor: "#20fc03",
                    fontFamily: "'Helvetica', sans-serif"
                })
                break
            case "2010s":
                setLogo("img/logo_2010s_1.png")
                setLogoRadius({
                    borderRadius: "50%"
                })
                setHeadDecade("2010s")
                setHeadingFontStyles({
                    color: "black",
                    fontFamily: "'Julius Sans One', sans-serif"
                })
                setMainFontStyles({
                    color: "black",
                    fontFamily: "'Helvetica', sans-serif"
                })
                setHeaderFooterStyles({
                    backgroundColor: "skyblue"
                })
                setMainGridStyles({
                    backgroundColor: "white"
                })
                setRandomItemStyles({
                    backgroundColor: "white"
                })
                setRandomImageStyles({
                    borderRadius: "10%"
                })
                setFooterButtonStyles({
                    color: "black",
                    borderRadius: "10%",
                    backgroundColor: "white",
                    fontFamily: "'Helvetica', sans-serif"
                })
                break
            default:
                setLogo("img/logo_2020s_1.png")
                setLogoRadius({
                    borderRadius: "50%"
                })
                setHeadDecade("2020s")
                setHeadingFontStyles({
                    color: "skyblue",
                    fontFamily: "'Julius Sans One', sans-serif"
                })
                setMainFontStyles({
                    color: "white",
                    fontFamily: "'Helvetica', sans-serif"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#454545"
                })
                setMainGridStyles({
                    backgroundColor: "black"
                })
                setRandomItemStyles({
                    backgroundColor: "black"
                })
                setRandomImageStyles({
                    borderRadius: "10%"
                })
                setFooterButtonStyles({
                    color: "white",
                    borderRadius: "10%",
                    backgroundColor: "black",
                    fontFamily: "'Helvetica', sans-serif"
                })
        }
    }

    return(
        <div id="app-div">
            <Header logo={logo} logoRadius={logoRadius} decade={headDecade} headingFont={headingFontStyles} mainFont={mainFontStyles} headerStyles={headerFooterStyles}/>
            <MainGrid mainGridStyles={mainGridStyles} randomItemStyles={randomItemStyles} randomImageStyles={randomImageStyles}/>
            <Footer buttonFunc={changeTheme} footerStyles={headerFooterStyles} footerButtonStyles={footerButtonStyles}/>
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