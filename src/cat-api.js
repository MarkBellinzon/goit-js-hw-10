const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_ora2yenLsClLubC7y9jHRX2GNIKNmEQ4tjX4Z6DOmTttdgrVgs4IExV6MTPj6mPp';

//api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&key=live_ora2yenLsClLubC7y9jHRX2GNIKNmEQ4tjX4Z6DOmTttdgrVgs4IExV6MTPj6mPp
function fetchBreeds() {
  return fetch(
    `${BASE_URL}/breeds?api_key=${API_KEY}&origin&wikipedia_url&life_span`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}&origin&wikipedia_url&life_span`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}
export { fetchBreeds, fetchCatByBreed };
