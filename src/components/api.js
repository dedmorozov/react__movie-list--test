const BASE_URL = 'http://api.tvmaze.com';

export function request(url) {
  return fetch(`${BASE_URL}${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
    .then(result => {
      console.log(result[145].id);
      return result;
    });
}

// export async function getShow(showId) {
//   const show = await request(`/schedule/${showId}`);

//   return show;
// }
