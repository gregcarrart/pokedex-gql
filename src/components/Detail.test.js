import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { GET_POKEMON_DETAIL } from './Detail';
import Detail from './Detail';

const mocks = [
  {
    request: {
      query: GET_POKEMON_DETAIL,
      variables: {
        id: 'UG9rZW1vbjowMDI=',
      },
    },
    result: {
      data: {
        pokemon: { id: '1', name: 'Bulbasaur' },
      },
    },
  
  },
];
describe('Detail component tests', () => {
  test('should match snapshot', () => {
    const component = renderer.create(
      <Router>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Detail id="UG9rZW1vbjowMDI=" location={{ pathname: 'UG9rZW1vbjowMDI=' }}/>
        </MockedProvider>
      </Router>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
