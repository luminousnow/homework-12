import debounce from 'lodash.debounce';
import './scss/style.scss';
import getCountry from './js/get-country.by-name';
import getRefs from './js/get-refs';
import getMarkup from './js/get-markup';

const refs = getRefs();

// слухає інпут
refs.countryInputField.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(evt) {
  // відміняє перезавантаження сторінки
  evt.preventDefault();

  const inputValue = refs.countryInputField.value;

  // отримує json, рендерить розмітку на сторінку
  getCountry(inputValue).then(getMarkup);
}
