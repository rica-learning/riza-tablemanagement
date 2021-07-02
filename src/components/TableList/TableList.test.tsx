import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableList from './TableList';

describe('<TableList />', () => {
  test('it should mount', () => {
    render(<TableList />);
    

  });
});