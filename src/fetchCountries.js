import Notiflix from 'notiflix';

export function fetchCountries(name) {
  return (
    fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      // .then(data => console.log(data))
      .catch(() => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
      })
  );
}

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
