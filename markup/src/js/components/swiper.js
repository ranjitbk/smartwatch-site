import Swiper from "swiper/swiper-bundle.js";

export default function initSwiper() {
    var productSlider = new Swiper(".product-slider", {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 450,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 25,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });

    var testimonialSlider = new Swiper(".testimonial-slider", {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 450,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 25,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
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

