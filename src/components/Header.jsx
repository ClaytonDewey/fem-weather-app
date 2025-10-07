import { Button, Dropdown, Toggler } from '.';
import { Icon } from '../svg';

export const Header = ({ onClick, units, theme, themeText, switchTheme }) => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Icon name='logo' />
        <span className='sr-only'>Weather Now</span>
      </div>
      <Toggler theme={theme} themeText={themeText} switchTheme={switchTheme} />
      <div className='header__units'>
        <Dropdown
          buttonText={
            <>
              <Icon name='units' />
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
                type='button'
                className='btn btn-toggle'>
                Switch to{' '}
                <span>{units === 'imperial' ? 'metric' : 'imperial'}</span>
              </Button>
              <section className='unit'>
                <h3>temperature</h3>
                <Button
                  type='button'
                  className={`unit-item ${
                    units === 'metric' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  Celcius(&deg;C)
                  {units === 'metric' && <Icon name='check' />}
                </Button>
                <Button
                  type='button'
                  className={`unit-item ${
                    units === 'imperial' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  Fahrenheit(&deg;F)
                  {units === 'imperial' && <Icon name='check' />}
                </Button>
              </section>
              <section className='unit'>
                <h3>wind speed</h3>
                <Button
                  type='button'
                  className={`unit-item ${
                    units === 'metric' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  km/h
                  {units === 'metric' && <Icon name='check' />}
                </Button>
                <Button
                  type='button'
                  className={`unit-item ${
                    units === 'imperial' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  mph
                  {units === 'imperial' && <Icon name='check' />}
                </Button>
              </section>
              <section className='unit'>
                <h3>precipitation</h3>
                <Button
                  type='button'
                  className={`unit-item ${
                    units === 'metric' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  Millimeters(mm)
                  {units === 'metric' && <Icon name='check' />}
                </Button>
                <Button
                  type='button'
                  className={`unit-item ${
                    units === 'imperial' ? 'active' : null
                  }`}
                  onClick={() => {
                    closeDropdown();
                    onClick();
                  }}>
                  Inches(in)
                  {units === 'imperial' && <Icon name='check' />}
                </Button>
              </section>
            </>
          )}
        />
      </div>
    </header>
  );
};
