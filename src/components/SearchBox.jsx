import { Button, Input } from '.';
import iconSearch from '../icons/icon-search.svg';

export const SearchBox = () => {
  return (
    <div className='searchbox'>
      <h1>How&apos;s the sky looking today?</h1>
      <form>
        <Input
          name='search'
          icon={iconSearch}
          placeholder='Search for a place...'
          type='search'
        />
        <Button type='search' className='btn btn-primary'>
          Search
        </Button>
      </form>
    </div>
  );
};
