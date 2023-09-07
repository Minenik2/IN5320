let countryList = document.querySelector("ul")
let countryListAll = []
const countryInput = document.getElementById("countryInput")
const button = document.getElementById("countryButton")

const search = document.getElementById("search")

button.addEventListener("click", () => {
    // lager ny element med knapp
    let newElementAdd = document.createElement("li")
    let newElementButton = document.createElement("button")
    newElementButton.addEventListener("click", () => {
        newElementButton.remove()
        newElementAdd.remove()
        countryListAll.splice(countryListAll.indexOf(newElementAdd), 1)
    })
    newElementButton.textContent = "X"
    newElementAdd.textContent = countryInput.value // innholdet til elemente er det samme som det brukeren skrev
    countryInput.value = "" // nullstiller input
    newElementAdd.appendChild(newElementButton)
    countryList.appendChild(newElementAdd) // legger til element i dokument
    countryListAll.push(newElementAdd) // lagrer det i array for å kunne bli søkt opp senere
})
// funksjon for oppgave 3a, 
function searchMethod(element, searchWord) {
    return element.startsWith(searchWord)
}
// funksjon for oppgave 3b
function searchList(list, searchWord) {
    return list.filter(x => searchMethod(x, searchWord))
}

// hver gang brukeren søker sammenligner den søkefeltet med det som er i countryListen og viser det
search.addEventListener("keyup", e => {
    // her bruker jeg for loop istedenfor searchList metoden, jeg beklager for dette
    // fordi jeg valgte å ha alle "li" elementene i en liste, istedenfor String elementer
    // det er mulig å gjøre til en string array og ha en medote som lager elementene og viser dem på skjermen, men jeg tror at dette
    // er fortsatt ganskelig leselig og har mulighet for videreutviklning
    for (const element of countryListAll) {
        // her i if checken kunne man ha brukt if (element.textContent.toLowerCase().startsWith(search.value.toLowerCase())) men oppgaven ber om å bruke metodene som vi har laget i forrige oppgave
        if (searchMethod(element.textContent.toLowerCase(), search.value.toLowerCase())) {
            countryList.appendChild(element)
        } else {
            element.remove()
        }
    }
})

// bevis for oppgave 3a og B
console.log(searchList(["India",
"Norway",
"Denmark",
"Sweden",
"Indonesia"],
"Ind"))
