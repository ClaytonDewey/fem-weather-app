import { forwardRef } from 'react';

export const DropdownContent = forwardRef((props, ref) => {
  const { children, open } = props;
  return (
    <div
      className={`dropdown__content ${open ? 'content-open' : ''}`}
      ref={ref}>
      {children}
    </div>
  );
});
