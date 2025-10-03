import { forwardRef } from 'react';
import { Button } from '.';
import iconDropdown from '../icons/icon-dropdown.svg';

export const DropdownButton = forwardRef((props, ref) => {
  const { children, open, toggle } = props;

  return (
    <Button
      onClick={toggle}
      type='button'
      className={`btn btn-secondary ${open ? 'btn-open' : null}`}
      ref={ref}>
      {children}
      <img className={open ? 'open' : null} src={iconDropdown} alt='' />
    </Button>
  );
});
