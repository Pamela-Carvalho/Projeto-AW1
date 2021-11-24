const inputCep  = document.querySelector('[name=cep]');
const city      = document.querySelector('#city');
const temp      = document.querySelector('span');
const apiKey    = '6df33ebdb798553965a8382723d1f15f';

// api openweather: https://openweathermap.org/current
function setPositionUrl(cityName, stateName) {
    var url;
    
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},br&appid=${apiKey}&units=metric`;
    calculateWeather(url);
}

function calculateWeather(url) {
    fetch(url)
    .then((dados) => {
      return dados.json();
    })
    .then((dados) => {
      city.innerHTML = `A temperatura em ${dados.name} é:`;
      temp.innerHTML = dados.main.temp;
    })
    .catch(error => {
      city.innerHTML = `Oops... não foi possível concluir a operação.`;
      temp.innerHTML = `-`;
    })
  }

// api viacep: https://viacep.com.br/
inputCep.addEventListener('focusout', event => {
    fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
    .then(resposta => resposta.json())
    .then(dados => {
        var cityName = dados.localidade;
        var stateName = dados.uf;
        setPositionUrl(cityName, stateName);
    })
    .catch(error => {
      city.innerHTML = `Oops... não foi possível concluir a operação.`;
      temp.innerHTML = `-`;
    })
});