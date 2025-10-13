import { Results, SearchBox } from '.';

export const Main = ({
  onSelect,
  onSubmit,
  weather,
  selectedCity,
  units,
  favorites,
  handleFavorites,
}) => {
  return (
    <main>
      <SearchBox onSelect={onSelect} onSubmit={onSubmit} />
      <Results
        favorites={favorites}
        handleFavorites={handleFavorites}
        units={units}
        weather={weather}
        city={selectedCity}
      />
    </main>
  );
};
