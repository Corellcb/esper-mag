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
                    // Hide embed and red-arrow on every page turn
                    $('.embed-container').css('display', 'none');
                    $('.tute-box').css('display', 'none')
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

            width: 634,

            // Height

            height: 825,

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
                turning: () => {
                    $('.embed-container').css('display', 'none');
                },

                turned: (event, page) => {
                    page === 4 ? $('.embed-container').css('display', 'inline-block') : $('.embed-container').css('display', 'none');
                }
            }


        });

        // Remove empty pages for single page display on mobile version of app
        $('.flipbook').turn('removePage', 2);
        $('.flipbook').turn('removePage', 4);
        $('.flipbook').turn('removePage', 4);
    }

    // Checking for mobile or desktop
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? loadMobileApp() : loadApp();
});

// handling table of contents buttons
const pageSkip = (page) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if( page === 4) {
            $(".flipbook").turn("page", 3);
        }
        if( page === 6) {
            $(".flipbook").turn("page", 4);
        }
        if( page === 8) {
            $(".flipbook").turn("page", 6);
        }
    } else {
        $(".flipbook").turn("page", page);
    }
}

// adding onClick to the modal background so you can click out
$('.modal-bg').on('click', () => {
    $('.modal-bg').hide();
});

let modalCounter = 0;

const showModal = (value) => {
    $('.modal-bg').show();
    modalCounter = value;
    $('#modal-img').attr('src', "./pics/gallery/" + modalCounter + ".jpg");
}

const handleChange = (direction) => {
    modalCounter += direction;
    showModal(modalCounter);
}