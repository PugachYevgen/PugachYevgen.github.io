$(function () {


    $(document).ready(function () {
        $(".news-carousel").owlCarousel({
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

    $(document).ready(function () {
        $(".quote-carousel").owlCarousel({
            loop: true,
            items: 1,
            autoplay: false,
            autoHeight: true,
            nav: true,
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
                    items: 1,
                    nav: true,
                },
                1000: {
                    items: 1,
                },
            }

        });
    });

    $(document).ready(function() {

        $('.wrapper>article').not(':first-of-type').hide();


        $('.wrapper>span').click(function() {

            var findArticle = $(this).next();
            var findWrapper = $(this).closest('.wrapper');

            if (findArticle.is(':visible')) {
                $(this).removeClass('span-active');
                findArticle.slideUp('fast');
                findArticle.removeClass('active');


            }
            else {

                findWrapper.find('>article').slideUp('fast').removeClass('span-active');
                findWrapper.find('>.span-active').not(this).removeClass('span-active');
                findArticle.slideDown('fast');
                findArticle.addClass('active');
                $(this).addClass('span-active');

            }
        });

    });

});

