import { Button } from '../components/';
import { Icon } from '../svg';

export const Toggler = ({ theme, themeText, switchTheme }) => {
  return (
    <div className='toggler'>
      <Button
        type='button'
        className={`btn btn-secondary toggle ${theme}`}
        onClick={switchTheme}>
        <span>{themeText}</span>
        {theme === 'light' ? <Icon name='moon' /> : <Icon name='sun' />}
      </Button>
    </div>
  );
};
