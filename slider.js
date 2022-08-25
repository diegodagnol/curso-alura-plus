$(document).ready(function(){
    const slider = $(".slider");
    slider.slick({
        infinite: false,
        arrows: false,
        vertical: true,
        dots: true,
        speed: 1200,
        cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)'
    });


    slider.on('wheel', (function(e) {
        e.preventDefault();
      
        if (e.originalEvent.deltaY > 0) {
          $(this).slick('slickNext');
        
        } else {
          $(this).slick('slickPrev');
        }
      }));
})

