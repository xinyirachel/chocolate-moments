import React from "react";
import Navigation from './components/Navigation';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, Link } from '@testing-library/react';

it('routes ok', async () => {

  Navigation = jest.fn();
  
    const { getByText } = render(
      <MemoryRouter Navigation={Navigation}>
        <Link to="/about">About</Link>
      </MemoryRouter>
    );
  
    fireEvent.click(getByText('About'));
  
    expect(Navigation).toHaveBeenCalledWith('/about');
  });