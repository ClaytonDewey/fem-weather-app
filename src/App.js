import { Header, Error, Main, Footer, Loading } from './components';
import { useQuery } from '@tanstack/react-query';
import useLocalStorage from './hooks/useLocalStorage';
import { fetchWeather } from './api/fetchWeather';

function App() {
  const [selectedCity, setSelectedCity] = useLocalStorage('city', {
    name: 'Madison',
    admin1: 'Wisconsin',
    country: 'US',
    latitude: 43.07305,
    longitude: -89.40123,
  });
  const [units, setUnits] = useLocalStorage('units', 'imperial');
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const toggleUnits = () => {
    units === 'imperial' ? setUnits('metric') : setUnits('imperial');
  };

  const lat = selectedCity.latitude;
  const lon = selectedCity.longitude;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['weather', { lat, lon, units }],
    queryFn: fetchWeather,
    staleTime: 1000 * 60 * 5,
    enabled: lat !== null && lon !== null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(selectedCity.latitude, selectedCity.longitude);
  };

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const loadFavorite = () => {
    console.log('Favorited');
  };

  const addFavorite = () => {
    setFavorites([...favorites, selectedCity]);
  };

  const themeText = theme === 'light' ? 'dark' : 'light';

  if (isError) {
    return (
      <div className='theme-wrapper' data-theme={theme}>
        <div className='container'>
          <Header />
          <Error />
        </div>
      </div>
    );
  }

  return (
    <div className='theme-wrapper' data-theme={theme}>
      <div className='container'>
        <Header
          favorites={favorites}
          loadFavorite={loadFavorite}
          theme={theme}
          themeText={themeText}
          switchTheme={switchTheme}
          onClick={toggleUnits}
          units={units}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <Main
            addFavorite={addFavorite}
            units={units}
            onSelect={handleCitySelect}
            onSubmit={handleSubmit}
            selectedCity={selectedCity}
            weather={data}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
