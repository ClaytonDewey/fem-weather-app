import { useState } from 'react';
import { ForecastDaily, ForecastHourly, Hero } from '.';

export const Results = ({
  weather,
  city,
  units,
  favorites,
  handleFavorites,
}) => {
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
            <Hero
              favorites={favorites}
              handleFavorites={handleFavorites}
              units={units}
              city={city}
              weather={weather}
            />
            <ForecastDaily forecast={weather.daily} />
          </div>

          <ForecastHourly weather={weather} />
        </>
      )}
    </section>
  );
};
