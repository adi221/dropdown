import { render, screen } from '@testing-library/react';
import Navbar, { DropdownMenu } from './Navbar';

test('Navbar exists', () => {
  render(<Navbar />);
  const nav = screen.getByRole('navigation');
  expect(nav).toBeTruthy();
});

test('Dropdown menu items have correct text', () => {
  render(<DropdownMenu />);
  const dropdownItems = screen.getAllByRole('link');
  const text = dropdownItems.map(el => el.textContent);
  expect(text).toEqual(['Profile', 'Settings']);
});
