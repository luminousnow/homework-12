import debounce from 'lodash.debounce';
import './scss/style.scss';
import countryCardTpl from './templates/country.hbs';

import getCountryByName from './js/fetch-country-by-name';
import getRefs from './js/getRefs';

const refs = getRefs();

// слухає інпут
refs.countryInputField.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(evt) {
  // відміняє перезавантаження сторінки
  evt.preventDefault();

  const inputValue = refs.countryInputField.value;
  const inputField = evt.currentTarget;

  // отримує json, рендерить розмітку на сторінку
  getCountryByName(inputValue).then(renderCountryCard);
}

// рендерить розмітку по шаблону з отриманих даних
function renderCountryCard(countryData) {
  const markup = countryCardTpl(countryData);
  refs.textField.innerHTML = markup;
}
