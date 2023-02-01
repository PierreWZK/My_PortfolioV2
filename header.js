// DECLARATION DE TOUTES LES VARIABLES
let possibleToShowNavs = true;

// DOCUMENTS READY
$(document).ready(function() {
    // afficherReadyLoader(); // afficher le loader
    afficherReadyMenu(); // afficher le bouton menu
    afficherReadyNav(); // afficher la nav
    setTimeout(() => {
        $('.loader').fadeOut(300);
    }, 1100);

    $('#buttonMenu').click(function() {
        if (possibleToShowNavs) {
            $('#menuNav').addClass('showMenu')
            $('#crossLeave').fadeIn(800);
            $('#buttonMenu div').css('width', '0vw');
            setTimeout(() => {
                $('.lineSlider').css('transition', 'all 1.5s ease')

                //* SLIDER 1
                $('#lineSlider-1').css('margin-left', '100%');
                setTimeout(() => {
                    $('#titleNav-1').addClass('titleNavShow');
                }, 200);

                //* SLIDER 2
                setTimeout(() => {
                    $('#lineSlider-2').css('margin-left', '100%');
                    setTimeout(() => {
                        $('#titleNav-2').addClass('titleNavShow');
                    }, 250);
                }, 250);

                //* SLIDER 3
                setTimeout(() => {
                    $('#lineSlider-3').css('margin-left', '100%');
                    setTimeout(() => {
                        $('#titleNav-3').addClass('titleNavShow');
                    }, 250);
                }, 500);

                //* SLIDER 4
                setTimeout(() => {
                    $('#lineSlider-4').css('margin-left', '100%');
                    setTimeout(() => {
                        $('#titleNav-4').addClass('titleNavShow');
                    }, 250);
                }, 750);

                //* SLIDER 5
                setTimeout(() => {
                    $('#lineSlider-5').css('margin-left', '100%');
                    setTimeout(() => {
                        $('#titleNav-5').addClass('titleNavShow');
                    }, 250);
                }, 1000);


                //! enlever la possibilité de clicker sur la croix (ATTENDRE LA FIN de l'animation)
                setTimeout(() => {
                    possibleToShowNavs = false;
                }, 1500); // prendre 1500 + tout les timeouts des SLIDER 2, SLIDER3, SLIDER 4, ....
            }, 1300);
        }
    })

    $('#crossLeave').click(function() {
        if (!possibleToShowNavs) {

            $('#menuNav').removeClass('showMenu')
            $('#crossLeave').fadeOut(600);
            $('#buttonMenu div').css('width', '3vw');

            //  RAZ des lineSlider
            $('.lineSlider').css('transition', '')
            $('#lineSlider-1').css('margin-left', '-230%');
            $('#lineSlider-2').css('margin-left', '-330%');
            $('#lineSlider-3').css('margin-left', '-430%');
            $('#lineSlider-4').css('margin-left', '-530%');
            $('#lineSlider-5').css('margin-left', '-630%');

            setTimeout(() => {
                // Slider 1
                $('#titleNav-1').removeClass('titleNavShow');

                // SLIDER 2
                $('#titleNav-2').removeClass('titleNavShow');

                // SLIDER 3
                $('#titleNav-3').removeClass('titleNavShow');

                // SLIDER 4
                $('#titleNav-4').removeClass('titleNavShow');

                // SLIDER 5
                $('#titleNav-5').removeClass('titleNavShow');

                //remettre la posibilité de click sur le navigation
                possibleToShowNavs = true;
            }, 1300);
        }
    })
});

// ========== Incrementation de la navbar, loader et Bouton du navbar ==========
function afficherReadyNav() {
    var text = "";
    text += '<!-- NavBar by Pierr -->';
    text += '<nav id="menuNav">';
    text += '    <div id="crossLeave">';
    text += '    </div>';
    text += '    <div id="navigation">';
    text += '        <div id="titleNav-1" class="titleNav">Accueil</div>';
    text += '        <div id="lineSlider-1" class="lineSlider"></div>';
    text += '        <div id="titleNav-2" class="titleNav">Mes Projets</div>';
    text += '        <div id="lineSlider-2" class="lineSlider"></div>';
    text += '        <div id="titleNav-3" class="titleNav">Ma Formation</div>';
    text += '        <div id="lineSlider-3" class="lineSlider"></div>';
    text += '        <div id="titleNav-4" class="titleNav">Mon Experience</div>';
    text += '        <div id="lineSlider-4" class="lineSlider"></div>';
    text += '        <div id="titleNav-5" class="titleNav">Contact</div>';
    text += '        <div id="lineSlider-5" class="lineSlider"></div>';
    text += '    </div>';
    text += '</nav>';
    text += '<!-- NavBar by Pierr -->';
    $('body').prepend(text);
}

function afficherReadyLoader() {
    var text = "";
    text += '<!-- Loader screen by Pierr -->';
    text += '<div class="loader">';
    text += '    <div class="bar bar1"></div>';
    text += '    <div class="bar bar2"></div>';
    text += '    <div class="bar bar3"></div>';
    text += '    <div class="bar bar4"></div>';
    text += '    <div class="bar bar5"></div>';
    text += '    <div class="bar bar6"></div>';
    text += '    <div class="bar bar7"></div>';
    text += '    <div class="bar bar8"></div>';
    text += '</div>';
    text += '<!-- Loader screen by Pierr -->';
    $("body").prepend(text);
}

function afficherReadyMenu() {
    var text = "";
    text += '<!-- Bouton Menu by Pierr -->';
    text += '<div id="buttonMenu">';
    text += '    <div></div>';
    text += '    <div></div>';
    text += '    <div></div>';
    text += '</div>';
    text += '<!-- Bouton Menu by Pierr -->';
    $("body").prepend(text);
}
// ========== Incrementation de la navbar, loader et Bouton du navbar ==========

// Pouvoir afficher le loader en fonction
function afficherLoader() {
    $('.loader').fadeIn(300);
    setTimeout(() => {
        $('.loader').fadeOut(300);
    }, 1100);
}