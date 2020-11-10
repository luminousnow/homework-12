import './scss/style.scss';
import countryCardTpl from './templates/country.hbs';
import debounce from 'lodash.debounce';
import getCountryByName from './js/fetch-country-by-name';

const refs = {
  textField: document.querySelector('.text'),
  countryInputField: document.querySelector('#countryInputField'),
};

// слухає інпут
refs.countryInputField.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(evt) {
  const inputValue = refs.countryInputField.value;

  // вимикає перезавантаження сторінки по замовчуванню
  evt.preventDefault();

  // отримує json, рендерить розмітку на сторінку
  getCountryByName(inputValue).then(renderCountryCard);
}

// рендерить розмітку по шаблону з отриманих даних
function renderCountryCard(countryData) {
  const markup = countryCardTpl(countryData);
  refs.textField.innerHTML = markup;
}
