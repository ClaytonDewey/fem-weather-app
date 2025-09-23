import { useEffect, useState } from 'react';
import { Header, Error, Main, Footer } from './components';
import axios from 'axios';
// https://medium.com/@aumairasad/bye-bye-useeffect-how-to-fetch-api-data-like-a-pro-in-react-fce815ddb7fe
function App() {
  const apiUrl = 'https://api.open-meteo.com/v1';
  const [selectedCity, setSelectedCity] = useState({
    name: 'Madison',
    admin1: 'Wisconsin',
    country: 'US',
    latitude: 43.07305,
    longitude: -89.40123,
  });
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('imperial');
  const [isError, setIsError] = useState(false);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const toggleUnits = () => {
    units === 'imperial' ? setUnits('metric') : setUnits('imperial');
  };

  const fetchWeather = async (lat, lon) => {
    let apiParams = {};

    units === 'imperial'
      ? (apiParams = {
          latitude: lat,
          longitude: lon,
          daily: ['temperature_2m_max', 'temperature_2m_min', 'weather_code'],
          hourly: ['temperature_2m', 'weather_code'],
          current: [
            'relative_humidity_2m',
            'apparent_temperature',
            'wind_speed_10m',
            'precipitation',
            'weather_code',
            'temperature_2m',
          ],
          wind_speed_unit: 'mph',
          temperature_unit: 'fahrenheit',
          precipitation_unit: 'inch',
        })
      : (apiParams = {
          latitude: lat,
          longitude: lon,
          daily: ['temperature_2m_max', 'temperature_2m_min', 'weather_code'],
          hourly: ['temperature_2m', 'weather_code'],
          current: [
            'relative_humidity_2m',
            'apparent_temperature',
            'wind_speed_10m',
            'precipitation',
            'weather_code',
            'temperature_2m',
          ],
        });
    try {
      const res = await axios.get(`${apiUrl}/forecast`, {
        params: apiParams,
      });
      setWeather(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(selectedCity.latitude, selectedCity.longitude);
  };

  useEffect(() => {
    // fetch weather for default city on first render
    fetchWeather(selectedCity.latitude, selectedCity.longitude);
  }, [selectedCity.latitude, selectedCity.longitude]);

  // console.log(weather);
  return (
    <div className='container'>
      <Header onClick={toggleUnits} units={units} />
      {isError ? (
        <Error />
      ) : (
        <Main
          onSelect={handleCitySelect}
          onSubmit={handleSubmit}
          selectedCity={selectedCity}
          weather={weather}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
