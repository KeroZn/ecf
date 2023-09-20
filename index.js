//------------------------------AVIS------------------------------

function afficherAvis() {
    const nom = document.getElementById('nom').value;
    const avis = document.getElementById('avis').value;

    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = `${nom}: ${avis}`;

    const container = document.querySelector('.container-messages');
    
    // Insérer le message en tant que premier enfant (au début de la liste)
    container.insertBefore(messageElement, container.firstChild);

    // Réinitialisation des champs d'entrée
    document.getElementById('nom').value = '';
    document.getElementById('avis').value = '';
}

document.addEventListener('DOMContentLoaded', function () {
    const publierBtn = document.getElementById('publier-btn');
    publierBtn.addEventListener('click', afficherAvis);
});


//------------------------------VOITURE------------------------------------ 



    // Supposons que vous ayez un tableau d'objets représentant des voitures
    var cars = [
        { marque: "Citroen", modele: "C3", annee: 2017, kilometrage: 50000, prix: 10000, photo :"vehicule/citroen.jpg"},
        { marque: "Peugeot", modele: "208", annee: 2019, kilometrage: 100000, prix: 6000,photo :"vehicule/peugeot.jpg" },
        { marque: "Renault", modele: "Twingo", annee: 2025, kilometrage: 142390, prix: 3000,photo :"vehicule/twingo.jpg" },
    ];

    // Fonction pour afficher les voitures dans la section "results"
    function displayCars() {
        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = ""; // Effacez le contenu existant
    
        for (var i = 0; i < cars.length; i++) {
            var car = cars[i];
            var carElement = document.createElement("div");
            carElement.innerHTML = `
                <h2>${car.marque} ${car.modele}</h2>
                <img src="${car.photo}" alt="${car.marque} ${car.modele}" class="img-car"> 
                <p>Année: ${car.annee}</p>
                <p>Kilométrage: ${car.kilometrage} km</p>
                <p>Prix: $${car.prix}</p>
            `;
            resultsDiv.appendChild(carElement);
        }
    }

    function applyFilters() {
        // Récupérez les valeurs minimales et maximales des champs Kilométrage, Année et Prix
        var kmMin = parseInt(document.getElementById("kmMin").value) || 0;
        var kmMax = parseInt(document.getElementById("kmMax").value) || Infinity;
        var yearMin = parseInt(document.getElementById("yearMin").value) || 0;
        var yearMax = parseInt(document.getElementById("yearMax").value) || Infinity;
        var priceMin = parseInt(document.getElementById("priceMin").value) || 0;
        var priceMax = parseInt(document.getElementById("priceMax").value) || Infinity;
    
        // Filtrer les voitures en fonction des critères
        var filteredCars = cars.filter(function(car) {
            return car.kilometrage >= kmMin &&
                   car.kilometrage <= kmMax &&
                   car.annee >= yearMin &&
                   car.annee <= yearMax &&
                   car.prix >= priceMin &&
                   car.prix <= priceMax;
        });
    
        // Afficher les voitures filtrées
        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = ""; // Effacez le contenu existant
    
        if (filteredCars.length === 0) {
            resultsDiv.innerHTML = "<p>Aucune voiture ne correspond aux critères de filtrage.</p>";
        } else {
            for (var i = 0; i < filteredCars.length; i++) {
                var car = filteredCars[i];
                var carElement = document.createElement("div");
                carElement.innerHTML = `
                    <h2>${car.marque} ${car.modele}</h2>
                    <img src="${car.photo}" alt="${car.marque} ${car.modele}" class="img-car">
                    <p>Année: ${car.annee}</p>
                    <p>Kilométrage: ${car.kilometrage} km</p>
                    <p>Prix: $${car.prix}</p>
                `;
                resultsDiv.appendChild(carElement);
            }
        }
    }
    
    
    // Appel initial pour afficher toutes les voitures
    displayCars();

