# JavaScript for web development

Course: [Create dynamic webpages using JavaScript](https://openclassrooms.com/fr/courses/7697016-creez-des-pages-web-dynamiques-avec-javascript)

## Structure of the course

- [x] 1. Create a webpage with existing data
  - [x] Prepare your project
  - [x] Use JSON format
  - [x] Generate content using DOM
- [ ] 2. Make your page interactive
  - [x] Manipulate lists in JavaScript
  - [ ] Use the map function
  - [ ] Update the displayed webpage
- [ ] 3. Interact with a web service using API
  - [ ] Send a request with your browser
  - [ ] Process the server response
  - [ ] Save data using HTTP API
  - [ ] Save data on localStorage
- [ ] 4. Enrich your webpage using libraries
  - [ ] Use the appropriate library for your needs
  - [ ] Install libraries with NPM
  - [ ] Enrich your projects with libraries
- [ ] 5. Linter

## 1. Create a webpage with existing data

```json
[
    {
        "category_name1": "text_value with inner \" quotes",
        "category_name2": 0,
        "category_name3": true,
        "category_name4": [
            "text_value",
            0,
            true
        ],
    },
    {
        "...": "..."
    }
]
```

```javascript
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`; // template string to insert interpreted code inside string, + ternary operator
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)"; // nullish coalescing operator

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
```

## 2. Make your page interactive

```javascript
for (let i = 0; i < pieces.length; i++) {

// Récupération de l'élément du DOM qui accueillera les fiches
const sectionFiches = document.querySelector(".fiches");
// Création d’une balise dédiée à une pièce automobile
const pieceElement = document.createElement("article");
// On crée l’élément img.
const imageElement = document.createElement("img");
// On accède à l’indice i de la liste pieces pour configurer la source de l’image.
imageElement.src = pieces[i].image;
// Idem pour le nom, le prix et la catégorie...

// On rattache la balise article à la section Fiches
sectionFiches.appendChild(pieceElement);
// On rattache l’image à pieceElement (la balise article)
pieceElement.appendChild(imageElement);
// Idem pour le nom, le prix et la catégorie...
}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces); // copie de la liste, sort est une méthode "in place"
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
        // trié par prix: négatif => a avant b, positif => b avant a, 0 => pas de changement
    });
    console.log(pieces);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
});

const noms = pieces.map(piece => piece.nom); // map retourne une nouvelle liste en appliquant la fonction lambda à tous les éléments de la liste initiale
for(let i = pieces.length -1 ; i >= 0; i--){ // Il faut parcourir la liste à l'envers pour accéder à tous les éléments
   if(pieces[i].prix > 35){
       noms.splice(i,1) // splice supprime 1 élément à l'indice i
   }
}
console.log(noms)

//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
   const nomElement = document.createElement('li');
   nomElement.innerText = noms[i];
   abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
   .appendChild(abordablesElements)

```

## 3. Interact with a web service using API

## 4. Enrich your webpage using libraries

## 5. Linter
