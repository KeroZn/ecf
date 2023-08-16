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
