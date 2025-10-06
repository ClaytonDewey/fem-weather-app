import { Input } from '../components/';
import { Icon } from '../svg';

export const Toggler = ({ theme, themeText, switchTheme }) => {
  return (
    <div className='toggler'>
      <div className='toggle-container'>
        <label htmlFor='mode' className='label'>
          <span>{themeText}</span>
          {theme === 'light' ? <Icon name='moon' /> : <Icon name='sun' />}
          <Input
            type='checkbox'
            id='mode'
            className={`toggle ${theme}`}
            onChange={switchTheme}
          />
        </label>
      </div>
    </div>
  );
};
