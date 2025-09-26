import { useMemo, useState } from 'react';
import { Button, Card, Dropdown, WeatherIcons } from '.';

export const ForecastHourly = ({ weather }) => {
  const today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
  const [currentDay, setCurrentDay] = useState(today);

  // Group the API response once (memoized for performance)
  const hourlyByDay = useMemo(() => groupByDay(weather.hourly), [weather]);

  const selectedHours = hourlyByDay[currentDay] || [];

  const days = Object.keys(hourlyByDay); // use actual available days instead of hardcoded

  return (
    <div className='col-right'>
      <Card
        type='hourly'
        content={
          <>
            <div className='card__header'>
              <h2>Hourly Forecast</h2>
              <Dropdown
                buttonText={currentDay}
                content={({ closeDropdown }) => (
                  <div className='btn-container'>
                    {days.map((day) => (
                      <Button
                        key={day}
                        onClick={() => {
                          setCurrentDay(day);
                          closeDropdown();
                        }}
                        type='button'
                        className={`btn ${day === currentDay ? 'active' : ''}`}>
                        {day}
                      </Button>
                    ))}
                  </div>
                )}
              />
            </div>
            <div className='card__scroll' tabIndex='0'>
              {/* Render hours for selected day */}
              {selectedHours.map((hour) => (
                <div key={hour.time} className='card__block hourly-forecast'>
                  <div className='time'>
                    <WeatherIcons code={hour.code} />
                    {hour.time.toLocaleTimeString('en-us', {
                      hour: 'numeric',
                    })}
                  </div>
                  <div>{Math.round(hour.temp)}&deg;</div>
                </div>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
};

// helper
const groupByDay = (hourly) => {
  const result = {};
  hourly.time.forEach((time, i) => {
    const date = new Date(time);
    const day = date.toLocaleDateString('en-us', { weekday: 'long' });

    if (!result[day]) result[day] = [];
    result[day].push({
      time: date,
      temp: hourly.temperature_2m[i],
      code: hourly.weather_code[i],
    });
  });
  return result;
};
