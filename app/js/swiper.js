const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        delay: 2500,
    },
    speed: 1000,
    spaceBetween: 119,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Slider per view
    breakpoints: {
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },

        800: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        }
    }
    
  });
  