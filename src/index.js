import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import './css/styles.css';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

breedSelect.addEventListener('change', onBreedSelect);

function onBreedSelect(evt) {
  const breedId = evt.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => {
      const { url, breeds, origin, wikipedia_url, life_span } = data[0];

      catInfo.innerHTML = `<div class="box-img">
      <img src="${url}" 
      alt="${breeds[0].name}"
      width="600"/>
      </div>
      <div class="box">
      <h1>${breeds[0].name}</h1>
      <p>${breeds[0].description}</p>
      <p><b>Temperament:</b> ${breeds[0].temperament}</p>
      <p><b>Country:</b> ${breeds[0].origin}</p>
      <p><b>Age:</b> ${breeds[0].life_span}"</p>
      <p><b>Wikipedia:</b>   <a href="${breeds[0].wikipedia_url}">wiki</a></p>
      </div>`;
      catInfo.classList.remove('is-hidden');
    })
    .catch(onFetchError);
}

let arrBreedsId = [];
fetchBreeds()
  .then(data => {
    data.forEach(element => {
      arrBreedsId.push({ text: element.name, value: element.id });
    });
    new SlimSelect({
      select: breedSelect,
      data: arrBreedsId,
    });
  })
  .catch(onFetchError);

function onFetchError(error) {
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page or select another cat breed!'
  );
}
