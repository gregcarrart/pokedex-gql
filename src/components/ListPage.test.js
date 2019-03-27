import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import { GET_POKEMON } from './ListPage';
import { BrowserRouter as Router } from 'react-router-dom';
import ListPage from './ListPage';

const mocks = [
  {
    request: {
      query: GET_POKEMON,
    },
    result: {
      data: {
        pokemon: { id: '1', name: 'Bulbasaur' },
      },
    },
  
  },
];
describe('ListPage component tests', () => {
  test('should match snapshot', () => {
    const component = renderer.create(
      <Router>
        <MockedProvider mocks={mocks} addTypename={false}>
          <ListPage />
        </MockedProvider>
      </Router>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
