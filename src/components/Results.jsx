import { Button, Card, Hero } from '.';
import iconDropdown from '../icons/icon-dropdown.svg';

export const Results = () => {
  return (
    <section className='grid results'>
      <div className='col-left'>
        <Hero />
        <h2>Daily forecast</h2>
        <div className='grid grid__daily'>
          <Card
            type='daily'
            content={
              <>
                <p className='day'>tue</p>
                <img alt='' src='/images/icon-rain.webp' className='icon' />
                <div className='temp'>
                  <span className='high'>68&deg;</span>
                  <span className='low'>57&deg;</span>
                </div>
              </>
            }
          />
          <Card
            type='daily'
            content={
              <>
                <p className='day'>wed</p>
                <img alt='' src='/images/icon-drizzle.webp' className='icon' />
                <div className='temp'>
                  <span className='high'>70&deg;</span>
                  <span className='low'>59&deg;</span>
                </div>
              </>
            }
          />
          <Card
            type='daily'
            content={
              <>
                <p className='day'>thu</p>
                <img alt='' src='/images/icon-sunny.webp' className='icon' />
                <div className='temp'>
                  <span className='high'>75&deg;</span>
                  <span className='low'>57&deg;</span>
                </div>
              </>
            }
          />
          <Card
            type='daily'
            content={
              <>
                <p className='day'>fri</p>
                <img
                  alt=''
                  src='/images/icon-partly-cloudy.webp'
                  className='icon'
                />
                <div className='temp'>
                  <span className='high'>77&deg;</span>
                  <span className='low'>55&deg;</span>
                </div>
              </>
            }
          />
          <Card
            type='daily'
            content={
              <>
                <p className='day'>sat</p>
                <img alt='' src='/images/icon-storm.webp' className='icon' />
                <div className='temp'>
                  <span className='high'>70&deg;</span>
                  <span className='low'>59&deg;</span>
                </div>
              </>
            }
          />
          <Card
            type='daily'
            content={
              <>
                <p className='day'>sun</p>
                <img alt='' src='/images/icon-snow.webp' className='icon' />
                <div className='temp'>
                  <span className='high'>77&deg;</span>
                  <span className='low'>61&deg;</span>
                </div>
              </>
            }
          />
          <Card
            type='daily'
            content={
              <>
                <p className='day'>mon</p>
                <img alt='' src='/images/icon-fog.webp' className='icon' />
                <div className='temp'>
                  <span className='high'>75&deg;</span>
                  <span className='low'>59&deg;</span>
                </div>
              </>
            }
          />
        </div>
      </div>

      <div className='col-right'>
        <Card
          type='hourly'
          content={
            <>
              <div className='card__header'>
                <h2>Hourly Forecast</h2>
                <Button className='btn btn-secondary'>
                  Tuesday
                  <img src={iconDropdown} alt='' />
                </Button>
              </div>
              <div className='card__block'>
                <div className='time'>
                  <img
                    src='/images/icon-overcast.webp'
                    alt=''
                    className='icon'
                  />
                  3 pm
                </div>
                <div>68&deg;</div>
              </div>
              <div className='card__block'>
                <div className='time'>
                  <img
                    src='/images/icon-overcast.webp'
                    alt=''
                    className='icon'
                  />
                  3 pm
                </div>
                <div>68&deg;</div>
              </div>
              <div className='card__block'>
                <div className='time'>
                  <img
                    src='/images/icon-overcast.webp'
                    alt=''
                    className='icon'
                  />
                  3 pm
                </div>
                <div>68&deg;</div>
              </div>
              <div className='card__block'>
                <div className='time'>
                  <img
                    src='/images/icon-overcast.webp'
                    alt=''
                    className='icon'
                  />
                  3 pm
                </div>
                <div>68&deg;</div>
              </div>
              <div className='card__block'>
                <div className='time'>
                  <img
                    src='/images/icon-overcast.webp'
                    alt=''
                    className='icon'
                  />
                  3 pm
                </div>
                <div>68&deg;</div>
              </div>
              <div className='card__block'>
                <div className='time'>
                  <img
                    src='/images/icon-overcast.webp'
                    alt=''
                    className='icon'
                  />
                  3 pm
                </div>
                <div>68&deg;</div>
              </div>
              <div className='card__block'>
                <div className='time'>
                  <img
                    src='/images/icon-overcast.webp'
                    alt=''
                    className='icon'
                  />
                  3 pm
                </div>
                <div>68&deg;</div>
              </div>
              <div className='card__block'>
                <div className='time'>
                  <img
                    src='/images/icon-overcast.webp'
                    alt=''
                    className='icon'
                  />
                  3 pm
                </div>
                <div>68&deg;</div>
              </div>
            </>
          }
        />
      </div>
    </section>
  );
};
