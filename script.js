const navToggle = document.querySelector('.toggle');
const navMenu = document.querySelector('nav .navMenu');
const darkMode = document.querySelector('.darkMode');
const body = document.querySelector('body');
const main = document.querySelector('main');
let bgChg = document.querySelector('.bgChg');

const Slider = () => {
  navMenu.classList.toggle('navSlide');
  navToggle.classList.toggle('toggleX');
  body.classList.toggle('body-scroll-disable');
  main.classList.toggle('nav-main');
};

navToggle.addEventListener("click", Slider)
navMenu.addEventListener("click", Slider);
const bgSwitch = () => {
    bgChg.classList.toggle('bgChgDark');
    darkMode.classList.toggle('darkMode-is-active')
    if (darkMode.classList.contains('darkMode-is-active')) {
      setTimeout(function() {
      darkMode.innerHTML = "Light mode"
      }, 100);
    } else {
      darkMode.innerHTML = "Dark mode"
    }
};
darkMode.addEventListener("click", bgSwitch);



// jquery scroll parallax

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var contact = $('.contact .container-fluid');
  var contactScroll = wScroll/3/6;
  contact.css({
    'transform' : 'translate(0px, '+ contactScroll + '%)'
  });
  if(wScroll >= 3615){
    $('.toggle .togcil').addClass('bg-primary')
  } else {
    $('.toggle .togcil').removeClass('bg-primary');
  }

  console.log(wScroll);
});