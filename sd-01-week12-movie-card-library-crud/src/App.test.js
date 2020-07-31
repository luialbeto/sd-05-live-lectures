import React from 'react';
import { render, cleanup, fireEvent, waitForDomChange } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

// describe('Some test', () => {
//   test('Some test', () => {
//     expect(true).toBeTruthy();
//   })
// });

describe('Movie List', () => {
  test("Renders a 'Carregando...' text right after rendering the element", () => {
    const { getByText } = render(<App />);
    expect(getByText('Carregando...')).toBeDefined();
  })
})

test('Renders the movie titles after the page loads', async () => {
  const { queryByText, getByText } = render(<App />);
  expect(getByText('Carregando...')).toBeDefined();

  await waitForDomChange();

  expect(queryByText('Carregando...')).toBeNull();
  expect(queryByText('Kingsglaive')).not.toBeNull();
  expect(queryByText('Final Fantasy')).not.toBeNull();
  expect(queryByText('Ghost In The Shell')).not.toBeNull();
  expect(queryByText('Appleseed Alpha')).not.toBeNull();
  expect(queryByText('Resident Evil')).not.toBeNull();
})

test("Render the movie's details in a separate page when 'Ver detalhes' button is clicked", async () => {

  const movieTitles = ['Kingsglaive', 'Final Fantasy', 'Ghost In The Shell', 'Appleseed Alpha', 'Resident Evil'];

  movieTitles.map( async (movieTitle) => {
    const { queryByText, queryByTestId } = render(<App />);
    await waitForDomChange();
    fireEvent.click(queryByTestId(`${movieTitle}Details`));
    await waitForDomChange();
    expect(queryByText(/Genre/)).not.toBeNull();
    expect(queryByText(/Rating/)).not.toBeNull();
  })

})