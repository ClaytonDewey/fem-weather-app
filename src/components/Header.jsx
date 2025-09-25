import { Button, Dropdown, Unit } from '.';
import iconLogo from '../icons/logo.svg';
import iconUnits from '../icons/icon-units.svg';

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
              <Unit
                title='temperature'
                units={units}
                metric='Celcius(°C)'
                imperial='Fahrenheit(°F)'
              />
              <Unit
                title='wind speed'
                units={units}
                metric='km/h'
                imperial='mph'
              />
              <Unit
                title='precipitation'
                units={units}
                metric='Millimeters(mm)'
                imperial='Inches(in)'
              />
            </>
          )}
        />
      </div>
    </header>
  );
};
