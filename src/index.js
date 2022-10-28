import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', handleInput);

function handleInput() {
  fetchCountries(input.value).then(countries => renderCountries(countries));
  // console.log(input.value);
}

function fetchCountries(name) {
  return (
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      // .then(data => console.log(data))
      .catch(error => {
        console.log(error);
      })
  );
}

function renderCountries(countries) {
  // console.log(JSON.stringify(countries));
  const markup = countries.map(country => country.name.common);
  console.log(markup);
}
