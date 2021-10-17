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
    if (s5 == url + "assets/img/star0.png") {
    document.getElementById("s1").src = "assets/img/star1.png";
    document.getElementById("s2").src = "assets/img/star1.png";
    document.getElementById("s3").src = "assets/img/star1.png";
    document.getElementById("s4").src = "assets/img/star1.png";
    document.getElementById("s5").src = "assets/img/star1.png";
    avaliacao = 5;
    } else {
    document.getElementById("s1").src = "assets/img/star1.png";
    document.getElementById("s2").src = "assets/img/star1.png";
    document.getElementById("s3").src = "assets/img/star1.png";
    document.getElementById("s4").src = "assets/img/star1.png";
    document.getElementById("s5").src = "assets/img/star0.png";
    avaliacao = 4;
  }}
  
  //ESTRELA 4
  if (estrela == 4){ 
    if (s4 == url + "assets/img/star0.png") {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star1.png";
      document.getElementById("s3").src = "assets/img/star1.png";
      document.getElementById("s4").src = "assets/img/star1.png";
      document.getElementById("s5").src = "assets/img/star0.png";
    avaliacao = 4;
    } else {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star1.png";
      document.getElementById("s3").src = "assets/img/star1.png";
      document.getElementById("s4").src = "assets/img/star0.png";
      document.getElementById("s5").src = "assets/img/star0.png";
    avaliacao = 3;
  }}
  
  //ESTRELA 3
  if (estrela == 3){ 
    if (s3 == url + "assets/img/star0.png") {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star1.png";
      document.getElementById("s3").src = "assets/img/star1.png";
      document.getElementById("s4").src = "assets/img/star0.png";
      document.getElementById("s5").src = "assets/img/star0.png";
    avaliacao = 3;
    } else {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star1.png";
      document.getElementById("s3").src = "assets/img/star0.png";
      document.getElementById("s4").src = "assets/img/star0.png";
      document.getElementById("s5").src = "assets/img/star0.png";
    avaliacao = 2;
  }}
  
  //ESTRELA 2
  if (estrela == 2){ 
    if (s2 == url + "assets/img/star0.png") {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star1.png";
      document.getElementById("s3").src = "assets/img/star0.png";
      document.getElementById("s4").src = "assets/img/star0.png";
      document.getElementById("s5").src = "assets/img/star0.png";
    avaliacao = 2;
    } else {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star0.png";
      document.getElementById("s3").src = "assets/img/star0.png";
      document.getElementById("s4").src = "assets/img/star0.png";
      document.getElementById("s5").src = "assets/img/star0.png";
    avaliacao = 1;
  }}
  
  //ESTRELA 1
  if (estrela == 1){ 
    if (s1 == url + "assets/img/star0.png") {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star0.png";
      document.getElementById("s3").src = "assets/img/star0.png";
      document.getElementById("s4").src = "assets/img/star0.png";
      document.getElementById("s5").src = "assets/img/star0.png";
    avaliacao = 1;
    } else {
      document.getElementById("s1").src = "assets/img/star0.png";
      document.getElementById("s2").src = "assets/img/star0.png";
      document.getElementById("s3").src = "assets/img/star0.png";
      document.getElementById("s4").src = "assets/img/star0.png";
      document.getElementById("s5").src = "assets/img/star0.png";
    avaliacao = 0;
  }
  }
  
  document.getElementById('rating').value = avaliacao;
  
}

// registro de títulos
const Storage = {
  get(){
    return JSON.parse(localStorage.getItem("gist:registrations")) || []
  },
  set(registrations){
    localStorage.setItem("gist:registrations", JSON.stringify(registrations))
  }
}

const Registration = {
  all: Storage.get(),
  add(registration){
    Registration.all.push(registration)

    App.reload()
  },
  remove(index){
    var radio = document.getElementsByName("filter");
    for(let i = 0; i < radio.length; i++){
      radio[i].checked = false;
    }
    App.reload()

    Registration.all.splice(index, 1)

    App.reload()
  }
}

const Filters = {
  list: Registration.all,
  recent(list){
    var aux

    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list.indexOf(list[i]) > list.indexOf(list[j])) {
          aux = list[i]
          list[i] = list[j]
          list[j] = aux
        }
      }
    }
    
    return list
  },
  better(list){
    var aux
    
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[i].rating > list[j].rating) {
          aux = list[i]
          list[i] = list[j]
          list[j] = aux
        }
      }
    }
    
    return list
  },
  worse(list){
    var aux
    
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[i].rating < list[j].rating) {
          aux = list[i]
          list[i] = list[j]
          list[j] = aux
        }
      }
    }
    
    return list
  }
}

