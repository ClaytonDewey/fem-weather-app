import { Button } from '.';
import iconCheck from '../icons/icon-checkmark.svg';

export const Unit = () => {
  return (
    <section className='unit'>
      <h3>Temperature</h3>
      <Button className='btn-unit active'>
        Celcius(&deg;C) <img src={iconCheck} alt='selected' />
      </Button>
      <Button className='btn-unit'>Fahrenheit(&deg;F)</Button>
    </section>
  );
};
