import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from '.';

// A helper for rendering with a simple content function
const setup = () => {
  const utils = render(
    <Dropdown
      buttonText='Menu'
      content={({ closeDropdown }) => (
        <>
          <button onClick={closeDropdown}>Item 1</button>
          <button onClick={closeDropdown}>Item 2</button>
        </>
      )}
    />
  );
  const button = screen.getByRole('button', { name: /menu/i });
  return { ...utils, button };
};

describe('Dropdown accessibility', () => {
  it('opens when button is clicked', async () => {
    const { button } = setup();
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();

    await userEvent.click(button);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('closes when clicking outside', async () => {
    const { button } = setup();
    await userEvent.click(button);

    expect(screen.getByText('Item 1')).toBeInTheDocument();

    fireEvent.click(document.body);

    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('closes when pressing Escape', async () => {
    const { button } = setup();
    await userEvent.click(button);

    expect(screen.getByText('Item 1')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('traps focus inside the dropdown when open', async () => {
    const { button } = setup();
    await userEvent.click(button);

    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');

    item1.focus();
    expect(item1).toHaveFocus();

    // Tab should move focus to Item 2
    fireEvent.keyDown(document, { key: 'Tab', code: 'Tab' });
    expect(item2).toHaveFocus();

    // Tab again should wrap back to Item 1
    fireEvent.keyDown(document, { key: 'Tab', code: 'Tab' });
    expect(item1).toHaveFocus();

    // Shift+Tab should go back to Item 2
    fireEvent.keyDown(document, { key: 'Tab', code: 'Tab', shiftKey: true });
    expect(item2).toHaveFocus();
  });
});
