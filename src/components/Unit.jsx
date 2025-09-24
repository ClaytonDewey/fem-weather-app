import iconCheck from '../icons/icon-checkmark.svg';

export const Unit = ({ title, units }) => {
  return (
    <section className='unit'>
      <h3>{title}</h3>
      <div className={`unit-item ${units === 'metric' ? 'active' : null}`}>
        Celcius(&deg;C){' '}
        {units === 'metric' && <img src={iconCheck} alt='selected' />}
      </div>
      <div className={`unit-item ${units === 'imperial' ? 'active' : null}`}>
        Fahrenheit(&deg;F){' '}
        {units === 'imperial' && <img src={iconCheck} alt='selected' />}
      </div>
    </section>
  );
};
