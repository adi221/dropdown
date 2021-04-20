import { screen, render, fireEvent } from '@testing-library/react';
import Content from './Content';

test('button has cirrect text', () => {
  render(<Content />);
  const button = screen.getByRole('button');
  expect(button.textContent).toBe('Press Here');
  // click button
  fireEvent.click(button);
  expect(button.textContent).toBe('Clicked');
});
