import React from "react"
//import Question from "./Question"
import Header from "./Header"
import BurgerMenu from "./BurgerMenu"
import MainGrid from "./MainGrid"
import Footer from "./Footer"

import useSound from "use-sound"
import snd50 from '/sound/50s_jingle.mp3'
import snd60 from '/sound/60s_jingle.mp3'
import snd70 from '/sound/70s_jingle.mp3'
import snd80 from '/sound/80s_jingle.mp3'
import snd90 from '/sound/90s_jingle.mp3'
import snd2000 from '/sound/2000s_jingle.mp3'
import snd2010 from '/sound/2010s_jingle.mp3'
import RandomItem from "./RandomItem"

export default function App() {

    const [logo, setLogo] = React.useState("img/logos/logo_2020s_1.png")
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
    const [burgerMenuOpen, setBurgerMenuOpen] = React.useState(false) //false when burger menu not opened
    const [homeStyles, setHomeStyles] = React.useState({
        display: "none"
    })
    const [homeDescriptionStyles, setHomeDescriptionStyles] = React.useState({
        fontFamily: "'Helvetica', sans-serif"
    })
    const [disclaimerStyles, setDisclaimerStyles] = React.useState({
        display: "none"
    })
    const [disclaimerDescriptionStyles, setDisclaimerDescriptionStyles] = React.useState({
        fontFamily: "'Helvetica', sans-serif"
    })
    const [mainGridStyles, setMainGridStyles] = React.useState({
        backgroundColor: "blue",
        display: "grid"
    })
    const [randomItemStyles, setRandomItemStyles] = React.useState({
        backgroundColor: "lightblue"
    })
    const [randomImageStyles, setRandomImageStyles] = React.useState({
        borderRadius: "50%"
    })
    const [itemInfoStyles, setItemInfoStyles] = React.useState({
        //display: "none"
    })
    const [itemDescriptionStyles, setItemDescriptionStyles] = React.useState({
        fontFamily: "'Helvetica', sans-serif"
    })
    const [itemDescriptionImage, setItemDescriptionImage] = React.useState("img/placeHolder.png")
    const [itemDescriptionTitle, setItemDescriptionTitle] = React.useState("ITEM")
    const [itemDescriptionSub, setItemDescriptionSub] = React.useState("SUBHEADING")
    const [itemDescriptionText, setItemDescriptionText] = React.useState("Info about item here. Info about item here. Info about item here.")
    const [footerButtonStyles, setFooterButtonStyles] = React.useState({
        color: "black",
        borderRadius: "10%"
    })

    const[playSnd50] = useSound(snd50)
    const[playSnd60] = useSound(snd60)
    const[playSnd70] = useSound(snd70)
    const[playSnd80] = useSound(snd80)
    const[playSnd90] = useSound(snd90)
    const[playSnd2000] = useSound(snd2000)
    const[playSnd2010] = useSound(snd2010)

    // const[apiUrl, setApiUrl] = React.useState("http://localhost:3002/2010s")
    const[apiUrl, setApiUrl] = React.useState("https://xapphub.com/nostalgia/controller/task.php?decade=2010")
    const[itemsArray, setItemsArray] = React.useState([])

    //let snd50 = new Audio('.sound/50s_jingle.mp3')
    //let snd60 = new Audio('.sound/60s_jingle.mp3')
    //let snd70 = new Audio('.sound/70s_jingle.mp3')
    //let snd80 = new Audio('.sound/80s_jingle.mp3')
    //let snd90 = new Audio('.sound/90s_jingle.mp3')
    //let snd2000 = new Audio('.sound/2000s_jingle.mp3')
    //let snd2010 = new Audio('.sound/2010s_jingle.mp3')
    //let snd2020 = new Audio('.sound/2010s_jingle.mp3')

    React.useEffect(async () => { //start of the quiz; fetch question data
        switch(headDecade) {
            case "1950s":
                // setApiUrl("http://localhost:3002/1950s")
                setApiUrl("https://xapphub.com/nostalgia/controller/task.php?decade=1950")
                //console.log(apiUrl)
                break
            case "1960s":
                // setApiUrl("http://localhost:3002/1960s")
                setApiUrl("https://xapphub.com/nostalgia/controller/task.php?decade=1960")
                //console.log(apiUrl)
                break
            case "1970s":
                // setApiUrl("http://localhost:3002/1970s")
                setApiUrl("https://xapphub.com/nostalgia/controller/task.php?decade=1970")
                //console.log(apiUrl)
                break
            case "1980s":
                // setApiUrl("http://localhost:3002/1980s")
                setApiUrl("https://xapphub.com/nostalgia/controller/task.php?decade=1980")
                //console.log(apiUrl)
                break
            case "1990s":
                // setApiUrl("http://localhost:3002/1990s")
                setApiUrl("https://xapphub.com/nostalgia/controller/task.php?decade=1990")
                //console.log(apiUrl)
                break
            case "2000s":
                // setApiUrl("http://localhost:3002/2000s")
                setApiUrl("https://xapphub.com/nostalgia/controller/task.php?decade=2000")
                //console.log(apiUrl)
                break
            case "2010s":
                // setApiUrl("http://localhost:3002/2010s")
                setApiUrl("https://xapphub.com/nostalgia/controller/task.php?decade=2010")
                //console.log(apiUrl)
                break
            default:
                // setApiUrl("http://localhost:3002/2010s")
                setApiUrl("https://xapphub.com/nostalgia/controller/task.php?decade=2010")
                //console.log(apiUrl)
                break
        }
        //console.log(apiUrl)
        const res = await fetch(apiUrl)
        const data = await res.json()
        console.log(data)
        console.log(data.data.tasks)
        // setItemsArray(data.map(item => (
        // setItemsArray(Object.keys(data).map(item => (
        setItemsArray(data.data.tasks.map(item => (
                <RandomItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    itemDecade={item.decade}
                    category={item.category}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    imgurl={item.imgurl}
                    func={displayItemInfo}
                    randomItemStyles={randomItemStyles}
                    randomImageStyles={randomImageStyles}
                    decade={headDecade}
                />
                // <RandomItem
                //     key={item.tasks.id}
                //     id={item.tasks.id}
                //     name={item.tasks.name}
                //     itemDecade={item.tasks.decade}
                //     category={item.tasks.category}
                //     title={item.tasks.title}
                //     subtitle={item.tasks.subtitle}
                //     description={item.tasks.description}
                //     imgurl={item.tasks.imgurl}
                //     func={displayItemInfo}
                //     randomItemStyles={randomItemStyles}
                //     randomImageStyles={randomImageStyles}
                //     decade={headDecade}
                // />
            )
        ))
        console.log(itemsArray)
    }, [changeTheme])
    //}, [])

    function toggleBurgerMenu() {
        if(burgerMenuOpen) {
            setBurgerMenuOpen(false)
        } else {
            setBurgerMenuOpen(true)
        }
    }

    function menuHelp() {
        changeTheme("2020s")
        setDisclaimerStyles({
            display: "none"
        })
        setMainGridStyles({
            display: "none"
        })
        setHomeStyles({
            display: "flex",
            backgroundColor: "black",
            color: "white",
            fontFamily: "'Helvetica', sans-serif"
        })
        setHomeDescriptionStyles({
            fontFamily: "'Helvetica', sans-serif"
        })
        toggleBurgerMenu()
    }

    function menuDisclaimer() {
        changeTheme("2020s")
        setHomeStyles({
            display: "none"
        })
        setMainGridStyles({
            display: "none"
        })
        setDisclaimerStyles({
            display: "flex",
            backgroundColor: "black",
            color: "white",
            fontFamily: "'Helvetica', sans-serif"
        })
        setDisclaimerDescriptionStyles({
            fontFamily: "'Helvetica', sans-serif"
        })
        toggleBurgerMenu()
    }

    function changeTheme(decade) {
        setItemInfoStyles({
            display: "none"
        })
        setHomeStyles({
            display: "none"
        })
        setDisclaimerStyles({
            display: "none"
        })
        switch(decade) {
            case "1950s":
                //snd50.play()
                playSnd50()
                setLogo("img/logos/logo_50s_2.png")
                setLogoRadius({
                    borderRadius: "0%",
                    border: "solid #e09e0d 5px",
                    boxShadow: "2px 2px 5px black"
                })
                setHeadDecade("1950s")
                setHeadingFontStyles({
                    color: "#e09e0d",
                    backgroundImage: "linear-gradient(60deg, #e09e0d, #f0c907)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontFamily: "'Rakkas', serif"
                })
                setMainFontStyles({
                    color: "black",
                    fontFamily: "'Georgia', serif"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#7a542b",
                    backgroundImage: 'url("img/wallpaper/wallpaper_50s_1.png")',
                    backgroundSize: "2000px"
                })
                setMainGridStyles({
                    backgroundColor: "#2b2116"
                })
                setRandomItemStyles({
                    backgroundColor: "#fff0a3",
                    backgroundImage: 'url("img/wallpaper/wallpaper_50s_2.png")',
                    backgroundSize: "300px"
                })
                setRandomImageStyles({
                    borderRadius: "0%"
                })
                setFooterButtonStyles({
                    color: "black",
                    borderRadius: "0%",
                    backgroundColor: "#e09e0d",
                    backgroundImage: "linear-gradient(60deg, #e09e0d, #f0c907)",
                    fontFamily: "'Georgia', serif",
                    boxShadow: "1px 1px 5px black"
                })
                document.body.style = "background: #2b2116" //raw javasacript is only solution I could find to change body color
                break
            case "1960s":
                //snd60.play()
                playSnd60()
                setLogo("img/logos/logo_60s_1.png")
                setLogoRadius({
                    borderRadius: "50%",
                    boxShadow: "2px 2px black"
                })
                setHeadDecade("1960s")
                setHeadingFontStyles({
                    color: "#ba312d",
                    fontFamily: "'Agbalumo', sans-serif",
                    textShadow: "2px 2px black"
                })
                setMainFontStyles({
                    color: "black",
                    fontFamily: "'Helvetica', serif"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#ffda75",
                    backgroundImage: 'url("img/wallpaper/wallpaper_60s_1.png")',
                    backgroundSize: "300px"
                })
                setMainGridStyles({
                    backgroundColor: "#336d80"
                })
                setRandomItemStyles({
                    backgroundColor: "#bcdfeb",
                    backgroundImage: 'url("img/wallpaper/wallpaper_60s_2.png")',
                    backgroundSize: "100px"
                })
                setRandomImageStyles({
                    borderRadius: "50%"
                })
                setFooterButtonStyles({
                    color: "black",
                    borderRadius: "50%",
                    backgroundColor: "#acb53b",
                    backgroundImage: "linear-gradient(#acb53b, #5a5e1f)",
                    fontFamily: "'Helvetica', serif",
                    boxShadow: "1px 1px black"
                })
                document.body.style = "background: #336d80"
                break
            case "1970s":
                //snd70.play()
                playSnd70()
                setLogo("img/logos/logo_70s_1.png")
                setLogoRadius({
                    borderRadius: "50%",
                    boxShadow: "2px 2px black"
                })
                setHeadDecade("1970s")
                setHeadingFontStyles({
                    color: "#ffc800",
                    fontFamily: "'Leckerli One', sans-serif",
                    textShadow: "2px 2px black"
                })
                setMainFontStyles({
                    color: "white",
                    fontFamily: "'Arial', serif"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#d26020",
                    backgroundImage: 'url("img/wallpaper/wallpaper_70s_1.png")',
                    backgroundSize: "300px"
                })
                setMainGridStyles({
                    backgroundColor: "#951458"
                })
                setRandomItemStyles({
                    backgroundColor: "#e3afba",
                    backgroundImage: 'url("img/wallpaper/wallpaper_70s_2.png")',
                    backgroundSize: "250px"
                })
                setRandomImageStyles({
                    borderRadius: "50%"
                })
                setFooterButtonStyles({
                    color: "white",
                    borderRadius: "50%",
                    backgroundColor: "#637727",
                    backgroundImage: "linear-gradient(#637727, #262e0f)",
                    fontFamily: "'Arial', serif",
                    boxShadow: "1px 1px black"
                })
                document.body.style = "background: #951458"
                break
            case "1980s":
                //snd80.play()
                playSnd80()
                setLogo("img/logos/logo_80s_1.png")
                setLogoRadius({
                    borderRadius: "50%",
                    boxShadow: "0px 0px 3px orangered"
                })
                setHeadDecade("1980s")
                setHeadingFontStyles({
                    color: "#ff3864",
                    fontFamily: "'Monoton', sans-serif",
                    fontWeight: "500",
                    textShadow: "0px 0px 3px orangered"
                })
                setMainFontStyles({
                    color: "#ff3864",
                    fontFamily: "Courier, monospace"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#791e94",
                    backgroundImage: "linear-gradient(to bottom right, #791e94, #b33a02)"
                })
                setMainGridStyles({
                    backgroundColor: "#004bbd",
                    backgroundImage: "linear-gradient(to bottom right, #210085, #2d0057)"
                })
                setRandomItemStyles({
                    backgroundColor: "black",
                    backgroundImage: 'url("img/wallpaper/wallpaper_80s.png")',
                    backgroundSize: "1250px"
                })
                setRandomImageStyles({
                    borderRadius: "0%"
                })
                setFooterButtonStyles({
                    color: "#ff3864",
                    borderRadius: "0%",
                    backgroundColor: "black",
                    fontFamily: "Courier, monospace",
                    boxShadow: "1px 1px 3px black"
                })
                document.body.style = "background: black"
                break
            case "1990s":
                //snd90.play()
                playSnd90()
                setLogo("img/logos/logo_90s_2.png")
                setLogoRadius({
                    borderRadius: "0%",
                    border: "solid black 2px",
                    boxShadow: "2px 2px black"
                })
                setHeadDecade("1990s")
                setHeadingFontStyles({
                    color: "#ff00aa",
                    fontFamily: "'Barriecito', sans-serif",
                    textShadow: "2px 2px black"
                })
                setMainFontStyles({
                    color: "black",
                    fontFamily: "'Comic Sans MS', Comic Sans, cursive"
                })
                setHeaderFooterStyles({
                    backgroundColor: "#b0c4de",
                    backgroundImage: 'url("img/wallpaper/wallpaper_90s.png")',
                    backgroundSize: "500px"
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
                    fontFamily: "'Comic Sans MS', Comic Sans, cursive",
                    boxShadow: "1px 1px black"
                })
                document.body.style = "background: lightgrey"
                break
            case "2000s":
                //snd2000.play()
                playSnd2000()
                setLogo("img/logos/logo_2000s_1.png")
                setLogoRadius({
                    borderRadius: "50%",
                    boxShadow: "3px 3px 1px black"
                })
                setHeadDecade("2000s")
                setHeadingFontStyles({
                    color: "blue",
                    fontFamily: "'Bungee', sans-serif",
                    textShadow: "3px 3px 1px black"
                })
                setMainFontStyles({
                    color: "black",
                    fontFamily: "'Helvetica', sans-serif"
                })
                setHeaderFooterStyles({
                    backgroundColor: "red",
                    backgroundImage: "linear-gradient(to bottom right, red, #d10000)"
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
                    backgroundImage: "linear-gradient(#20fc03, #0f8200)",
                    fontFamily: "'Helvetica', sans-serif",
                    boxShadow: "2px 2px 1px black"
                })
                document.body.style = "background: black"
                break
            case "2010s":
                //snd2010.play()
                playSnd2010()
                setLogo("img/logos/logo_2010s_1.png")
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
                    fontFamily: "'Helvetica', sans-serif",
                    boxShadow: "1px 1px 3px black"
                })
                document.body.style = "background: skyblue"
                break
            default:
                //snd2020.play()
                //playSnd2010()
                setLogo("img/logos/logo_2020s_1.png")
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
                    fontFamily: "'Helvetica', sans-serif",
                    boxShadow: "1px 1px 3px black"
                })
                document.body.style = "background: #454545"
        }
    }

    // function displayItemInfo(decade) {
    //     setMainGridStyles({
    //         display: "none"
    //     })
    //     switch(decade) {
    //         case "1950s":
    //             setItemInfoStyles({
    //                 display: "flex",
    //                 backgroundColor: "#fff0a3",
    //                 backgroundImage: 'url("img/wallpaper/wallpaper_50s_2.png")',
    //                 backgroundSize: "",
    //                 color: "black",
    //                 fontFamily: "'Georgia', serif"
    //             })
    //             setItemDescriptionStyles({
    //                 fontFamily: "'Georgia', serif"
    //             })
    //             break
    //         case "1960s":
    //             setItemInfoStyles({
    //                 display: "flex",
    //                 backgroundColor: "#bcdfeb",
    //                 backgroundImage: 'url("img/wallpaper/wallpaper_60s_2.png")',
    //                 backgroundSize: "500px",
    //                 color: "black",
    //                 fontFamily: "'Helvetica', sans-serif"
    //             })
    //             setItemDescriptionStyles({
    //                 fontFamily: "'Helvetica', sans-serif"
    //             })
    //             break
    //         case "1970s":
    //             setItemInfoStyles({
    //                 display: "flex",
    //                 backgroundColor: "#e3afba",
    //                 backgroundImage: 'url("img/wallpaper/wallpaper_70s_2.png")',
    //                 backgroundSize: "cover",
    //                 color: "white",
    //                 fontFamily: "'Arial', sans-serif"
    //             })
    //             setItemDescriptionStyles({
    //                 fontFamily: "'Arial', sans-serif"
    //             })
    //             break
    //         case "1980s":
    //             setItemInfoStyles({
    //                 display: "flex",
    //                 backgroundColor: "black",
    //                 backgroundImage: 'url("img/wallpaper/wallpaper_80s.png")',
    //                 backgroundSize: "cover",
    //                 color: "#ff3864",
    //                 fontFamily: "Courier, monospace"
    //             })
    //             setItemDescriptionStyles({
    //                 fontFamily: "Courier, monospace"
    //             })
    //             break
    //         case "1990s":
    //             setItemInfoStyles({
    //                 display: "flex",
    //                 backgroundColor: "white",
    //                 color: "black",
    //                 fontFamily: "'Comic Sans MS', Comic Sans, cursive"
    //             })
    //             setItemDescriptionStyles({
    //                 fontFamily: "'Comic Sans MS', Comic Sans, cursive"
    //             })
    //             break
    //         case "2000s":
    //             setItemInfoStyles({
    //                 display: "flex",
    //                 backgroundColor: "yellow",
    //                 color: "black",
    //                 fontFamily: "'Helvetica', sans-serif"
    //             })
    //             setItemDescriptionStyles({
    //                 fontFamily: "'Helvetica', sans-serif"
    //             })
    //             break
    //         case "2010s":
    //             setItemInfoStyles({
    //                 display: "flex",
    //                 backgroundColor: "white",
    //                 color: "black",
    //                 fontFamily: "'Helvetica', sans-serif"
    //             })
    //             setItemDescriptionStyles({
    //                 fontFamily: "'Helvetica', sans-serif"
    //             })
    //             break
    //         default:
    //             setItemInfoStyles({
    //                 display: "flex",
    //                 backgroundColor: "black",
    //                 color: "white",
    //                 fontFamily: "'Helvetica', sans-serif"
    //             })
    //             setItemDescriptionStyles({
    //                 fontFamily: "'Helvetica', sans-serif"
    //             })
    //     }
    // }

    function displayItemInfo(id) {
        setMainGridStyles({
            display: "none"
        })
        // let currentItem = itemsArray.filter(item => {
        //     return item.id === id
        // })
        let currentItem = itemsArray.filter(item => {
            return item.key === id
        })
        //let currentItem = itemsArray
        // console.log(id)
        // console.log(typeof(id))
        // console.log(currentItem)
        // console.log(currentItem[0].key)
        // console.log(typeof(currentItem[0].key))
        // console.log(currentItem[0].props.name)
        // console.log(currentItem[0].props.decade)
        setItemDescriptionImage("img/" + currentItem[0].props.imgurl + ".png")
        setItemDescriptionTitle(currentItem[0].props.title)
        setItemDescriptionSub(currentItem[0].props.subtitle)
        setItemDescriptionText(currentItem[0].props.description)
        switch(currentItem[0].props.decade) {
            case "1950s":
                setItemInfoStyles({
                    display: "flex",
                    backgroundColor: "#fff0a3",
                    backgroundImage: 'url("img/wallpaper/wallpaper_50s_2.png")',
                    backgroundSize: "",
                    color: "black",
                    fontFamily: "'Georgia', serif"
                })
                setItemDescriptionStyles({
                    fontFamily: "'Georgia', serif"
                })
                break
            case "1960s":
                setItemInfoStyles({
                    display: "flex",
                    backgroundColor: "#bcdfeb",
                    backgroundImage: 'url("img/wallpaper/wallpaper_60s_2.png")',
                    backgroundSize: "500px",
                    color: "black",
                    fontFamily: "'Helvetica', sans-serif"
                })
                setItemDescriptionStyles({
                    fontFamily: "'Helvetica', sans-serif"
                })
                break
            case "1970s":
                setItemInfoStyles({
                    display: "flex",
                    backgroundColor: "#e3afba",
                    backgroundImage: 'url("img/wallpaper/wallpaper_70s_2.png")',
                    backgroundSize: "cover",
                    color: "white",
                    fontFamily: "'Arial', sans-serif"
                })
                setItemDescriptionStyles({
                    fontFamily: "'Arial', sans-serif"
                })
                break
            case "1980s":
                setItemInfoStyles({
                    display: "flex",
                    backgroundColor: "black",
                    backgroundImage: 'url("img/wallpaper/wallpaper_80s.png")',
                    backgroundSize: "cover",
                    color: "#ff3864",
                    fontFamily: "Courier, monospace"
                })
                setItemDescriptionStyles({
                    fontFamily: "Courier, monospace"
                })
                break
            case "1990s":
                setItemInfoStyles({
                    display: "flex",
                    backgroundColor: "white",
                    color: "black",
                    fontFamily: "'Comic Sans MS', Comic Sans, cursive"
                })
                setItemDescriptionStyles({
                    fontFamily: "'Comic Sans MS', Comic Sans, cursive"
                })
                break
            case "2000s":
                setItemInfoStyles({
                    display: "flex",
                    backgroundColor: "yellow",
                    color: "black",
                    fontFamily: "'Helvetica', sans-serif"
                })
                setItemDescriptionStyles({
                    fontFamily: "'Helvetica', sans-serif"
                })
                break
            case "2010s":
                setItemInfoStyles({
                    display: "flex",
                    backgroundColor: "white",
                    color: "black",
                    fontFamily: "'Helvetica', sans-serif"
                })
                setItemDescriptionStyles({
                    fontFamily: "'Helvetica', sans-serif"
                })
                break
            default:
                setItemInfoStyles({
                    display: "flex",
                    backgroundColor: "black",
                    color: "white",
                    fontFamily: "'Helvetica', sans-serif"
                })
                setItemDescriptionStyles({
                    fontFamily: "'Helvetica', sans-serif"
                })
        }
    }

    function returnToGrid() {
        setMainGridStyles({
            display: "grid",
            backgroundColor: "red"
        })
        setItemInfoStyles({
            display: "none"
        })
        changeTheme(headDecade)
    }

    return(
        <div id="app-div">
            <BurgerMenu burgerMenuOpen={burgerMenuOpen} changeTheme={changeTheme} menuHelp={menuHelp} menuDisclaimer={menuDisclaimer}/>
            <Header burgerFunc={toggleBurgerMenu} burgerMenuOpen={burgerMenuOpen} logo={logo} logoRadius={logoRadius} decade={headDecade} headingFont={headingFontStyles} mainFont={mainFontStyles} headerStyles={headerFooterStyles}/>
            {/*<MainGrid itemClickFunc={displayItemInfo} returnFunc={returnToGrid} mainGridStyles={mainGridStyles} homeStyles={homeStyles} homeDescriptionStyles={homeDescriptionStyles} disclaimerStyles={disclaimerStyles} disclaimerDescriptionStyles={disclaimerDescriptionStyles} randomItemStyles={randomItemStyles} randomImageStyles={randomImageStyles} itemInfoStyles={itemInfoStyles} itemDescriptionStyles={itemDescriptionStyles} decade={headDecade} itemsArray={itemsArray}/>*/}
            <MainGrid returnFunc={returnToGrid} mainGridStyles={mainGridStyles} homeStyles={homeStyles} homeDescriptionStyles={homeDescriptionStyles} disclaimerStyles={disclaimerStyles} disclaimerDescriptionStyles={disclaimerDescriptionStyles} itemInfoStyles={itemInfoStyles} itemDescriptionStyles={itemDescriptionStyles} itemDescriptionImage={itemDescriptionImage} itemDescriptionTitle={itemDescriptionTitle} itemDescriptionSub={itemDescriptionSub} itemDescriptionText={itemDescriptionText} decade={headDecade} itemArray={itemsArray}/>
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