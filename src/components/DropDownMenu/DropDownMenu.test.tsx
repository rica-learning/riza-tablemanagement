import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DropDownMenu from './DropDownMenu';

describe('<DropDownMenu />', () => {
  test('it should mount', () => {
    render(<DropDownMenu />);
  });
});