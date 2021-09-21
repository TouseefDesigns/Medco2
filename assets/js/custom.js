!(function($){
  "use strict";

/*===========================
====== Sticky Navbar =======
=============================*/
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


/*===========================
====== Porfolio Filter ======
=============================*/
$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.filter').show('1000');
    }
    else {
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');
    }
// active
    $(".filter-button").removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.addClass('active');
    }
  });
});



//======================
    // Team Section
    //======================


    $(".team-carousel").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      smartSpeed: 1500,
      nav: false,
      dots: false,
      autoplayTimeout:5000,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          768: {
              items: 2
          },
          1000: {
              items: 3
          }
      }
  });

/*===========================
=== Testimonial Carousel ====
=============================*/
$(document).ready(function (){
  $('#testimonial-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay:true ,
    smartSpeed: 1500,
    nav: true,
    dots: false,
    autoplayTimeout:5000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        991: {
            items: 1
        },
        1200: {
            items: 1
        },
        1920: {
            items: 1
        }
    }
});
  });


    //======================
    // Partner slider carousel
    //======================


    $(".partner-logo").owlCarousel({
      loop: true,
      margin: 30,
      smartSpeed: 1500,
      autoplay: true,
      nav: false,
      dots: false,
      responsive: {
          0: {
              items: 2
          },
          600: {
              items: 3
          },
          768: {
              items: 4
          },
          1000: {
              items: 5
          }
      }
  });

    //======================
    // Appointment slider carousel
    //======================


    $(".appointment-logo").owlCarousel({
      loop: true,
      margin: 30,
      smartSpeed: 1500,
      autoplay: true,
      nav: false,
      dots: false,
      responsive: {
          0: {
              items: 2
          },
          600: {
              items: 3
          },
          768: {
              items: 3
          },
          1000: {
              items: 3
          }
      }
  });



/*===========================
==== Main Banner Carousel ===
=============================*/

$(document).ready(function() {
  $('select').niceSelect();
});
$('#main-banner-carousel').owlCarousel({
  loop: true,
  dots: false,
  autoplay:true,
  smartSpeed: 2000,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive: {
      0: {
          items: 1
      }
  }
});
/*===========================
====== Porfolio Filter ======
=============================*/
// $(document).ready(function () {
//   $(".filter-button").click(function () {
//     var value = $(this).attr('data-filter');
//     if (value == "all") {
//       $('.filter').show('1000');
//     }
//     else {
//       $(".filter").not('.' + value).hide('3000');
//       $('.filter').filter('.' + value).show('3000');
//     }
// active
//     $(".filter-button").removeClass('active');
//     var $this = $(this);
//     if (!$this.hasClass('active')) {
//       $this.addClass('active');
//     }
//   });
// });
/*===========================
======= Stat Counter ========
// =============================*/
// $('.counter').counterUp({
//   delay: 10,
//   time: 1000
// });
/*===========================
======== PopUp Video ========
=============================*/
$(document).ready(function() {
  $('.venobox').venobox({
    'share': false
  });
  });
/*===========================
=== Testimonial Carousel ====
=============================*/
// $(document).ready(function (){
//   $('#testimonial-carousel').owlCarousel({
//     loop: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         768: {
//             items: 1
//         },
//         991: {
//             items: 1
//         },
//         1200: {
//             items: 1
//         },
//         1920: {
//             items: 1
//         }
//     }
// });
//   });






/*===========================
======= Stat Counter ========
=============================*/
$('.counter').counterUp({
  delay: 10,
  time: 1000
});



(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


})(jQuery);