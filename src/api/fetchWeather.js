export const fetchWeather = async ({ queryKey, signal } = {}) => {
  const [_key, params] = queryKey || [];
  if (!params) return null;

  const { lat, lon, units } = params;

  if (lat === null || lon === null) return null;

  const daily = ['temperature_2m_max', 'temperature_2m_min', 'weather_code'];
  const hourly = ['temperature_2m', 'weather_code'];
  const current = [
    'relative_humidity_2m',
    'apparent_temperature',
    'wind_speed_10m',
    'precipitation',
    'weather_code',
    'temperature_2m',
  ];

  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.set('latitude', lat);
  url.searchParams.set('longitude', lon);
  url.searchParams.set('daily', daily.join(','));
  url.searchParams.set('hourly', hourly.join(','));
  url.searchParams.set('current', current.join(','));
  url.searchParams.set('timezone', 'auto');

  // ✅ Add unit parameters if user selects imperial
  if (units === 'imperial') {
    url.searchParams.set('wind_speed_unit', 'mph');
    url.searchParams.set('temperature_unit', 'fahrenheit');
    url.searchParams.set('precipitation_unit', 'inch');
  }
  // (You can add other unit systems, e.g. 'metric' defaults to API’s SI units)

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) throw new Error('Network error');
  return res.json();
};
