// declaration des balises 
let baliseInputWord = document.querySelector("#saisiWord") ; 
let baliseZoneAlpha = document.querySelector("#zoneAlpha") ; 
let baliseTheGridWord = document.querySelector("#theGridWord") ; 

// les declaration de variable 
let listeWord = ["Con", "Mot", "Table", "Lapin", "javascript", "ajax", "python", "cobra"] ; 
let theWord = listeWord[Math.floor(Math.random() * listeWord.length)] ;
let tehWordUpper = theWord.toUpperCase() ;  
let listeChar = tehWordUpper.split("") ; 
let arrayHiden = [] ; 
// creation du liste de boolean pour le hiden 
listeChar.forEach(function(){
    arrayHiden.push(true) ; 
})


// creation de la grille 
function updateGridWord(tableauChar)
{
    // on cree la grid 
    for(let i = 0 ; i < listeChar.length ; i++)
    {
        //Création de la cellule Char 
        let divChar = document.createElement("div") ; 
        divChar.classList.add("divChar") ; 
        if (arrayHiden[i])
        {
            // la case est caché 
            divChar.classList.add("hiden") ; 
        }
        else
        {
            // la case est visible
            divChar.innerHTML = listeChar[i] ;  
        }
    }
}
