import { Results, SearchBox } from '.';

export const Main = ({
  isLoading,
  onSelect,
  onSubmit,
  weather,
  selectedCity,
}) => {
  return (
    <div>
      <SearchBox onSelect={onSelect} onSubmit={onSubmit} />
      <Results isLoading={isLoading} weather={weather} city={selectedCity} />
    </div>
  );
};
