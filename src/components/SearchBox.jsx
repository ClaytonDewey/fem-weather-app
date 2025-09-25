import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCity } from '../api/fetchCity';
import { Button, Input } from '.';
import iconSearch from '../icons/icon-search.svg';

export const SearchBox = ({ onSelect }) => {
  const [search, setSearch] = useState('');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['citySearch', search],
    queryFn: fetchCity,
    enabled: !!search, // only run when search is not empty
    staleTime: 1000 * 60 * 5,
  });

  const handleSelect = (city) => {
    const { name, admin1, country, latitude, longitude } = city;
    onSelect({
      name,
      admin1,
      country,
      latitude,
      longitude,
    });
    setSearch('');
  };

  return (
    <div className='searchbox'>
      <h1>How&apos;s the sky looking today?</h1>
      <div className='form'>
        <Input
          name='search'
          icon={iconSearch}
          placeholder='Search for a place...'
          type='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {isLoading && <p>Searching...</p>}
        {isError && <p>Error: {error.message}</p>}
        {data?.results && (
          <div className='dropdown__search'>
            {data.results.map((city) => (
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
      </div>
    </div>
  );
};
