import { useState } from 'react';
import iconSearch from '../icons/icon-search.svg';
import { Button, Input } from '.';

export const SearchBox = () => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${location}`);
  };

  return (
    <div className='searchbox'>
      <h1>How's the sky looking today?</h1>
      <form onSubmit={handleSubmit}>
        <Input
          icon={iconSearch}
          type='search'
          placeholder='Search for a place...'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button type='search' className='btn'>
          Search
        </Button>
      </form>
    </div>
  );
};
