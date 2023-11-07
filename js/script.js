$(document).ready(function() {
    const menu = $('#menu-btn');
    const navbar = $('.navbar');

    menu.on('click', function() {
        menu.toggleClass('fa-times');
        navbar.toggleClass('active');
    });

    $(window).on('scroll', function() {
        menu.removeClass('fa-times');
        navbar.removeClass('active');
    });

    

    $('.image-slider img').on('click', function() {
        var src = $(this).attr('src');
        $('.main-home-image').attr('src', src);
    });

    const swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            }
        }
    });


    const sound = new Audio("js/dollar_down_spin_13227.mp3");
    document.querySelector('#play-button').addEventListener('click', function() {
        sound.play(); 
    });

});
