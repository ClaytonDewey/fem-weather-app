import { useState } from 'react';
import { Footer, Header, Input } from './components';
import iconSearch from './icons/icon-search.svg';
import { Button } from './components/Button';

// https://open-meteo.com/
function App() {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${location}`);
  };

  return (
    <div className='app'>
      <Header />
      <form onSubmit={handleSubmit}>
        <Input
          icon={iconSearch}
          type='search'
          placeholder='Search for a place...'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button type='search' className='btn'>
          Search
        </Button>
      </form>
      <div className='card'>
        Switch to Imperial/Metric
        <br />
        Temperature
        <br />
        Celsius (°C)
        <br />
        Fahrenheit (°F)
      </div>
      <br />
      Wind Speed
      <br />
      km/h
      <br />
      mph
      <br />
      Precipitation
      <br />
      Millimeters (mm)
      <br />
      Inches (in)
      <br />
      How's the sky looking today?
      <br />
      Search for a city, e.g., New York
      <br />
      Search
      <br />
      Feels like
      <br />
      {/* <!-- Insert temperature here --> */}
      Humidity
      <br />
      {/* <!-- Insert humidity here --> */}
      Wind
      <br />
      {/* <!-- Insert wind here -->    */}
      Precipitation
      <br />
      {/* <!-- Insert precipitation here --> */}
      Daily forecast
      <br />
      {/* <!-- Insert daily forecast for the next 7 days here --> */}
      Hourly forecast
      <br />
      {/* <!-- Insert hourly forecast for the selected day here --> */}
      <Footer />
    </div>
  );
}

export default App;
