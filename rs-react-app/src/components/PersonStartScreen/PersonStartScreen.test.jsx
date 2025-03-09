import { render, screen } from '@testing-library/react';
import PersonStartScreen from './PersonStartScreen';
import React from 'react';

describe('PersonStartScreen Component', () => {
  it('renders the heading correctly', () => {
    render(<PersonStartScreen />);
    expect(
      screen.getByRole('heading', {
        name: /узнай больше о персонажах звездных воин/i,
      })
    ).toBeInTheDocument();
  });

  it('renders the paragraph text', () => {
    render(<PersonStartScreen />);
    expect(
      screen.getByText(
        /Звёздные войны Mедиафраншиза в жанре эпической космической оперы/i
      )
    ).toBeInTheDocument();
  });
});
