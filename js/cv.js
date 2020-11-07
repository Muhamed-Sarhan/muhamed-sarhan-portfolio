


function onClickMenu(){
    document.getElementById('menu-bar').classList.toggle('change');
    document.getElementById('nav').classList.toggle('change-btn');
}

document.getElementById('button-pop').addEventListener('click' , function(){
   document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.close-popup').addEventListener('click' , function(){
  document.querySelector('.bg-modal').style.display = 'none';
});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
        /*
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      */
    navigation:{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
  });
  
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth,#autoWidth2').removeClass('cS-hidden');
        } 
    });  
  });

  var typed = new Typed('.title', {
    
    strings: ['Hi.. ^1000',"I<span class='colonx'> ' </span>m <strong class='musa'> Muhamed Sarhan.</strong>^1600", "I <span class='colony'>' </span> m a <strong class='jobc'> Front End Developer.</strong>^1600","<strong class='musa'>And This is </strong><strong class='jobc'> my Portfolio...</strong>^1700"],
    typeSpeed: 50,
    loop:true,
    backSpeed: 100,
    showCursor: false,
  });
$(document).ready(function(){
   $('#iiccoonn').click(function(){
    $('ul').toggleClass('show');
   });
});

  jQuery(document).ready(function(){
      "use strict"
      $('.hero').ripples({
        dropRadius: 13,
        perturbance: 0.01,
        
      });
      
        
       
    
  })