import { Icon } from '../svg';
import { Button, Dropdown } from '.';

export const Favorites = ({ favorites, loadFavorite }) => {
  // console.log(favorites);
  return (
    <Dropdown
      buttonText={
        <>
          {favorites.length > 0 ? (
            <span className='full'>
              <Icon name='heart-full' />
            </span>
          ) : (
            <Icon name='heart' />
          )}
          Favorites
        </>
      }
      content={({ closeDropdown }) => (
        <>
          {favorites.length > 0 ? (
            <>
              {favorites.map((favorite, index) => (
                <Button
                  key={index}
                  className='unit-item'
                  onClick={() => {
                    loadFavorite(favorite);
                    closeDropdown();
                  }}>
                  {favorite.name},{' '}
                  {favorite.admin1 ? favorite.admin1 : favorite.country}
                </Button>
              ))}
            </>
          ) : (
            <p>No Favorites yet</p>
          )}
        </>
      )}
    />
  );
};
