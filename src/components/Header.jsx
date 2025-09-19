import { Button } from '.';
import iconLogo from '../icons/logo.svg';
import iconUnits from '../icons/icon-units.svg';
import iconDropdown from '../icons/icon-dropdown.svg';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={iconLogo} alt='' />
        <span className='sr-only'>Weather Now</span>
      </div>
      <div className='header__units'>
        <Button className='btn btn-secondary'>
          <img src={iconUnits} alt='' />
          Units
          <img src={iconDropdown} alt='' />
        </Button>
      </div>
    </header>
  );
};
