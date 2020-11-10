const BASE_URL = 'https://restcountries.eu/rest/v2';

// отримує назву країни, повертає json
export default function getCountryByName(countryName) {
  const requestLink = `${BASE_URL}/name/${countryName}`;

  return fetch(requestLink).then(response => response.json());
}
