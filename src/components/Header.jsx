import { Button, Dropdown } from '.';
import iconLogo from '../icons/logo.svg';
import iconUnits from '../icons/icon-units.svg';
import iconCheck from '../icons/icon-checkmark.svg';

export const Header = ({ onClick, units }) => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={iconLogo} alt='' />
        <span className='sr-only'>Weather Now</span>
      </div>
      <div className='header__units'>
        <Dropdown
          buttonText={
            <>
              <img src={iconUnits} alt='' />
              Units
            </>
          }
          content={({ closeDropdown }) => (
            <>
              <Button
                onClick={() => {
                  closeDropdown();
                  onClick();
                }}
                className='btn btn-toggle'>
                Switch to{' '}
                <span>{units === 'imperial' ? 'metric' : 'imperial'}</span>
              </Button>
              <section className='unit'>
                <h3>temperature</h3>
                <Button
                  className={`unit-item ${
                    units === 'metric' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  Celcius(&deg;C)
                  {units === 'metric' && <img src={iconCheck} alt='selected' />}
                </Button>
                <Button
                  className={`unit-item ${
                    units === 'imperial' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  Fahrenheit(&deg;F)
                  {units === 'imperial' && (
                    <img src={iconCheck} alt='selected' />
                  )}
                </Button>
              </section>
              <section className='unit'>
                <h3>wind speed</h3>
                <Button
                  className={`unit-item ${
                    units === 'metric' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  km/h
                  {units === 'metric' && <img src={iconCheck} alt='selected' />}
                </Button>
                <Button
                  className={`unit-item ${
                    units === 'imperial' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  mph
                  {units === 'imperial' && (
                    <img src={iconCheck} alt='selected' />
                  )}
                </Button>
              </section>
              <section className='unit'>
                <h3>precipitation</h3>
                <Button
                  className={`unit-item ${
                    units === 'metric' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  Millimeters(mm)
                  {units === 'metric' && <img src={iconCheck} alt='selected' />}
                </Button>
                <Button
                  className={`unit-item ${
                    units === 'imperial' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  Inches(in)
                  {units === 'imperial' && (
                    <img src={iconCheck} alt='selected' />
                  )}
                </Button>
              </section>
            </>
          )}
        />
      </div>
    </header>
  );
};
