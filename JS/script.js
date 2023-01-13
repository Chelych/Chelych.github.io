/*$(document).ready(function(){
    $('.h1-hero').fadeIn(1500).removeClass('hidden-heroh1').addClass('come-in-h1');
    $('.hero-btn-container').fadeIn(1500).removeClass('hero-btns-hidden').addClass('come-in-btns');
});
*/
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// oki
function burgerRotate(){
    $('.burger-line1').toggleClass('rotateBurger1');
    $('.burger-line2').toggleClass('rotateBurger2');
    $('.navigation').toggleClass('navigation-active')
    $('.nav-list').toggleClass('navlist-active')
    $('.header-container').toggleClass('header-container-active')
}
// ok
$(window).scroll(function(){
   var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('.header-container').addClass('sticky-header');
        $('.header-row').addClass('sticky-header-row');
        $('.nav-a').addClass('sticky-nav-a');
        $('.social-a').addClass('sticky-social-a');
        $('.logo').addClass('sticky-logo');
        $('.header-wrapper').addClass('header-wrapper-visible');
        $('.list-social').addClass('sticky-list-social');
        $('.burger-line').addClass('sticky-burger-line');
        $('.navigation').addClass('sticky-navigation');
        
    } else {
        $('.header-container').removeClass('sticky-header');
        $('.header-row').removeClass('sticky-header-row');
        $('.nav-a').removeClass('sticky-nav-a');
        $('.social-a').removeClass('sticky-social-a');
        $('.logo').removeClass('sticky-logo');
        $('.header-wrapper').removeClass('header-wrapper-visible');
        $('.list-social').removeClass('sticky-list-social');
        $('.burger-line').removeClass('sticky-burger-line');
        $('.navigation').removeClass('sticky-navigation');
    }
});

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    
    if (scroll >= 550) {
        $('.back-to-top-btn').addClass('back-to-top-btn-visible');
        $('.back-to-top-btn').removeClass('btt-hidden');
    } else {
        $('.back-to-top-btn').removeClass('back-to-top-btn-visible');
    }
});

$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow");
    gsap.from('.col1-hero', {opacity: 0, duration: 1, y: -200})
    
});


$(window).on("load", function(){
    setTimeout(function(){
        $('.pop-up-section').addClass('popup-visible')
    }, 100000);
});



function close_popup(){
  $('.pop-up-section').removeClass('popup-visible');
};



const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light');
});



function showSettings(){
    $('.settingsWindow').addClass('settingsWindowVisible');
};



/*const counters = document.querySelectorAll('.count-h2-number');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        const inc = target / speed;
        
        
        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 10);
           } else {
               count.innerText = target;
           }
    }
    
    updateCount();
});
*/











/*$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
   /* $(window).scroll( function(){
    
        /* Check the location of each desired element */
      /*  $('.app-img').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
         /*   if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
}); */





/*
$('[lang="fr"]').hide();

$('#switch-lang').click(function() {
  $('[lang="fr"]').show();
  $('[lang="en"]').hide();
});


$('#fr').click(function() {
  $('[lang="fr"]').z();
  $('[lang="en"]').hide();
});
 */






/*
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});

*/
/*

gsap.registerPlugin(ScrollTrigger);

gsap.to('.app-img', {
    scrollTrigger: {
        trigger: ".app-img",
        start: "top center"
        toggleActions: "play none none none"
    },
    x: 400,
    rotation: 360,
    duration: 3
}); */
/*

gsap.from('.faq-question', {opacity: 0, duration: 1, x: -50, stagger: 0.6})
gsap.from('.app-img', {opacity: 0, duration: 1, x: -50, stagger: 0.6})*/

