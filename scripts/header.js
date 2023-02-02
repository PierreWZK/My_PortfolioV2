// DECLARATION DE TOUTES LES VARIABLES
let possibleToShowNavs = true; // true -> 3 barres | false -> croix

// DOCUMENTS READY
$(document).ready(function() {
    // afficherReadyLoader(); // afficher le loader // NE MARCHE PAS BIEN
    afficherReadyMenu(); // afficher le bouton menu
    // afficherReadyNav(); // afficher la nav // ANCIEN
    afficherBarreLinks();
    setTimeout(() => {
        $('.loader').fadeOut(300);
    }, 1100);

    $('#buttonMenu').click(function() {
        if (possibleToShowNavs) { // si on a cliqué sur les 3 barres
            showNav(possibleToShowNavs);
            $('#middleButtonMenu').hide()
            $('#middleButtonMenu').css('height', '0')

            // bottomButtonMenu
            $('#bottomButtonMenu').css('transform', 'rotate(-45deg)')
            $('#bottomButtonMenu').css('margin-top', '')
            $('#bottomButtonMenu').css('margin-bottom', '')
            $('#bottomButtonMenu').css('position', 'absolute')

            // topButtonMenu
            $('#topButtonMenu').css('transform', 'rotate(45deg)')
            $('#topButtonMenu').css('margin-top', '')
            $('#topButtonMenu').css('margin-bottom', '')
            $('#topButtonMenu').css('position', 'absolute')
            setTimeout(() => {
                possibleToShowNavs = false;
            }, 500);
        } else { // si on a cliqué sur la croix
            showNav(possibleToShowNavs);
            // bottomButtonMenu
            $('#bottomButtonMenu').css('transform', 'rotate(0)')
            $('#bottomButtonMenu').css('margin-top', '6%')
            $('#bottomButtonMenu').css('margin-bottom', '6%')
            $('#bottomButtonMenu').css('position', '')

            // topButtonMenu
            $('#topButtonMenu').css('transform', 'rotate(0)')
            $('#topButtonMenu').css('margin-top', '6%')
            $('#topButtonMenu').css('margin-bottom', '6%')
            $('#topButtonMenu').css('position', '')
            setTimeout(() => {
                $('#middleButtonMenu').show()
                $('#middleButtonMenu').css('height', '11%')
            }, 100);
            setTimeout(() => {
                possibleToShowNavs = true;
            }, 500);
        }
    }); // afficher la nav


    //! ANCIENNE NAV
    // $('#buttonMenu').click(function() {
    //     if (possibleToShowNavs) {
    //         $('#menuNav').addClass('showMenu')
    //         $('#crossLeave').fadeIn(800);
    //         $('#buttonMenu div').css('width', '0vw');
    //         setTimeout(() => {
    //             $('.lineSlider').css('transition', 'all 1.5s ease')

    //             //* SLIDER 1
    //             $('#lineSlider-1').css('margin-left', '100%');
    //             setTimeout(() => {
    //                 $('#titleNav-1').addClass('titleNavShow');
    //             }, 200);

    //             //* SLIDER 2
    //             setTimeout(() => {
    //                 $('#lineSlider-2').css('margin-left', '100%');
    //                 setTimeout(() => {
    //                     $('#titleNav-2').addClass('titleNavShow');
    //                 }, 250);
    //             }, 250);

    //             //* SLIDER 3
    //             setTimeout(() => {
    //                 $('#lineSlider-3').css('margin-left', '100%');
    //                 setTimeout(() => {
    //                     $('#titleNav-3').addClass('titleNavShow');
    //                 }, 250);
    //             }, 500);

    //             //* SLIDER 4
    //             setTimeout(() => {
    //                 $('#lineSlider-4').css('margin-left', '100%');
    //                 setTimeout(() => {
    //                     $('#titleNav-4').addClass('titleNavShow');
    //                 }, 250);
    //             }, 750);

    //             //* SLIDER 5
    //             setTimeout(() => {
    //                 $('#lineSlider-5').css('margin-left', '100%');
    //                 setTimeout(() => {
    //                     $('#titleNav-5').addClass('titleNavShow');
    //                 }, 250);
    //             }, 1000);


    //             //! enlever la possibilité de clicker sur la croix (ATTENDRE LA FIN de l'animation)
    //             setTimeout(() => {
    //                 possibleToShowNavs = false;
    //             }, 1500); // prendre 1500 + tout les timeouts des SLIDER 2, SLIDER3, SLIDER 4, ....
    //         }, 1300);
    //     }
    // })

    // $('#crossLeave').click(function() {
    //     if (!possibleToShowNavs) {

    //         $('#menuNav').removeClass('showMenu')
    //         $('#crossLeave').fadeOut(600);
    //         $('#buttonMenu div').css('width', '3vw');

    //         //  RAZ des lineSlider
    //         $('.lineSlider').css('transition', '')
    //         $('#lineSlider-1').css('margin-left', '-230%');
    //         $('#lineSlider-2').css('margin-left', '-330%');
    //         $('#lineSlider-3').css('margin-left', '-430%');
    //         $('#lineSlider-4').css('margin-left', '-530%');
    //         $('#lineSlider-5').css('margin-left', '-630%');

    //         setTimeout(() => {
    //             // Slider 1
    //             $('#titleNav-1').removeClass('titleNavShow');

    //             // SLIDER 2
    //             $('#titleNav-2').removeClass('titleNavShow');

    //             // SLIDER 3
    //             $('#titleNav-3').removeClass('titleNavShow');

    //             // SLIDER 4
    //             $('#titleNav-4').removeClass('titleNavShow');

    //             // SLIDER 5
    //             $('#titleNav-5').removeClass('titleNavShow');

    //             //remettre la posibilité de click sur le navigation
    //             possibleToShowNavs = true;
    //         }, 1300);
    //     }
    // })
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
    text += '<!-- Navigation Bar by Pierr -->';
    text += '<div id="navigationGlob">';
    text += '   <!-- Text Nav by Pierr -->';
    text += '   <div id="pierr">';
    text += '       <a href="/">Pierr.';
    text += '       </a>';
    text += '   </div>';
    text += '   <!-- Text Nav by Pierr -->';
    text += '   <!-- Bouton Menu by Pierr -->';
    text += '   <div id="buttonMenu">';
    text += '       <div id="bottomButtonMenu"></div>';
    text += '       <div id="middleButtonMenu"></div>';
    text += '       <div id="topButtonMenu"></div>';
    text += '   </div>';
    text += '   <!-- Bouton Menu by Pierr -->';
    text += '</div>';
    text += '<!-- Navigation Bar by Pierr -->';
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

function afficherBarreLinks() {
    var text = "";

    text += '<!-- Barre links by Pierr inspired to brittanychiang.com -->';
    text += '<div id="linksNavFixed">';
    text += '    <div class="line"></div>';
    text += '    <div class="linker">';
    text += '        <!-- Twitter -->';
    text += '        <a href="https://twitter.com/PierreWZK">';
    text += '            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="49" viewBox="0 0 51 49" fill="none">';
    text += '            <path d="M49 2.02529C46.9542 3.7238 44.6891 5.02289 42.2918 5.87252C41.0052 4.13123 39.2952 2.89705 37.3932 2.3369C35.4912 1.77675 33.4889 1.91765 31.6572 2.74055C29.8254 3.56345 28.2526 5.02865 27.1514 6.93797C26.0502 8.8473 25.4737 11.1086 25.5 13.4161V15.9307C21.7456 16.0452 18.0255 15.0652 14.6708 13.0778C11.3161 11.0904 8.43113 8.15732 6.27273 4.53982C6.27273 4.53982 -2.27273 27.1706 16.9545 37.2288C12.5548 40.744 7.31347 42.5066 2 42.2578C21.2273 54.8305 44.7273 42.2578 44.7273 13.3407C44.7253 12.6403 44.6681 11.9416 44.5564 11.2536C46.7367 8.72273 48.2754 5.52731 49 2.02529Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    text += '            </svg>';
    text += '        </a>';
    text += '    </div>';
    text += '    <div class="linker">';
    text += '        <!-- Linkedin -->';
    text += '        <a href="https://www.linkedin.com/in/pierre-dolivet/">';
    text += '            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">';
    text += '            <path d="M34.9 17.0708C38.6396 17.0708 42.226 18.6249 44.8703 21.3912C47.5145 24.1575 49 27.9094 49 31.8215V49.0308H39.6V31.8215C39.6 30.5175 39.1049 29.2668 38.2234 28.3447C37.342 27.4226 36.1466 26.9046 34.9 26.9046C33.6535 26.9046 32.4581 27.4226 31.5766 28.3447C30.6952 29.2668 30.2 30.5175 30.2 31.8215V49.0308H20.8V31.8215C20.8 27.9094 22.2856 24.1575 24.9298 21.3912C27.5741 18.6249 31.1605 17.0708 34.9 17.0708Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    text += '            <path d="M11.4 19.5292H2V49.0307H11.4V19.5292Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    text += '            <path d="M6.7 12.1538C9.29574 12.1538 11.4 9.95241 11.4 7.23687C11.4 4.52133 9.29574 2.31995 6.7 2.31995C4.10426 2.31995 2 4.52133 2 7.23687C2 9.95241 4.10426 12.1538 6.7 12.1538Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    text += '            </svg>';
    text += '        </a>';
    text += '    </div>';
    text += '    <div class="linker">';
    text += '        <!-- Dribble -->';
    text += '        <a href="https://dribbble.com/PierreDodo">';
    text += '            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">';
    text += '            <path d="M26 0C11.6634 0 0 11.6634 0 25.9997C0 40.336 11.6634 51.9994 26 51.9994C40.3366 51.9994 52 40.336 52 25.9997C52 11.6634 40.3366 0 26 0ZM42.9431 12.2621C45.862 15.855 47.659 20.3899 47.8085 25.3335C42.4016 24.2141 37.5056 24.3455 33.1836 25.1929C32.401 23.3628 31.5909 21.6192 30.7732 19.9714C35.4802 17.9437 39.5779 15.3538 42.9431 12.2621ZM40.0143 9.28534C36.6738 12.3344 32.8026 14.592 28.8387 16.2588C25.9293 10.9385 23.1457 6.932 21.45 4.65519C22.9183 4.34238 24.4398 4.17456 26 4.17456C31.3315 4.17456 36.2199 6.09876 40.0143 9.28534ZM17.2337 6.0186C18.5142 7.67785 21.5641 11.8324 24.8403 17.7433C16.6064 20.4258 8.61685 20.8778 4.77765 20.9198C6.37789 14.235 11.0592 8.73819 17.2337 6.0186ZM4.19738 25.105C4.23857 25.105 4.27837 25.1053 4.32039 25.1053C6.97319 25.1053 11.8335 24.9269 17.5554 23.8835C20.8199 23.2882 23.9155 22.487 26.8202 21.494C27.5763 23.001 28.328 24.5907 29.0569 26.2569C24.9898 27.5663 21.5599 29.4504 18.8431 31.3212C14.2873 34.4585 11.0957 37.9392 9.35296 40.0914C6.12631 36.2861 4.17456 31.3679 4.17456 25.9997C4.17456 25.6997 4.18514 25.4022 4.19738 25.105ZM12.3612 43.0205C13.8615 41.1314 16.9153 37.6929 21.3328 34.6759C24.3349 32.6253 27.4408 31.1019 30.6382 30.1019C32.4934 34.9105 34.0772 40.2236 35.0215 45.8651C32.2696 47.1197 29.2166 47.8249 26 47.8249C20.8425 47.8249 16.1004 46.0229 12.3612 43.0205ZM38.8621 43.6172C37.8889 38.436 36.4375 33.5643 34.7596 29.112C38.8869 28.4157 43.1524 28.5593 47.5335 29.5434C46.5887 35.3015 43.3845 40.3065 38.8621 43.6172Z" fill="white"/>';
    text += '            </svg>';
    text += '        </a>';
    text += '    </div>';
    text += '    <div class="linker">';
    text += '        <!-- Github -->';
    text += '        <a href="https://github.com/PierreWZK">';
    text += '            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="55" viewBox="0 0 51 55" fill="none">';
    text += '            <path d="M18.8718 45.5178C6.82051 49.1389 6.82051 39.4827 2 38.2756M35.7436 52.76V43.4176C35.834 42.2665 35.6787 41.1093 35.2881 40.0229C34.8974 38.9365 34.2804 37.9459 33.4779 37.1169C41.0462 36.272 49 33.3992 49 20.2184C48.9994 16.848 47.7049 13.6068 45.3846 11.1657C46.4833 8.21693 46.4057 4.95757 45.1677 2.06468C45.1677 2.06468 42.3236 1.21976 35.7436 5.63749C30.2193 4.13793 24.3961 4.13793 18.8718 5.63749C12.2918 1.21976 9.44769 2.06468 9.44769 2.06468C8.20973 4.95757 8.13204 8.21693 9.23077 11.1657C6.89313 13.6249 5.59736 16.8954 5.61538 20.2909C5.61538 33.3751 13.5692 36.2478 21.1374 37.1893C20.3445 38.01 19.7329 38.9887 19.3425 40.0618C18.9522 41.1349 18.7918 42.2783 18.8718 43.4176V52.76" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    text += '            </svg>';
    text += '        </a>';
    text += '    </div>';
    text += '</div>';
    text += '<!-- Barre links by Pierr inspired to brittanychiang.com -->';
    text += '<!-- ================================= -->';
    text += '<!-- Barre email by Pierr inspired to brittanychiang.com -->';
    text += '<div id="mailNavFixed">';
    text += '    <div class="line"></div>';
    text += '    <div class="mail"><a href="/contact/">pierredolivet@live.fr</a></div>';
    text += '</div>';
    text += '<!-- Barre email by Pierr inspired to brittanychiang.com -->';
    $("body").prepend(text);
}

function showNav(showNav) {
    console.log(showNav)
    switch (showNav) {
        case true:
            $('#navigation').css('height', 'var(--height-navigateur)');
            break;
            case false:
                $('#navigation').css('height', '0');
            break;
        default:
            break;
    }
    
}