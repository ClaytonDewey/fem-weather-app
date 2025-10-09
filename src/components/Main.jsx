import { Results, SearchBox } from '.';

export const Main = ({
  onSelect,
  onSubmit,
  weather,
  selectedCity,
  units,
  addFavorite,
}) => {
  return (
    <main>
      <SearchBox onSelect={onSelect} onSubmit={onSubmit} />
      <Results
        addFavorite={addFavorite}
        units={units}
        weather={weather}
        city={selectedCity}
      />
    </main>
  );
};
