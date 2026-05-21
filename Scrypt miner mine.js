let argent = 0;
let autoMiner = 0;
let production = 0;
const upgrades = {
    autoMiner: 1,
    Charbon: 2
}


// Fonction d'affichage
function afficherValeur() {
    let affichageArgent = document.getElementById("valeurArgent")
    affichageArgent.innerText = argent
}

function afficherNombreAuto() {
    let affichageAutoMiner = document.getElementById("nbrAutoMiner")
    affichageAutoMiner.innerText = autoMiner
}

function affichageNombreArgentSec(objetAuto) {
    document.getElementById("argSec").innerText = objetAuto + " /s" 
}


//------------- BOUTONS -------------//
boutonMiner.addEventListener('click', () => {
    argent++
    console.log(argent);
    afficherValeur()
    
});

boutonAutoMiner.addEventListener('click', () => {
    
    if (argent >= 10) {
        autoMiner++
        argent -= 10;
        production += upgrades.autoMiner 
        affichageNombreArgentSec(production)
    }
    else {
        console.log("Tu ne peux pas")
    }

    afficherValeur()
    afficherNombreAuto()

});

// boucle de production
setInterval(() => {
    argent += production
    afficherValeur()
}, 1000);






