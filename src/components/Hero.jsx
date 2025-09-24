import { Card } from '.';
import iconLoading from '../icons/icon-loading.svg';

export const Hero = ({ isLoading, city, weather }) => {
  const { name, country, admin1 } = city;

  const {
    apparent_temperature,
    precipitation,
    relative_humidity_2m,
    wind_speed_10m,
    temperature_2m,
    time,
  } = weather.current;

  const feelsLike = Math.round(apparent_temperature);
  const actual = Math.round(temperature_2m);
  const date = new Date(time);
  const formatted = date.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className='hero__wrapper'>
      <div className={`hero ${isLoading ? 'loading' : ''}`}>
        {isLoading ? (
          <>
            <img src={iconLoading} alt='' />
            <p>Loading...</p>
          </>
        ) : (
          <>
            <div className='hero__header'>
              <h2>
                {name},{' '}
                {country === 'US' || country === 'United States'
                  ? admin1
                  : country}
              </h2>
              <p>{formatted}</p>
            </div>
            <div className='hero__body'>
              <img src='/images/icon-sunny.webp' alt='' className='icon' />
              <div className='temp'>{actual}&deg;</div>
            </div>
          </>
        )}
      </div>
      <div className='hero__info'>
        <Card
          content={
            <>
              <p className='title'>feels like</p>
              {isLoading ? (
                <p className='info'>-</p>
              ) : (
                <p className='info'>{feelsLike}&deg;</p>
              )}
            </>
          }
        />
        <Card
          content={
            <>
              <p className='title'>humidity</p>
              {isLoading ? (
                <p className='info'>-</p>
              ) : (
                <p className='info'>{relative_humidity_2m}%</p>
              )}
            </>
          }
        />
        <Card
          content={
            <>
              <p className='title'>wind</p>
              {isLoading ? (
                <p className='info'>-</p>
              ) : (
                <p className='info'>{wind_speed_10m} mph</p>
              )}
            </>
          }
        />
        <Card
          content={
            <>
              <p className='title'>precipitation</p>
              {isLoading ? (
                <p className='info'>-</p>
              ) : (
                <p className='info'>{precipitation} in</p>
              )}
            </>
          }
        />
      </div>
    </section>
  );
};
