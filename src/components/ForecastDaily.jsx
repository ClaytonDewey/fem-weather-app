import { Card, WeatherIcons } from '.';

export const ForecastDaily = ({ forecast }) => {
  const { time, weather_code, temperature_2m_max, temperature_2m_min } =
    forecast;

  return (
    <div>
      <h2>Daily forecast</h2>
      <div className='grid grid__daily'>
        {time.map((date, i) => {
          const dayName = new Date(date).toLocaleDateString('en-us', {
            weekday: 'short',
          });
          const high = Math.round(temperature_2m_max[i]);
          const low = Math.round(temperature_2m_min[i]);

          return (
            <Card
              key={date}
              type='daily'
              content={
                <>
                  <div className='day'>{dayName}</div>
                  <WeatherIcons code={weather_code[i]} />
                  <div className='temp'>
                    <div className='high'>{high}&deg;</div>
                    <div className='low'>{low}&deg;</div>
                  </div>
                </>
              }
            />
          );
        })}
      </div>
    </div>
  );
};

/* 

const dateString = "2025-09-24";
const date = new Date(dateString);

// Use toLocaleDateString with the 'weekday' option set to 'long'
const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });

*/
