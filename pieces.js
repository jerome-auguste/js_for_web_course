// Récupération des pièces depuis le fichier JSON
const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());

// Fonction qui génère toute la page web
function genererPieces(pieces) {
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        
        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        // On rattache l’image à pieceElement (la balise article)
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        //Ajout des éléments au DOM pour l'exercice
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
    
     }

}

genererPieces(pieces);
 
const boutonTrierPrixCrois = document.querySelector(".btn-trier-prix-crois");

boutonTrierPrixCrois.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonTrierPrixDecrois = document.querySelector(".btn-trier-prix-decrois");

boutonTrierPrixDecrois.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonFiltrerPrix = document.querySelector(".btn-filtrer-prix");

boutonFiltrerPrix.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

const boutonFiltrerDesc = document.querySelector(".btn-filtrer-desc");

boutonFiltrerDesc.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

const nomsAbordables = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].prix > 35){
        nomsAbordables.splice(i,1);
    }
}

//Création de la liste
const pAbordablesElements = document.createElement('p');
const abordablesElements = document.createElement('ul');

pAbordablesElements.innerText = "Pièces abordables :"
//Ajout de chaque nom à la liste
for(let i=0; i < nomsAbordables.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = nomsAbordables[i];
    abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(pAbordablesElements)
    .appendChild(abordablesElements)

const nomsDispo = pieces.map(piece => piece.nom);
const prixDispo = pieces.map(piece => piece.prix);
for (let i=pieces.length -1; i>=0; i--){
    if(pieces[i].disponibilite === false){
        nomsDispo.splice(i,1);
        prixDispo.splice(i,1);
    }
}

//Création de la liste
const dispoElements = document.createElement('ul');
const pDispoElements = document.createElement('p');

pDispoElements.innerText = "Pièces disponibles :"
//Ajout de chaque nom à la liste
for(let i=0; i < nomsDispo.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDispo[i]} - ${prixDispo[i]} €`;
    dispoElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.disponibles')
    .appendChild(pDispoElements)
    .appendChild(dispoElements)


const inputFiltrerPrix = document.querySelector("#input-prix-max");

inputFiltrerPrix.addEventListener("input", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= inputFiltrerPrix.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});
