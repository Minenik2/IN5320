let countryList = document.querySelector("ul")
const countryInput = document.getElementById("countryInput")
const button = document.getElementById("countryButton")

const search = document.getElementById("search")

button.addEventListener("click", () => {
    let newElementAdd = document.createElement("li")
    let newElementButton = document.createElement("button")
    newElementButton.addEventListener("click", () => {
        newElementButton.remove()
        newElementAdd.remove()
    })
    newElementButton.textContent = "X"
    newElementAdd.textContent = countryInput.value
    countryInput.value = ""
    countryList.appendChild(newElementAdd)
    newElementAdd.appendChild(newElementButton)
})

function search(element, searchWord) {
    return element.startsWith(searchWord)
}

function searchList(list, searchWord) {
    return list.filter(x => search(x, searchWord))
}

search.addEventListener("keydown", e => {
    let countryListAll = document.querySelectorAll("li")
    
})

console.log(searchList(["India",
"Norway",
"Denmark",
"Sweden",
"Indonesia"],
"Ind"))
