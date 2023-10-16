const url = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_ora2yenLsClLubC7y9jHRX2GNIKNmEQ4tjX4Z6DOmTttdgrVgs4IExV6MTPj6mPp';

function fetchBreeds() {
  return fetch('${url}/breeds?api_key=${API_KEY}').then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    '${url}/images/search?api_key=${API_KEY}&breed_ids=${breedId}'
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
