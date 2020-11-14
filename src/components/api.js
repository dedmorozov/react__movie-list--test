const BASE_URL = 'https://api.tvmaze.com';

export function request(url) {
  return fetch(`${BASE_URL}${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export async function getApi(endpoint) {
  const show = await request(endpoint);

  return show;
}
