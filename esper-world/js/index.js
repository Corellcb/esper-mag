function loadApp() {

    // Create the flipbook

    $('.flipbook').turn({
        // Width

        width: 922,

        // Height

        height: 600,

        // Elevation

        elevation: 0,

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

// Load the HTML4 version if there's not CSS transform

yepnope({
    test: Modernizr.csstransforms,
    yep: ['../../lib/turn.js'],
    nope: ['../../lib/turn.html4.min.js'],
    both: ['css/basic.css'],
    complete: loadApp
});