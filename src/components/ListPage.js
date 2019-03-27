import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import ListItem from './ListItem';

export const GET_POKEMON = gql`
  {
    pokemons(first: 10) {
      id
      number
      name
      maxCP
      maxHP
      image
      types
    }
  }
`;

const HeaderTitle = styled.h1`
  text-align: center;
`;

const GridContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 25px auto;
  flex-flow: row wrap;
`;

const ListPage = () => (
  <Query query={GET_POKEMON}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          <HeaderTitle>Pokedex</HeaderTitle>
          <GridContainer>
            { 
              data.pokemons.map(pokemon => (
                <ListItem key={pokemon.id} pokemon={pokemon} /> 
              ))
            }
          </GridContainer>
        </div>
      );
    }}
  </Query>
);
  
/**
 * @component
 */
export default ListPage;