export const fetchCity = async ({ queryKey, signal }) => {
  // support many possible queryKey shapes for safety
  let city = null;

  if (Array.isArray(queryKey)) {
    // common pattern: ['citySearch', searchTerm]
    city = queryKey[1];
  } else if (typeof queryKey === 'string') {
    // unlikely from useQuery, but handle it
    city = queryKey;
  } else if (queryKey && typeof queryKey === 'object') {
    // maybe someone passed an object like { name: 'Paris' } or { query: 'Paris' }
    city = queryKey.name || queryKey.city || queryKey.query || queryKey.search;
  }

  // nothing to search
  if (!city) return null;

  const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
  url.searchParams.set('name', city);
  url.searchParams.set('count', '5');
  url.searchParams.set('language', 'en');

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) throw new Error('City lookup failed');
  return res.json();
};
