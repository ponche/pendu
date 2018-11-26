// declaration des balises 
let baliseInputWord = document.querySelector("#saisiWord") ; 
let baliseZoneAlpha = document.querySelector("#zoneAlpha") ; 
let baliseTheGridWord = document.querySelector("#theGridWord") ; 
let baliseButtonChar = document.querySelector("#buttonSubmitChar") ; 
let baliseFailScore = document.querySelector("#failScore") ; 
let baliseConviction = document.querySelector("#conviction") ; 

// les declaration de variable 
let listeWord = [ "Mot", "Table", "Lapin", "Xylophone", "Framework", "Procrastination", "javascript", "database", ,"upgrade", "update",  "android", "ajax", "python", "cobra","symfony", "concatenation"] ; 
let theWord = listeWord[Math.floor(Math.random() * listeWord.length)] ;
let tehWordUpper = theWord.toUpperCase() ;  
let listeChar = tehWordUpper.split("") ; 
let arrayHiden = [] ; 
let nbEchec = 0 ; 

let ctxConviction = baliseConviction.getContext("2d") ; 
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

        // affichage des raté 
        baliseFailScore.innerHTML = nbEchec ; 
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
        // on dessine le pendu 
        drawPendu(nbEchec) ; 
        if(nbEchec == 11)
        {
            // on laisse la posibilité au joueur de continuer après le message sans nouveau pop up
            alert("Vous avez perdu !!!!") ; 
        }
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

function drawPendu(nbFail)
{
    // on prend un crayon rouge 
    ctxConviction.strokeStyle = "red" ;
    ctxConviction.beginPath() ; 
    switch(nbFail)
    {
        case 1 : 
            ctxConviction.moveTo(75 , 100) ; 
            ctxConviction.lineTo(75, 25) ; 
            break ; 
        case 2 : 
            ctxConviction.moveTo(75, 25) ; 
            ctxConviction.lineTo(25, 25) ; 
            break ; 
        case 3 : 
            ctxConviction.moveTo(75 , 25 + 10) ; 
            ctxConviction.lineTo(75 - 10, 25) ; 
            break ; 
        case 4 : 
            ctxConviction.moveTo(30, 25) ; 
            ctxConviction.lineTo(30, 25 + 10) ; 
            break ; 
        case 5 : 
            // on commence la tete 
            ctxConviction.arc(30, 25 + 20, 10, 0, Math.PI * 2, false) ; 
            break ;
        case 6 : 
            // le cou 
            ctxConviction.moveTo(30, 25 + 30) ; 
            ctxConviction.lineTo(30, 25 + 40) ; 
            break ; 
        case 7 : 
            // bras droite 
            ctxConviction.moveTo(30, 25 + 40) ; 
            ctxConviction.lineTo(40, 25 + 30) ; 
            break ; 
        case 8 : 
            // bras gauche 
            ctxConviction.moveTo(30, 25 + 40) ; 
            ctxConviction.lineTo(20, 25 + 30) ; 
            break ; 
        case 9 : 
            // le tronc 
            ctxConviction.moveTo(30, 25 + 40) ; 
            ctxConviction.lineTo(30, 25 + 50) ; 
            break ; 
        case 10 : 
            // la jambe droite 
            ctxConviction.moveTo(30, 25 + 50) ; 
            ctxConviction.lineTo(40, 25 + 60) ; 
            break ; 
        case 11 : 
            // la jambe gauche 
            ctxConviction.moveTo(30, 25 + 50) ; 
            ctxConviction.lineTo(20, 25 + 60) ;
            break; 
        default: 
            console.log("pas de trace pour cette etape") ; 
            break ; 
        } 
        ctxConviction.stroke() ; 

}


// mise a jour au lancement 
updateGridWord(listeChar) ; 
