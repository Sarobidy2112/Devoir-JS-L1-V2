var tab = [18,24,12,-1,13]
console.log("Tableau initiale : " + tab)

// Somme du tableau :
var somme = 0
for (var i=0; i<tab.length; i++){
    somme += tab[i]
}
console.log("La somme du tableau est : " + somme)



// Moyenne du tableau : 
var moyenne = somme / tab.length
console.log("La moyenne du tableau est : " + moyenne)



// Maximum et Minimum (avec leur position): 

var max = tab[0]
var min = tab[0]

for (var i=0; i<tab.length; i++){
    if(max <= tab[i]){
        max = tab[i]
        var positionMax = i
    }
    if(min >= tab[i]){
        min = tab[i]
        var positionMin = i
    }
}
console.log("La valeur max est : " + max)
console.log("La position de la valeur max est : " + positionMax)
console.log("La valeur min est : " + min)
console.log("La position de la valeur min est : " + positionMin)



// Carré du tableau
var tabCarre = []
for (var i=0; i<tab.length; i++){
    var x = tab[i] ** 2
    tabCarre.push(x)
}
console.log("Le carré du tableau est : " + tabCarre)



// Ordre croissant :
var tabInitial = tab
var tabCroissant = []
var min = tab[0]
var x = 5

while(x > 0){
    for (var i=0; i<tab.length; i++){
        if(min >= tab[i]){
            min = tab[i]
            var indiceMin = i
        }
    }
    tabCroissant.push(min)
    tab.splice(indiceMin, 1)
    min = tab[0]
    x -= 1
}
tab = tabInitial        // Conservation du tableau initiale
console.log("Tableau en ordre croissant : " + tabCroissant)



// ordre decroissant :
var tabDecroissant = []
for (var i=tabCroissant.length-1; i>=0; i--){
    tabDecroissant.push(tabCroissant[i])
}
console.log("Tableau en ordre decroissant : " + tabDecroissant)
