import { Footer, Header } from './components';

function App() {
  // https://open-meteo.com/
  return (
    <div className='app'>
      <Header />
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
