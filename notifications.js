var blinkInterval; // Déclaration de la variable pour stocker l'intervalle de clignotement

function blinker() {
    var d = document.getElementById("heure-minute");
    d.style.color = (d.style.color === 'yellow' ? 'white' : 'yellow');
}

blinkInterval = setInterval(blinker, 500); // Création de l'intervalle de clignotement et stockage dans blinkInterval
