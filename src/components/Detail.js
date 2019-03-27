import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import gql from 'graphql-tag';

export const GET_POKEMON_DETAIL = gql`
  query Pokemon($id: String!) {
    pokemon(id: $id) {
      id
      number
      name
      maxCP
      maxHP
      image
      types
      evolutions {
        id
        number
        name
        maxCP
        maxHP
        image
        types
      }
    }
  }
`;

const HeaderTitle = styled.h1`
  text-align: center;
`;

const DetailCard = styled.div`
  width: 100%;
  display: flex;
  max-width: 600px;
  margin: 25px auto;
  flex-flow: row wrap;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 15px;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  margin: 10px;
`;

const InfoContainer = styled.div`
  margin: 10px;
`;

const InfoParagraph = styled.p`
  font-size: 1.4em;
  margin: 0;
`;

const EvolutionContainer = styled.div`
  width: 100%;
`;

const EvolutionListItem = styled.div`
  display: flex;
  padding: 15px 5px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 0;
  align-items: center;
`;

const EvolutionImage = styled.img`
  width: 50px;
  height: 50px;
`;

const EvolutionName = styled(Link)`
  color: #000;
  margin-left: 10px;
`;

const LinkElm = styled(Link)`
  color: #000;
  text-align: center;
  display: block;
`;

const typeRender = (types) => {
  return types.map((type, i) => {
    if (i >= types.length - 1) {
      return type;
    }

    return `${type}, `;
  });
};

const Detail = (props) => (
  <Query query={GET_POKEMON_DETAIL} variables={{id: props.location.pathname.split('/detail/')[1]}}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const pokemon = data.pokemon;
          return (
            <div>
              <HeaderTitle>{pokemon.name}</HeaderTitle>
              <DetailCard>
                <div>
                  <Image src={pokemon.image} />
                </div>
                <InfoContainer>
                  <InfoParagraph>Number: {pokemon.number}</InfoParagraph>
                  <InfoParagraph>MaxCP: {pokemon.maxCP}</InfoParagraph>
                  <InfoParagraph>MaxHP: {pokemon.maxHP}</InfoParagraph>
                  <InfoParagraph>{typeRender(pokemon.types)}</InfoParagraph>
                </InfoContainer>
                <EvolutionContainer>
                  <h2>Evolutions</h2>
                  {
                    pokemon.evolutions ? (
                      pokemon.evolutions.map(ev => (
                        <EvolutionListItem key={ev.id}>
                          <EvolutionImage src={ev.image} />
                          <EvolutionName to={`/detail/${ev.id}`}>{ev.name}</EvolutionName>
                        </EvolutionListItem>
                      ))
                    ) : (
                      'No More Evolutions'
                    )
                  }
                </EvolutionContainer>
              </DetailCard>
              <LinkElm to='/'>Home</LinkElm>
            </div>
          );
        }}
      </Query>
);
  
/**
 * @component
 */
export default withRouter(Detail);