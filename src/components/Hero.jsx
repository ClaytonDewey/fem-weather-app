import { Card, WeatherIcons } from '.';

export const Hero = ({ city, weather }) => {
  const { name, country, admin1 } = city;

  const {
    apparent_temperature,
    precipitation,
    relative_humidity_2m,
    wind_speed_10m,
    temperature_2m,
    time,
    weather_code,
  } = weather.current;

  const feelsLike = Math.round(apparent_temperature);
  const actual = Math.round(temperature_2m);
  const windSpeed = Math.round(wind_speed_10m);
  const date = new Date(time);
  const formatted = date.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <section className='hero__wrapper'>
      <div className='hero'>
        <div className='hero__header'>
          <h2>
            {name},{' '}
            {country === 'US' || country === 'United States' ? admin1 : country}
          </h2>
          <p>{formatted}</p>
        </div>
        <div className='hero__body'>
          <WeatherIcons code={weather_code} />
          <div className='temp'>{actual}&deg;</div>
        </div>
      </div>
      <div className='hero__info'>
        <Card
          content={
            <>
              <p className='title'>feels like</p>
              <p className='info'>{feelsLike}&deg;</p>
            </>
          }
        />
        <Card
          content={
            <>
              <p className='title'>humidity</p>
              <p className='info'>{relative_humidity_2m}%</p>
            </>
          }
        />
        <Card
          content={
            <>
              <p className='title'>wind</p>
              <p className='info'>{windSpeed} mph</p>
            </>
          }
        />
        <Card
          content={
            <>
              <p className='title'>precipitation</p>
              <p className='info'>{precipitation} in</p>
            </>
          }
        />
      </div>
    </section>
  );
};
