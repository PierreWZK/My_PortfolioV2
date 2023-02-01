// DECLARATION DE TOUTES LES VARIABLES

// DOCUMENTS READY
$(document).ready(function() {
    setTimeout(() => {
        // afficherTextor(); // ANCIEN portfolio
    }, 1100);
    // ========== Easter Eggs ==========

    $('#jobActuel p span').click(function() {
        // ouvrir une page youtube blank
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
    });

    // ========== Easter Eggs ==========

});


// ========== Fonction dans le content ==========

function afficherTextor() {

    new Typewriter($('#textor')[0], {
        loop: true
    })
    .typeString('Je m\'appelle <span class="textorName">Pierre</span> !')
    .pauseFor(500)
    .deleteAll()
    .typeString('Je suis <span class="textorName">Développeur Web</span> !')
    .pauseFor(500)
    .deleteAll()
    .typeString('Je recherche une <span class="textorName">alternance</span> !')
    .pauseFor(500)
    .deleteAll()
    .start();
}