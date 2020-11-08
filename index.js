import './src/scss/style.scss';
import countryCardTpl from './src/templates/country.hbs';

const refs = {
  textField: document.querySelector('.text'),
};

// console.log(countryCardTpl);

const params = getCountryByName('ukraine');

function getCountryByName(countryName) {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => {
      // console.log(response.json());
      return response.json();
    })
    .then(countryData => {
      console.log(countryData);
      const markup = countryCardTpl(countryData);
      return markup;
    });
}

// markup(params);

// function markup(params) {
//   return (markup = countryCardTpl(params));
// }

// console.log(getCountryByName('ukraine'));
