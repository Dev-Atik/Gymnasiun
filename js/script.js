$(function(){
    // banner slider start 
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        arrows: false,
        fade: true,
      });
    //   banner slider end

    // team slider start 
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: false,
        fade: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          }
        ]
      });
    //   team slider end

    // Testimonial slider start 
    $('.test-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      });
    //   Testimonial slider end

    // counter up area start
    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
    // counter up area end
           // mixitup  area start
           var containerEl = document.querySelector('.mixit-items');

           var mixer = mixitup(containerEl);
           // mixitup area end
       // Testimonial slider start 
       $('.brand-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      });
    //   Testimonial slider end       
    
    
    // menu fixed area start
    $(window).on('scroll', function() {
      var sticky = $(this).scrollTop();
      if (sticky > 50) {
        $('#navbar').addClass('sticky-menu');
      } else {
        $('#navbar').removeClass('sticky-menu');
      }
    });
    // menu fixed area end

    // sidebar area start
    $('.show-side').on('click', function(){
      $('.sidebar').css('left','0')
    });
    $('.go-side').on('click', function(){
      $('.sidebar').css('left','-100%')
    });
    // sidebar area end
})

 
