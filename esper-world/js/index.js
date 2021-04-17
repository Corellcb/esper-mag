$(document).ready(function () {
    $("button").click( () => {
            $(".flipbook").turn("page", 4);
    })

    function loadApp() {

        // Create the flipbook

        $('.flipbook').turn({
            // Width

            width: 1152,

            // Height

            height: 750,

            // Elevation

            elevation: 40,

            // Enable gradients

            gradients: true,

            // Auto center this flipbook

            autoCenter: true,

            when: {
                turning: function (event, page, view) {
                    $('.embed-container').css('display', 'none');
                },

                turned: function (event, page, view) {
                    console.log(page, view);
                    if (page === 6 || page === 7) {
                        $('.embed-container').css('display', 'inline-block');
                    } else {
                        $('.embed-container').css('display', 'none');
                    }
                }
            }


        });
    }

    function loadMobileApp() {

        // Create the flipbook

        $('.flipbook').turn({
            // Width

            width: 576,

            // Height

            height: 750,

            // Elevation

            elevation: 40,

            // Enable gradients

            gradients: true,

            // Auto center this flipbook

            autoCenter: true,

            display: "single",

            when: {
                turning: function (event, page, view) {
                    $('.embed-container').css('display', 'none');
                },

                turned: function (event, page, view) {
                    console.log(page, view);
                    if (page === 4) {
                        $('.embed-container').css('width', '400px');
                        $('.embed-container').css('display', 'inline-block');
                    } else {
                        $('.embed-container').css('display', 'none');
                    }
                }
            }


        });

        $('.flipbook').turn('removePage', 2);
        $('.flipbook').turn('removePage', 6);
        $('.flipbook').turn('removePage', 5);
    }

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        loadMobileApp();
        console.log("Mobile");
    } else {
        loadApp();
        console.log("Desktop");
    }
});
