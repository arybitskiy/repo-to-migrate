import { render } from '@testing-library/react';

import { MemoryRouter, Link } from 'react-router-dom';

import App from './App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn(({ children }) => children),
}));

describe('App', () => {
  it('should render successfully', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(Link).toHaveBeenCalledWith(
      { children: 'Click here for page 2.', to: '/page-2' },
      {}
    );
  });

  it('should have a greeting as the title', () => {
    render(
      <MemoryRouter initialEntries={['/page-2']}>
        <App />
      </MemoryRouter>
    );
    expect(Link).toHaveBeenCalledWith(
      { children: 'Click here to go back to root page.', to: '/' },
      {}
    );
  });
});
