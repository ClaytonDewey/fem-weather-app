import logo from '../icons/logo.svg';
import iconUnits from '../icons/icon-units.svg';
import iconDropdown from '../icons/icon-dropdown.svg';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} alt='' role='presentation' />
        <span className='sr-only'>Weather Now</span>
      </div>
      {/* TODO: make units dropdown component */}
      <div className='header__units'>
        <button type='button'>
          <img src={iconUnits} alt='' /> Units <img src={iconDropdown} alt='' />
        </button>
      </div>
    </header>
  );
};
