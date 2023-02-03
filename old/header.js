//! ANCIENNE NAV
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