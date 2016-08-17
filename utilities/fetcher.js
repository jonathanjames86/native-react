export function get (url) {
  return fetch (url)
  .then((response) => response.json())
}

export function searchFor(query) {
  const requestUrl = (
    'myurl.com'
  );

  return get(requestUrl)
  .then((res) => {
    const artists = res.artists ? res.artists.items : [];
    return artists;
  });
}
