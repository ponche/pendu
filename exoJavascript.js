// declaration des balises 
let baliseInputWord = document.querySelector("#saisiWord") ; 
let baliseZoneAlpha = document.querySelector("#zoneAlpha") ; 
let baliseTheGridWord = document.querySelector("#theGridWord") ; 
let baliseButtonChar = document.querySelector("#buttonSubmitChar") ; 

// les declaration de variable 
let listeWord = [ "Mot", "Table", "Lapin", "javascript", "ajax", "python", "cobra"] ; 
let theWord = listeWord[Math.floor(Math.random() * listeWord.length)] ;
let tehWordUpper = theWord.toUpperCase() ;  
let listeChar = tehWordUpper.split("") ; 
let arrayHiden = [] ; 
let nbEchec = 0 ; 
// creation du liste de boolean pour le hiden 
listeChar.forEach(function(){
    arrayHiden.push(true) ; 
})


// creation de la grille 
function updateGridWord(tableauChar)
{
    // on efface la grid 
    baliseTheGridWord.innerHTML = "" ; 
    // on cree la grid 
    for(let i = 0 ; i < listeChar.length ; i++)
    {
        //Création de la cellule Char 
        let divChar = document.createElement("div") ; 
        divChar.classList.add("divChar") ; 
        if (arrayHiden[i])
        {
            // la case est caché 
            divChar.classList.add("hidden") ; 
        }
        else
        {
            // la case est visible
            divChar.innerHTML = listeChar[i] ;  
        }
        // assemlblage de la brique dans le mur 
        baliseTheGridWord.appendChild(divChar) ; 
    }
    // reset du input 
    baliseInputWord.value = "" ; 
}

function tentative(tryChar)
{
    let goodChar = false ; 
    for(let i = 0 ; i < listeChar.length ; i++)
    {
        //test du caracterer 
        if (tryChar == listeChar[i])
        {
            // la lettre est dans le mot 
            goodChar = true ; 
            arrayHiden[i] = false ; 
        }

    }
    // fin de la recherche 
    if (!goodChar)
    {
        // mauvaises lettre 
        nbEchec++ ; 
    }
    if(checkWinner())
    {
        alert("bravo vous avez gagné !!!")
    }

    updateGridWord(listeChar) ; 
}

// verification si gagner 
function checkWinner()
{
    let winner = true ; 
    arrayHiden.forEach(function(etatCasse){
        if(etatCasse)
        {
            winner = false ; 
        }
    });

    return winner ; 
}

// on met un ecouteur event 
baliseButtonChar.addEventListener("click", function(){
    let saisiChar = baliseInputWord.value ; 
    let saisiCharUpper = saisiChar.toUpperCase() ; 
    tentative(saisiCharUpper) ; 
})


// mise a jour au lancement 
updateGridWord(listeChar) ; 
