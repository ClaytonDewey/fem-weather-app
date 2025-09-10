import { Footer, Header, SearchBox } from './components';

// https://open-meteo.com/
function App() {
  return (
    <div className='app'>
      <Header />
      <SearchBox />
      <div className='card card__main'>
        <div className='card__main-header'>
          <h2>Berlin, Germany</h2>
          <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div className='card__main-body'>
          <img src='/images/icon-sunny.webp' alt='Sunny' className='icon' />
          <span className='temp'>20&deg;</span>
        </div>
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
