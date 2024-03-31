//module to make AI generated info easier to read by eliminating unusual characters/character combinations
//for instance, .. or ?.

export function sanitise(sometext) {
    let newtext = sometext
    newtext = newtext.replaceAll("??.", ".")
    newtext = newtext.replaceAll("?.", ".")
    newtext = newtext.replaceAll("?..", ".")
    newtext = newtext.replaceAll("?4.", ".")
    newtext = newtext.replaceAll("..", ".")
    return newtext
}