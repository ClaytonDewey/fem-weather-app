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
          content={
            <>
              <Button onClick={onClick} className='btn btn-toggle'>
                Switch to <span>{units}</span>
              </Button>
              <Unit title='temperature' units={units} />
              <Unit title='wind speed' units={units} />
              <Unit title='precipitation' units={units} />
            </>
          }
        />
      </div>
    </header>
  );
};
