import { useState, useEffect, useRef } from 'react';
import { DropdownButton, DropdownContent } from '.';

export const Dropdown = ({ buttonText, content }) => {
  const [open, setOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const dropdownRef = useRef();
  const buttonRef = useRef();
  const contentRef = useRef();

  const toggleDropdown = () => {
    if (!open) {
      const spaceRemaining =
        window.innerHeight - buttonRef.current.getBoundingClientRect().bottom;
      const contentHeight = contentRef.current.clientHeight;

      const topPosition =
        spaceRemaining > contentHeight ? null : spaceRemaining - contentHeight;

      setDropdownTop(topPosition);
    }
    setOpen((open) => !open);
  };

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, [dropdownRef]);

  return (
    <div className='dropdown' ref={dropdownRef}>
      <DropdownButton toggle={toggleDropdown} open={open} ref={buttonRef}>
        {buttonText}
      </DropdownButton>
      <DropdownContent top={dropdownTop} open={open} ref={contentRef}>
        {content}
      </DropdownContent>
    </div>
  );
};
