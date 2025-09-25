import { useState } from 'react';
import { Button, Card, ForecastDaily, ForecastHourly, Hero } from '.';
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

          <ForecastHourly weather={weather} />
        </>
      )}
    </section>
  );
};
