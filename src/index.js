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
  // доступ до значення input
  const inputValue = refs.countryInputField.value;

  // перевірка inputValue на наявність даних
  if (!inputValue) {
    refs.textField.innerHTML = '';
    return;
  }
  // отримує json, рендерить розмітку на сторінку
  getCountry(inputValue).then(getMarkup);
}
