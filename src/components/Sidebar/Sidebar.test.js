import { render, screen, waitFor } from '@testing-library/react';
import Sidebar from './Sidebar';

test('Displays the correct list of regions', async () => {
  render(<Sidebar />);

  await waitFor(async () => {
    const listRegions = await screen.findAllByRole('list');

    expect(listRegions).toHaveLength(6);
  });
});
