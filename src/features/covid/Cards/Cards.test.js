import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';

describe("Rendering", () => {
it("Should render all the elements correctly of Cards component", () => {
    render(<Cards />);
    expect(screen.getByRole("heading")).toBeTruthy();
  })
})