import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

test('Displays the correct list of regions', async () => {
  render(<Sidebar />);
  const listRegions = await screen.findAllByRole('listitem');
  console.log(listRegions);
});
