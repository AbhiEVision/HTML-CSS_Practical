var swiper = new Swiper(".swiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: false,
    fade: 'true',
    grabCursor: 'true',
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        0: { slidesPerView: 1, }, 
        550: { slidesPerView: 2, }, 
        990: { slidesPerView: 3, }, 
        1400: { slidesPerView: 4, }, 
        1500: { slidesPerView: 5, }, 
        1600: { slidesPerView: 6, },
    },
    });