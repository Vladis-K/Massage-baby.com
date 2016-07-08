$(document).ready(function(){


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });
})(jQuery);


// Animation of top phrase
$("#animation-1").addClass('animated zoomIn');

$("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
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