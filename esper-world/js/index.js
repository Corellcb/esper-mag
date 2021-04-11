$(document).ready(function () {
    function loadApp() {

        // Create the flipbook

        $('.flipbook').turn({
            // Width

            width: 922,

            // Height

            height: 600,

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

    loadApp();
});
