import Swiper from "swiper/swiper-bundle.js";

export default function initSwiper() {
    var newsCarousel = new Swiper(".categories-carousel", {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 450,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 0,
                slidesPerView: 4,
                loop: false,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });


    var newsCarousel = new Swiper(".stores-carousel", {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 450,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 40,
                slidesPerView: 3,
                loop: false,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });


    var newsCarousel = new Swiper(".news-carousel", {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 450,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 60,
                slidesPerView: 3,
                loop: false,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var testimonialsCarousel = new Swiper(".testimonials-carousel", {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 450,
        loop: true,
        breakpoints: {
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var newsCarousel = new Swiper(".article-carousel", {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 450,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 40,
                slidesPerView: 3,
                loop: false,
            },
            
            1200: {
                spaceBetween: 60,
                slidesPerView: 3,
            },
            1600: {
                spaceBetween: 93,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const breakpoint = window.matchMedia('(min-width:768px)');

    let mySwiper;

    const breakpointChecker = function () {

        if (breakpoint.matches === true) {

            if (mySwiper !== undefined) mySwiper.destroy(true, true);

            return;
        } else if (breakpoint.matches === false) {
            return enableSwiper();

        }

    };

    const enableSwiper = function () {

        // mySwiper = new Swiper('.categories-carousel', {
        //     slidesPerView: 1,
        //     speed: 600,
        //     loop: true,
        //     pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true,
        //     },
        // });

    };


    breakpoint.addListener(breakpointChecker);

    breakpointChecker();

}

