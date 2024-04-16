var swiper = new Swiper(".mySwiper", {
     slidesPerView: 7,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
   navigation: {
      nextEl: '.next',
      prevEl: '.prev'
    },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 70,
    modifier: 2.5,
    slideShadows: "boolean",
  },
//   autoplay:{

//     delay:3000,
//     disableOnInteraction:false,
//   }

});