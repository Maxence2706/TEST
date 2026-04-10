console.log("coucou")

//variables
let maVar = "true" // valeur qui est améne à changer
const maConst = "Autre Valeur" // Ne changera jamais 

// Structurtes conditionelles 
// if(condition et condition ) ou (condition et condition))
if(maVar == "true"){
    console.log("C'est vrai !!")
} else if (maVar == "toto"){
    console.log("toto")
} else {
    console.log("On est dans le else")
}

switch(maVar){
     case "true" :
}

const age = 19
   



// Boucles 

// Fonction


const monPremierarticle = `
    <article>
        <div>
            <h1>COUCOU</h1>
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
            </ul>
        </div>

`

docuemnt.querySelector("body > section:nth-child(2)").inserAdjcentHTML("beforeend", monPremierArtcile)

const h1 = document.querySelector('h1')
let count = 0
// h1.addEventListener('type évènement à observer, fonction à lancer)
h1.addEventListener('click', () => {
    count++
    h1.textContent = '${title}, Vous avez cliqué ${count} fois'
})

//loaclStorage.setItemc"clén valeur au format STRING)
localStorage.setItem("prenom", "Maxence")
// localStorage.getItem("clé")
const prenom = localStorage.getItem("prenom")
console.log(prenom)

const person = {
    prenom: "Maxence",
    nom: "COPIN--PETEN",
    age: 19
}

console.log(person.nom)
const strPrenom = JSON.stringify(person)
localStorage.setItem(`person`, strPerson)
const parsePerson = JSON.parse(localStorage.getItem(`person`))

console.log(parsePerson)
console.log(localStorage.getItem(`person`))

const fruits = ["tomate", "pomme", "orange", "kiwi"]

const ul = document.querySelector('ul')

fruits.forEach((el) => {
    ul.insertAdjucentHTML("beforeend", `<li>${el}</li>`)
})

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener(`click`, (el) => {
        console.log("Tu as cliqué sur le bouton")
})
})


