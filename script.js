const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.querySelector("#countrySearch");

const getCountry = (country) => {
  let url = "https://restcountries.eu/rest/v2/name/"
  const request = new XMLHttpRequest();
  request.open('GET', url + country);
  request.send();
request.responseType = 'json';
request.onreadystatechange = () => {
  if (request.readyState === XMLHttpRequest.DONE){
    //const [data] = request.response;
    const data = request.response[0];
    console.log(request.response)
    renderCountry(data);
    console.log(data);
    
  }
}
}
// btn.addEventListener ('click', getCountry);
btn.addEventListener ('click', displayCountries);
const getCountryAndNeighbour = (country) => {
  let url = "https://restcountries.eu/rest/v2/name/"
  let alpha = "https://restcountries.eu/rest/v2/alpha/"
  
  fetch(url + country).then(response => response.json())
  .then(jsonResponse => {
    renderCountry(jsonResponse[0])
    console.log(jsonResponse[0].borders)

    for(let i=0;i<jsonResponse[0].borders.length;i++){
        var neighbor = jsonResponse[0].borders[i];
        fetch(alpha + neighbor).then(response => response.json())
         .then(jsonResponse => {renderCountry(jsonResponse)});
        }
    });
}