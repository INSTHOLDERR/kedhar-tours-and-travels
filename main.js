document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper', {
 
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
  
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});