const DOM = {
  registrationsContainer: document.querySelector('#general'),
  addRegistration(registration, index){
    const div = document.createElement('div')
    div.innerHTML = DOM.innerHTMLRegistration(registration)

    DOM.registrationsContainer.appendChild(div)
  },
  innerHTMLRegistration(registration){
    var stars = ``;

    switch (registration.rating) {
      case '0':
        stars = `
        <div class="rating">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
        </div>`
        break;
      case '1':
        stars = `
        <div class="rating">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
        </div>`
        break;
      case '2':
        stars = `
        <div class="rating">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
        </div>`
        break;
      case '3':
        stars = `
        <div class="rating">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
        </div>`
        break;
      case '4':
        stars = `
        <div class="rating">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star0.png" alt="Estrela de avaliação">
        </div>`
        break;
      case '5':
        stars = `
        <div class="rating">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
          <img src="assets/img/star1.png" alt="Estrela de avaliação">
        </div>`
        break;
      default:
        break;
    }
    
    const html = `
    <li>
      <a href="#${Registration.all.indexOf(registration)}">
        <img class=detalhes src="${registration.banner}">
        <p class=titulo>${registration.title}</p>
      </a>
    </li>
    
    <div id="${Registration.all.indexOf(registration)}" class="popup">
      <div class="cartaz3 feedback">
        <a href="#filmes" class="btn-close" id="close"><strong>x</strong></a>
        <div>
          <img src="${registration.banner}" alt="">
          <h4>${registration.title}</h4>
          ${stars}
          <p>${registration.comment}</p>
          <div class="options">
            <button id="del" onclick="Registration.remove(${Registration.all.indexOf(registration)})">Deletar</button>
          </div>
        </div>
      </div>
    </div>`

    return html
  },
  clearRegistrations(){
    DOM.registrationsContainer.innerHTML = ""
  }
}

const Form = {
  title: document.querySelector('input#title'),
  banner: document.querySelector('input#banner'),
  rating: document.querySelector('input#rating'),
  comment: document.querySelector('textarea#comment'),
  getValues(){
    return{
      title: Form.title.value,
      banner: Form.banner.value,
      rating: Form.rating.value,
      comment: Form.comment.value
    }
  },
  validateFields(){
    const {title, banner, rating, comment} = Form.getValues()

    if(title.trim() === "" || banner.trim() === "" || rating.trim() === ""){
      throw new Error("Por favor, preencha todos os campos com *.")
    }
  },
  saveRegistration(registration){
    Registration.add(registration)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Registro concluído',
      timer: 1500
    })
  },
  clearFields(){
    Form.title.value = ""
    Form.banner.value = ""
    Form.rating.value = ""
    Form.comment.value = ""
    
    document.getElementById("s1").src = "assets/img/star0.png";
    document.getElementById("s2").src = "assets/img/star0.png";
    document.getElementById("s3").src = "assets/img/star0.png";
    document.getElementById("s4").src = "assets/img/star0.png";
    document.getElementById("s5").src = "assets/img/star0.png";
  },
  submit(event){
    event.preventDefault()

    try {
      Form.validateFields()
      const registration = Form.getValues()
      Form.saveRegistration(registration)

      Form.clearFields()

      Modal.close()
    } catch (error) {
      Swal.fire({
        text: error.message,
        confirmButtonColor: '#6d68ac'
      })
    }
  }
}

const Search = {
  findRegistration(){
    var input, filtro, menu, menuItens, links;
    input = document.getElementById("busca");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("general");
    menuItens = menu.getElementsByTagName("li");

    for (var i = 0; i < menuItens.length; i++) {
      links = menuItens[i].getElementsByTagName("a")[0];
      if (links.innerHTML.toUpperCase().indexOf(filtro) > -1) {
        menuItens[i].style.display = "";
      }
      else{
        menuItens[i].style.display = "none";
      }
    }
  }
}

const App = {
  init(){
    var list = Registration.all

    list.forEach(registration => {
      DOM.addRegistration(registration)
    })
    
    Storage.set(Registration.all)
  },
  reload(){
    DOM.clearRegistrations()

    if(document.querySelector('#recente').checked){
      App.recent()
    } else if(document.querySelector('#melhor').checked){
      App.better()
    } else if(document.querySelector('#pior').checked){
      App.worse()
    } else{
      App.init()
    }
  },
  recent(){
    var list = Filters.recent(Registration.all)
    list.forEach(registration => {
      DOM.addRegistration(registration)
    })
    list = Filters.recent(Registration.all)
  },
  better(){
    var list = Filters.better(Registration.all)
    list.forEach(registration => {
      DOM.addRegistration(registration)
    })
    list = Filters.better(Registration.all)
  },
  worse(){
    var list = Filters.worse(Registration.all)
    list.forEach(registration => {
      DOM.addRegistration(registration)
    })
    list = Filters.worse(Registration.all)
  }
}

App.init()