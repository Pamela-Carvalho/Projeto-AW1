/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})

const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    // scroll é maior que a altura do header
    backToTopButton.classList.add('show')
  } else {
    // menor que a altura do header
    backToTopButton.classList.remove('show')
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home h2, #home p, #home .btn,
  #about h3, #about img, #about p, #about nav,
  #skills h3, #skills .cards, #skills .tools,
  #portfolio h3, #portfolio article.statistic, #portfolio .statistic div p,
  #contact h3, #contact
  `,
  { interval: 100 }
)

// dark/light mode
function mode(){
  var estilo = document.querySelector('#style');

  if(document.querySelector('#mode').checked){
    console.log("on")
    estilo.href = "css/style-light.css"
  }
  else{
    console.log("off")
    estilo.href = "css/style.css"
  }
}

// swiper portfolio
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,

  autoplay: {
    delay: 5000,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
})