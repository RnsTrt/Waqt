const images = [
    "MyImage1.jpg",
    "MyImage3.jpg",
    "MyImage4.jpg",
    "MyImage5.jpg",
    "MyImage6.jpg",
    "MyImage7.jpg",
    "MyImage8.jpg",
    "MyImage9.jpg",
    "MyImage10.jpg",
    "MyImage11.jpg",
    "MyImage13.jpg",
    "MyImage15.jpg",
    "MyImage16.jpg",
    "MyImage17.jpg",
    "MyImage19.jpg",
    "MyImage20.jpg",
    "MyImage21.jpg",
    "MyImage22.jpg",
    "MyImage24.jpg",
    "MyImage25.jpg",
    "MyImage26.jpg",
    "MyImage29.jpg",
   
];

let indexImage = 0;

function changerImageFond() {
    const imageUrl = images[indexImage];
    const imageExist = images.includes(imageUrl);
    
    if (imageExist) {
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    } else {
        document.body.style.backgroundColor = "black";
    }
    
    indexImage = (indexImage + 1) % images.length;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
}

shuffle(images);

setInterval(changerImageFond, 6 * 1000);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function afficherDate() {
  const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', era: 'short', eraDisplay: 'narrow' };
  const maintenant = new Date();
  const dateLocale = maintenant.toLocaleDateString('ar-DZ', options);
  const jourAvecDeuxChiffres = dateLocale.replace(/\b(\d{1})\b/g, '0$1');
  const formattedDate = jourAvecDeuxChiffres.replace(/،/g, 'ـ').replace(/الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت|الأحد/g, '');
  document.getElementById('date').innerText = formattedDate;
}

function afficherDateHijire() {
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit", // Affiche les jours à deux chiffres
    weekday: "long"
  };
  const dateHijire = new Date().toLocaleDateString("ar-DZ-u-ca-islamic", options);
  document.getElementById("dateHijire").innerHTML = dateHijire.replace(/،/g, " ").replace(/\u066c/g, "\u0660");
}

var soundPlayed = false; // Variable pour suivre si le son a déjà été joué

// Vérifie si nous sommes à 5 minutes avant une heure paire
function verifierSon() {
    const maintenant = new Date();
    const heure = maintenant.getHours().toString().padStart(2, '0');
    const minute = maintenant.getMinutes().toString().padStart(2, '0');
    
    if (parseInt(minute) === 55 && (parseInt(heure) + 1) % 2 === 0 && !soundPlayed) {
        jouerSon(); // Appeler la fonction pour jouer le son
        soundPlayed = true; // Marquer que le son a été joué
    } 
}

function afficherHeure() {
    const maintenant = new Date();
    const heure = maintenant.getHours().toString().padStart(2, '0');
    const minute = maintenant.getMinutes().toString().padStart(2, '0');
    const seconde = maintenant.getSeconds().toString().padStart(2, '0');

    document.getElementById('heure-minute').innerText = heure + ' : ' + minute;
    document.getElementById('seconde').innerText = seconde;

// Vérifie si les minutes sont entre 55 et 59, et si l'heure suivante est paire
if (parseInt(minute) >= 55 && parseInt(minute) <= 59 && (parseInt(heure) + 1 ) % 2 === 0) {
    blinker(); // Appel de la fonction blinker
} else {
    var d = document.getElementById("heure-minute");
    d.style.color = 'white'; // Changement de la couleur du texte en blanc

    // Arrêt du clignotement en effaçant l'intervalle de temps
    clearInterval(blinkInterval);
}

 
      
 if (heure === '00' && minute === '00' && seconde === '00') {
        afficherDate();
    }
}
// Fonction pour la notification sonore

function jouerSon() {
    var audio = new Audio('NotifSound.mp3'); // Créer un nouvel élément audio avec le fichier sonore
    audio.play(); // Jouer le son
}

afficherDate();
afficherDateHijire();
setInterval(afficherHeure, 1000);


