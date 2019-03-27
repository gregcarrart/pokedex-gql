import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom'; 
import ListItem from './ListItem';

describe('ListItem component tests', () => {
  test('should match snapshot', () => {
    const pokemon = {
      name: 'Bulbasaur',
      id: 'uakdj212312',
      number: '001',
      maxCP: '24123',
      maxHP: '12345',
      types: ['Plant'],
    }
    const component = renderer.create(
      <Router>
        <ListItem pokemon={pokemon} />
      </Router>,
    );
    const tree = component.toJSON();
  });
});
