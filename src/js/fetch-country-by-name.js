// отримує доступ до введених даних, формує і вертає json
export default function getCountryByName(countryName) {
  const requestLink = 'https://restcountries.eu/rest/v2/name/';

  return fetch(requestLink + countryName).then(response => response.json());
}
