$(document).ready(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();


// Sharer
    $('#facebook').on('click', function (purl, ptitle, pimg, text) {
        var url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent('Детский массаж.');
        url += '&p[summary]=' + encodeURIComponent('Массаж для грудничков и деток.');
        url += '&p[url]=' + encodeURIComponent('http://massage-baby.com.ua');
        url += '&p[images][0]=' + encodeURIComponent('http://massage-baby.com.ua/img/background2.jpg');
        popup(url);

    });

    $('#twitter').on('click', function (purl, ptitle) {
        var url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(ptitle);
        url += '&url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        popup(url);
    });

    function popup(url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }

    //Scroll JS
    //   var links = document.querySelectorAll('#menu a');
       // var  p = links[1].getAttribute('href');

        // links.onclick = function (elmt, e) {
        //     e.preventDefault();
        //     var id = this.getAttribute("href");
        //     var top = id.offsetTop;
        //     console.log(top);
        //
        //
        //  };


    $("#menu").on("click", "a:not(.intro)", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            point = $(id).offset().top;
        $('body, html').animate({
            scrollTop: point
        }, 2000);
    });
    
    // Animation of top phrase
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('#back-top a').click(function () {
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


