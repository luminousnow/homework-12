// приймає json --> перевіряє масив по умові --> рендерить розмітку по шаблону з отриманих даних
import countryCardTpl from '../templates/country-card.hbs';
import countryListTpl from '../templates/country-list.hbs';
import getRefs from '../js/get-refs';

const refs = getRefs();

export default function getMarkup(countryData) {
  if (countryData.length > 10) {
    console.log('в списку більше 10 країн. плагин pnotify');
    refs.textField.innerHTML = '';
  } else if (countryData.length >= 2 && countryData.length <= 10) {
    const render = countryListTpl(countryData);
    refs.textField.innerHTML = render;
  } else {
    const render = countryCardTpl(countryData);
    refs.textField.innerHTML = render;
  }
}
