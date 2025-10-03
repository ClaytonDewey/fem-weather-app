import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';
import { fetchCity } from '../api/fetchCity';
import { Button, Input } from '.';
import iconSearch from '../icons/icon-search.svg';
import iconLoading from '../icons/icon-loading.svg';

export const SearchBox = ({ onSelect }) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const [city, setCity] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['citySearch', debouncedSearch],
    queryFn: fetchCity,
    enabled: !!debouncedSearch, // only run when search is not empty
    staleTime: 1000 * 60 * 5,
  });

  const handleSelect = (city) => {
    const { name, admin1, country, latitude, longitude } = city;
    setCity({
      name,
      admin1,
      country,
      latitude,
      longitude,
    });
    setSearch(`${name}, ${admin1 ? admin1 : country}`);
    setIsDisabled(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSelect(city);
    setCity(null);
    setSearch('');
  };

  return (
    <div className='searchbox'>
      <h1>How&apos;s the sky looking today?</h1>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <Input
            name='search'
            icon={iconSearch}
            placeholder='Search for a place...'
            type='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {isLoading && (
            <div className='dropdown__search'>
              <div style={{ padding: '10px', display: 'flex' }}>
                <img src={iconLoading} alt='' className='loading' />
                Search in progress
              </div>
            </div>
          )}
          {isError && <p>Error: {error.message}</p>}
          {data?.results && (
            <div className='dropdown__search'>
              {data.results.map((city) => (
                <Button
                  className='btn-unit'
                  key={city.id}
                  type='button'
                  onClick={() => handleSelect(city)}>
                  {city.name}
                  {city.admin1 ? `, ${city.admin1}` : ''}, {city.country}
                </Button>
              ))}
            </div>
          )}
        </div>
        <Button disabled={isDisabled} type='search' className='btn btn-primary'>
          Search
        </Button>
      </form>
    </div>
  );
};
