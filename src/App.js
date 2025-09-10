import { Button, Card, Footer, Header, Hero, SearchBox } from './components';
import iconDropdown from './icons/icon-dropdown.svg';

// https://open-meteo.com/
function App() {
  return (
    <>
      <Header />
      <SearchBox />
      <Hero />
      {/*  */}
      <div className='block block__current'>
        <Card>
          <p className='title'>Feels Like</p>
          <p className='info'>18&deg;</p>
        </Card>

        <Card>
          <p className='title'>Humidity</p>
          <p className='info'>46%</p>
        </Card>

        <Card>
          <p className='title'>Wind</p>
          <p className='info'>14 km/h</p>
        </Card>

        <Card>
          <p className='title'>Precipitation</p>
          <p className='info'>0 mm</p>
        </Card>
      </div>
      {/*  */}
      <h3>Daily forecast</h3>
      <div className='block block__daily'>
        <Card>
          <div className='day'>Tue</div>
          <div className='icon'>
            <img src='/images/icon-rain.webp' alt='rain' />
          </div>
          <div className='temp'>
            <div className='high'>20&deg;</div>
            <div className='low'>14&deg;</div>
          </div>
        </Card>

        <Card>
          <div className='day'>Wed</div>
          <div className='icon'>
            <img src='/images/icon-drizzle.webp' alt='rain' />
          </div>
          <div className='temp'>
            <div className='high'>21&deg;</div>
            <div className='low'>15&deg;</div>
          </div>
        </Card>

        <Card>
          <div className='day'>Thu</div>
          <div className='icon'>
            <img src='/images/icon-sunny.webp' alt='rain' />
          </div>
          <div className='temp'>
            <div className='high'>24&deg;</div>
            <div className='low'>14&deg;</div>
          </div>
        </Card>

        <Card>
          <div className='day'>Fri</div>
          <div className='icon'>
            <img src='/images/icon-partly-cloudy.webp' alt='rain' />
          </div>
          <div className='temp'>
            <div className='high'>25&deg;</div>
            <div className='low'>13&deg;</div>
          </div>
        </Card>

        <Card>
          <div className='day'>Sat</div>
          <div className='icon'>
            <img src='/images/icon-storm.webp' alt='rain' />
          </div>
          <div className='temp'>
            <div className='high'>21&deg;</div>
            <div className='low'>15&deg;</div>
          </div>
        </Card>

        <Card>
          <div className='day'>Sun</div>
          <div className='icon'>
            <img src='/images/icon-snow.webp' alt='rain' />
          </div>
          <div className='temp'>
            <div className='high'>25&deg;</div>
            <div className='low'>16&deg;</div>
          </div>
        </Card>

        <Card>
          <div className='day'>Mon</div>
          <div className='icon'>
            <img src='/images/icon-fog.webp' alt='rain' />
          </div>
          <div className='temp'>
            <div className='high'>24&deg;</div>
            <div className='low'>15&deg;</div>
          </div>
        </Card>
      </div>
      {/*  */}
      <div className='block block__hourly'>
        <div className='block__header'>
          <h3>Hourly forecast</h3>
          <Button type='button' className='btn-toggle'>
            Tuesday
            <img src={iconDropdown} alt='' />
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
