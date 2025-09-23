import { useState } from 'react';
import { Header, Error, Main, Footer } from './components';
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from './api/fetchWeather';

function App() {
  const [selectedCity, setSelectedCity] = useState({
    name: 'Madison',
    admin1: 'Wisconsin',
    country: 'US',
    latitude: 43.07305,
    longitude: -89.40123,
  });
  const [units, setUnits] = useState('imperial');

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const toggleUnits = () => {
    units === 'imperial' ? setUnits('metric') : setUnits('imperial');
  };

  const lat = selectedCity.latitude;
  const lon = selectedCity.longitude;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['weather', { lat, lon }],
    queryFn: fetchWeather,
    staleTime: 1000 * 60 * 5,
    enabled: lat != null && lon !== null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(selectedCity.latitude, selectedCity.longitude);
  };

  // useEffect(() => {
  //   // fetch weather for default city on first render
  //   fetchWeather(selectedCity.latitude, selectedCity.longitude);
  // }, [selectedCity.latitude, selectedCity.longitude]);

  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className='container'>
      <Header onClick={toggleUnits} units={units} />
      {isError ? (
        <Error />
      ) : (
        <Main
          isLoading={isLoading}
          onSelect={handleCitySelect}
          onSubmit={handleSubmit}
          selectedCity={selectedCity}
          weather={data}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
