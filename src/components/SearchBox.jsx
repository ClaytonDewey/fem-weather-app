import { useCallback, useEffect, useState } from 'react';
import { Button, Input } from '.';
import iconSearch from '../icons/icon-search.svg';
import axios from 'axios';
import debounce from 'lodash.debounce';

export const SearchBox = ({ onSelect, onSubmit }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchCities = async (search) => {
    if (!search.trim()) {
      setResults([]);
      return;
    }
    try {
      const res = await axios.get(
        'https://geocoding-api.open-meteo.com/v1/search',
        {
          params: { name: search, count: 5, language: 'en', format: 'json' },
        }
      );
      setResults(res.data.results || []);
      setIsOpen(true);
    } catch (error) {
      console.error('Error fetching cities', error);
    }
  };

  // Debounce to limit API calls
  const debouncedFetch = useCallback(
    debounce((val) => fetchCities(val), 300),
    []
  );

  useEffect(() => {
    debouncedFetch(query);
  }, [query, debouncedFetch]);

  const handleSelect = (city) => {
    setQuery(`${city.name}, ${city.admin1} ${city.country}`);
    setIsOpen(false);
    if (onSelect) onSelect(city);
  };

  return (
    <div className='searchbox'>
      <h1>How&apos;s the sky looking today?</h1>
      <form onSubmit={onSubmit}>
        <Input
          name='search'
          icon={iconSearch}
          placeholder='Search for a place...'
          type='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && results.length > 0 && setIsOpen(true)}
        />
        {isOpen && results.length > 0 && (
          <div className='dropdown__search'>
            {results.map((city) => (
              <Button
                className='btn-unit'
                key={city.id}
                onClick={() => handleSelect(city)}>
                {city.name}
                {city.admin1 ? `, ${city.admin1}` : ''}, {city.country}
              </Button>
            ))}
          </div>
        )}
        <Button type='search' className='btn btn-primary'>
          Search
        </Button>
      </form>
    </div>
  );
};
