import { Results, SearchBox } from '.';

export const Main = ({ onSelect, onSubmit, weather, selectedCity }) => {
  return (
    <div>
      <SearchBox onSelect={onSelect} onSubmit={onSubmit} />
      <Results weather={weather} city={selectedCity} />
    </div>
  );
};
