import { Results, SearchBox } from '.';

export const Main = ({ onSelect, onSubmit, weather, selectedCity, units }) => {
  return (
    <div>
      <SearchBox onSelect={onSelect} onSubmit={onSubmit} />
      <Results units={units} weather={weather} city={selectedCity} />
    </div>
  );
};
