export const fetchWeather = async ({ queryKey, signal }) => {
  const [_key, { lat, lon }] = queryKey;

  // Define the parameters
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
  // "current" params are added as individual fields in Open-Meteo v1:
  url.searchParams.set('current', current.join(','));
  // Optional: timezone so daily data is meaningful
  url.searchParams.set('timezone', 'auto');

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) throw new Error('Network error');
  return res.json();
};
