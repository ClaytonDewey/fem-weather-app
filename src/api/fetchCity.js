export const fetchCity = async ({ queryKey, signal }) => {
  // queryKey[1] will contain our search term
  const [_key, city] = queryKey;

  if (!city) return null; // nothing to search yet

  const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
  url.searchParams.set('name', city);
  // optional: limit number of results and set language
  url.searchParams.set('count', '10');
  url.searchParams.set('language', 'en');
  url.searchParams.set('format', 'json');

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) throw new Error('City lookup failed');
  return res.json(); // response includes a "results" array
};
