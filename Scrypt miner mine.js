let argent = 0;
let ressource = {};
let production = 0;
const upgrades = {
    autoMiner: 1,
    Pierre: 3
}
const boutons = {
    boutonMiner: document.getElementById("boutonMiner"),
    boutonAutoMiner: document.getElementById("boutonAutoMiner"),
    boutonPierre: document.getElementById("boutonPierre")
};
updateUI()

// Fonction d'affichage
function afficherArgent() {
    updateUI()
    let affichageArgent = document.getElementById("valeurArgent")
    affichageArgent.innerText = argent
}

function afficherRessource() {
    let affichageRessource = document.getElementById("nbrAutoMiner")
    affichageRessource.innerText = ressource.autoMiner || 0
}

function affichageNombreArgentSec(objetAuto) {
    document.getElementById("argSec").innerText = objetAuto + " € /s" 
}

function updateUI() {
    for (const bouton of Object.values(boutons)) {
        const prix = Number(bouton.value)

        if (argent < prix) {
            bouton.classList.remove("achetable")
            bouton.classList.add("disable")
        } else {
            bouton.classList.add("achetable")
            bouton.classList.remove("disable")
        }}
}

//------------- BOUTONS -------------//
boutonMiner.addEventListener('click', () => {
    argent++
    console.log(argent);
    afficherArgent()
    
});

boutonAutoMiner.addEventListener('click', () => {
    
    if (argent >= 50) {
        ressource.autoMiner = (ressource.autoMiner || 0) + 1
        argent -= 50;
        production += upgrades.autoMiner 
        affichageNombreArgentSec(production)
    }
    else {
        console.log("Tu ne peux pas")
    }

    afficherArgent()
    afficherRessource()
});

boutonPierre.addEventListener('click', () => {
    if (argent >= 300){
        ressource.autoMiner = (ressource.autoMiner || 0) + 3
        argent -= 300;
        production += upgrades.Pierre
        affichageNombreArgentSec(production)
    }else {
        console.log("Tu ne peux pas")
    }
    
    afficherArgent()
    afficherRessource()
})

// boucle de production
 intervalId = setInterval(() => {

     argent += production
     afficherArgent()
     updateUI()

}, 1000);







