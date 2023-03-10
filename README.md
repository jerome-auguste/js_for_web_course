# JavaScript for web development

Course: [Create dynamic webpages using JavaScript](https://openclassrooms.com/fr/courses/7697016-creez-des-pages-web-dynamiques-avec-javascript)

## Structure of the course

- [ ] 1. Create a webpage with existing data
  - [x] Prepare your project
  - [x] Use JSON format
  - [x] Generate content using DOM
- [ ] 2. Make your page interactive
  - [ ] Manipulate lists in JavaScript
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

```javascript
```

## 2. Make your page interactive

## 3. Interact with a web service using API

## 4. Enrich your webpage using libraries

## 5. Linter
