$(document).ready(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    
    // Animation of top phrase
    

        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
              top = $(id).offset().top;
            $('body, html').animate({
              scrollTop: top
            }, 2000);
          });

// Smooth scroll
        $("#back-top").hide();
           $(function () {
           $(window).scroll(function () {
           if ($(this).scrollTop() > 100) {
           $('#back-top').fadeIn();
           } else {
           $('#back-top').fadeOut();
           }
           });
           $('#back-top a').click(function (){
           $('body,html').animate({
           scrollTop: 0
           }, 1400);
           return false;
        });
    });

});

document.addEventListener('DOMContentLoaded', mainSign, false);
function mainSign() {
    var appear = document.getElementById("mainSign");
    appear.className += " animated zoomIn";
};
