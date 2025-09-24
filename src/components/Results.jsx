import { useState } from 'react';
import { Button, Card, ForecastDaily, Hero } from '.';
import iconDropdown from '../icons/icon-dropdown.svg';

export const Results = ({ weather, city }) => {
  const [results, setResults] = useState([1]);

  return (
    <section
      className={`grid ${results.length === 0 ? 'no-results' : 'results'}`}>
      {results.length === 0 ? (
        <>
          <p>No search results found!</p>
        </>
      ) : (
        <>
          <div className='col-left'>
            <Hero city={city} weather={weather} />
            <ForecastDaily forecast={weather.daily} />
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
        </>
      )}
    </section>
  );
};
