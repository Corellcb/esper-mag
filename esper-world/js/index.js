$(document).ready(function () {

    function loadApp() {

        // Create the flipbook

        $('.flipbook').turn({
            // Width

            width: 1152,

            // Height

            height: 750,

            // Elevation

            elevation: 0,

            // Enable gradients

            gradients: true,

            // Auto center this flipbook

            autoCenter: true,

            // Events

            when: {
                turning: function (event, page, view) {
                    // Hide embed on every page turn
                    $('.embed-container').css('display', 'none');
                },

                turned: function (event, page, view) {
                    // Display embeds when on the visualizer pages
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

            // Show one page at a time
            display: "single",

            // Events
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

        // Remove empty pages for single page display on mobile version of app
        $('.flipbook').turn('removePage', 2);
        $('.flipbook').turn('removePage', 4);
        $('.flipbook').turn('removePage', 4);
    }

    // Checking for mobile or desktop
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        console.log("Mobile");
        loadMobileApp();
    } else {
        console.log("Desktop");
        loadApp();
    }
});

function pageSkip(page) {
    $(".flipbook").turn("page", page);
}
