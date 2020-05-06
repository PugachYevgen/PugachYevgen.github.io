$(function () {


    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            items: 3,
            autoplay: false,
            nav: true,
            margin: 31,
            autoWidth: true,
            navText: "",
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                    nav: false,
                    autoplay: false,
                },
                575: {
                    nav: true
                },
                960: {
                    items: 3,
                    nav: true,
                },
                1000: {
                    items: 3,
                },
            }

        });

    });

});

