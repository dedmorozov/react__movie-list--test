const BASE_URL = 'http://api.tvmaze.com';

function request(url) {
  return fetch(`${BASE_URL}${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
    .then(result => result.data);
}

export async function getShow(showId) {
  const show = await request(`/shows/${showId}`);

  return show;
}
