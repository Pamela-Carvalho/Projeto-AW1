// implementação de API's com axios
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
    axios.get(url)
    .then(response => {
      city.innerHTML = `A temperatura em ${response.data.name} é:`;
      temp.innerHTML = response.data.main.temp;
    })
    .catch(error => {
      console.log(error);
      city.innerHTML = `Oops... não foi possível concluir a operação de tempo.`;
      temp.innerHTML = `-`;
    })
  }

// api viacep: https://viacep.com.br/
inputCep.addEventListener('focusout', event => {
    axios.get(`https://viacep.com.br/ws/${inputCep.value}/json/`)
    .then(response => {
      var cityName = JSON.stringify(response.data.localidade)
      cityName = cityName.replaceAll(`"`, '');
      
      var stateName = JSON.stringify(response.data.uf)
      stateName = stateName.replaceAll(`"`, '');

      setPositionUrl(cityName, stateName);
    })
    .catch(error => {
      console.log(error);
      city.innerHTML = `Oops... não foi possível concluir a operação de cep.`;
      temp.innerHTML = `-`;
    })
});