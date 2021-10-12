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

const Modal = {
  open() {
      document.querySelector('.modal-overlay').classList.add('active')
  },
  close() {
      document.querySelector('.modal-overlay').classList.remove('active')
  }
}

function avaliar(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("index.html");
  url = url[0];
 
  var s1 = document.getElementById("s1").src;
  var s2 = document.getElementById("s2").src;
  var s3 = document.getElementById("s3").src;
  var s4 = document.getElementById("s4").src;
  var s5 = document.getElementById("s5").src;
  var avaliacao = 0;
 
 if (estrela == 5){ 
  if (s5 == url + "img/star0.png") {
  s1.src = "img/star1.png";
  s2.src = "img/star1.png";
  s3.src = "img/star1.png";
  s4.src = "img/star1.png";
  s5.src = "img/star1.png";
  avaliacao = 5;
  } else {
  s1.src = "img/star1.png";
  s2.src = "img/star1.png";
  s3.src = "img/star1.png";
  s4.src = "img/star1.png";
  s5.src = "img/star0.png";
  avaliacao = 4;
 }}
  
  //ESTRELA 4
 if (estrela == 4){ 
  if (s4 == url + "img/star0.png") {
    s1.src = "img/star1.png";
    s2.src = "img/star1.png";
    s3.src = "img/star1.png";
    s4.src = "img/star1.png";
    s5.src = "img/star0.png";
  avaliacao = 4;
  } else {
    s1.src = "img/star1.png";
    s2.src = "img/star1.png";
    s3.src = "img/star1.png";
    s4.src = "img/star0.png";
    s5.src = "img/star0.png";
  avaliacao = 3;
 }}
 
 //ESTRELA 3
 if (estrela == 3){ 
  if (s3 == url + "img/star0.png") {
    s1.src = "img/star1.png";
    s2.src = "img/star1.png";
    s3.src = "img/star1.png";
    s4.src = "img/star0.png";
    s5.src = "img/star0.png";
  avaliacao = 3;
  } else {
    s1.src = "img/star1.png";
    s2.src = "img/star1.png";
    s3.src = "img/star0.png";
    s4.src = "img/star0.png";
    s5.src = "img/star0.png";
  avaliacao = 2;
 }}
  
 //ESTRELA 2
 if (estrela == 2){ 
  if (s2 == url + "img/star0.png") {
    s1.src = "img/star1.png";
    s2.src = "img/star1.png";
    s3.src = "img/star0.png";
    s4.src = "img/star0.png";
    s5.src = "img/star0.png";
  avaliacao = 2;
  } else {
    s1.src = "img/star1.png";
    s2.src = "img/star0.png";
    s3.src = "img/star0.png";
    s4.src = "img/star0.png";
    s5.src = "img/star0.png";
  avaliacao = 1;
 }}
  
  //ESTRELA 1
  if (estrela == 1){ 
    if (s1 == url + "img/star0.png") {
      s1.src = "img/star1.png";
      s2.src = "img/star0.png";
      s3.src = "img/star0.png";
      s4.src = "img/star0.png";
      s5.src = "img/star0.png";
    avaliacao = 1;
    } else {
      s1.src = "img/star0.png";
      s2.src = "img/star0.png";
      s3.src = "img/star0.png";
      s4.src = "img/star0.png";
      s5.src = "img/star0.png";
    avaliacao = 0;
  }
  }
  
  document.getElementById('rating').value = avaliacao;
  
}