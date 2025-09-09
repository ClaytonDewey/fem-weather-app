function App() {
  // https://open-meteo.com/
  return (
    <div className='App'>
      Units
      <br />
      Switch to Imperial/Metric
      <br />
      Temperature
      <br />
      Celsius (°C)
      <br />
      Fahrenheit (°F)
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
      <footer class='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://www.claytondewey.com' target='_blank' rel='noreferrer'>
          Clayton Dewey
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
