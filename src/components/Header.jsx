const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src='/images/logo.svg' alt='' role='presentation' />
        <span className='sr-only'>Weather Now</span>
      </div>
      {/* TODO: make units dropdown component */}
      <div className='header__units'>
        <button type='button'>
          <img src='/images/icon-units.svg' alt='' /> Units{' '}
          <img src='/images/icon-dropdown.svg' alt='' />
        </button>
      </div>
    </header>
  );
};
export default Header;
