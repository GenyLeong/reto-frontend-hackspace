var ancho = window.innerWidth;
var altura = window.innerHeight;

// document.addEventListener("DOMContentLoaded", init, false);

// function init() {
//     $(window).on('scroll', function() {
//         var scrollTop = $(window).scrollTop(),
//             elementOffset = $('#video').offset().top,
//             distance = (elementOffset - scrollTop);
//     });
// }

// var video = document.getElementById('video');

function maquina(e, n, a, i) {
    var t = n.length,
        r = document.getElementById(e),
        o = 0,
        s = setInterval(function() {
            r.innerHTML = r.innerHTML.substr(0, r.innerHTML.length - 1) + n.charAt(o) + "_", o >= t ? (clearInterval(s), r.innerHTML = r.innerHTML.substr(0, t), i && i()) : o++
        }, a)
}

(function() {
    $(window).on('load', function() {
            // maquina("maquinas", texto[0], 60)
            $(".progress").hide();
            $("#body-text").delay("slow").fadeIn();
            // $(".intro").delay("fast").fadeIn();
    });
})();

function resize_fondo(){
  var altura = window.innerHeight;
  var intro_altura = document.getElementById('intro')
  intro_altura.style.height = altura + 'px';
}

$(document).ready(function() {
         $('.button-collapse').sideNav({
            closeOnClick: true
        });
        // resize_fondo()
          // var ancho = window.innerWidth;
          // var img_history = $("#img-history").innerHeight()
          // var ct = document.querySelectorAll('[data-attr]')
          // for (var i = 0; i < ct.length; i++) {
          //     ct[i].classList.add("v-center");
          //     if (ancho > 767) {
          //         ct[i].style.height = img_history + "px"
          //     } else {
          //         ct[i].style.height = ""
          //     }
          // }
          $(window).on('scroll resize', function() {
            // resize_fondo()
        });
        $('.smooth').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800);
                    return false;
                }
            }
        });
        $("img.lazy").lazyload({
            effect: "fadeIn",
            threshold: 400
        });
        // $(function() {
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin")
        //         .addTo(controller);
        //
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-1", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin-1")
        //         .addTo(controller);
        //
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-2", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin-2")
        //         .addTo(controller);
        //
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-3", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin-3")
        //         .addTo(controller);
        //
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-4", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin-4")
        //         .addTo(controller);
        //
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-5", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin-5")
        //         .addTo(controller);
        //
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-6", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin-6")
        //         .addTo(controller);
        //
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-7", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin-7")
        //         .addTo(controller);
        //
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-8", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin-8")
        //         .addTo(controller);
        //
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-9", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin-9")
        //         .addTo(controller);
        //
        //     var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-10", duration: 1000, offset: 200, triggerHook: "onCenter" })
        //         .setPin("#pin-10")
        //         .addTo(controller);
        // });
        // $('.popup').click(function(event) {
        //     var width = 650,
        //         height = 450,
        //         left = ($(window).width() - width) / 2,
        //         top = ($(window).height() - height) / 2,
        //         url = this.href,
        //         opts = 'status=1' +
        //         ',width=' + width +
        //         ',height=' + height +
        //         ',top=' + top +
        //         ',left=' + left;
        //     window.open(url, 'twitter', opts);
        //     return false;
        // })
});


window.onload= function() {
    $(".progress").hide();
    $("#body-text").delay("slow").fadeIn();
    $(".intro").delay("fast").fadeIn();
}

// var texto = ["Aquel otoño, los campesinos de la zona baja de Huanta abandonaron sus casas y sus chacras en busca de un lugar para enfrentar el embate terrorista. Hombres, mujeres y hasta adolescentes vigilaron la zona día y noche. Ellos buscaron a Sendero Luminoso y Sendero Luminoso también los buscó. La guerra estaba declarada. Al final de siete años de lucha Huanta quedó libre de presencia senderista. A veinte años de esta gesta, lo único que lamentan es que sus hijos se hayan quedado sin mayor educación. La segunda generación continúa manteniendo vigente el Comité de Autodefensa de Quinrapa, aunque hoy el enemigo ya no sea SL sino la delincuencia común. Jesús Gálvez Ruiz e Isabel Rodríguez Chipana relatan lo que pasó."];
