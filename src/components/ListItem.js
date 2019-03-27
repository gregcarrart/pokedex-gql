import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GridTile = styled.div`
  height: 0;
  width: 100%;
  margin: 10px;
  border: 1px solid #000;
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;

  @media(min-width: 600px) {
    width: calc(50% - 20px);
    padding-bottom: 50%;
  }

  @media(min-width: 992px) {
    width: calc(20% - 20px);
    padding-bottom: 15%;
  }
`;

const BackgroundImage = styled.div`
  width: 100%;
  background-image: url(${props => props.img});
  background-size: 50% auto;
  background-position: 50% 25%;
  background-repeat: no-repeat;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 2px 10px;
  background: rgba(0,0,0,0.7);
  border-radius: 5px;
  border-top: 1px solid #666;
  color: #fff;
`;

const NameHeader = styled.h3`
  font-size: 1em;
  margin: 0 0 2px 0;
`;

const InfoParagraph = styled.p`
  font-size: 0.75em;
  margin: 0;
`;

const LinkElem = styled(Link)`
  font-size: 0.75em;
  color: #fff;
`;

const typeRender = (types) => {
  return types.map((type, i) => {
    if (i >= types.length - 1) {
      return type;
    }

    return `${type}, `;
  });
};

const ListItem = ({ pokemon }) => (
  <GridTile>
    <BackgroundImage img={ pokemon.image } />
    <InfoContainer>
      <NameHeader>{ pokemon.name } - { pokemon.number }</NameHeader>
      <InfoParagraph>maxCP: { pokemon.maxCP } / maxHP: { pokemon.maxHP }</InfoParagraph>
      <InfoParagraph>{ typeRender(pokemon.types) }</InfoParagraph>
      <LinkElem to={`/detail/${pokemon.id}`}>More Info</LinkElem>
    </InfoContainer>
  </GridTile>
);

/**
 * @component
 */
export default ListItem;