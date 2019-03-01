import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ListItem from "./ListItem";
import LoadingSpinner from "./styled-components/LoadingSpinner";

class ProductsList extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };

  render() {
    const { products } = this.props;

    return (
      <ProductsListContainer>
        <RegistryTitle>Registry</RegistryTitle>
        <ListItemsContainer>
          {products ? (
            products.map(product => (
              <ListItem
                key={product.id}
                product={product}
                weddingId={this.props.weddingId}
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </ListItemsContainer>
      </ProductsListContainer>
    );
  }
}

export default ProductsList;

const ProductsListContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 56px 48px 56px;
  @media (max-width: 425px) {
    padding: 20px 24px 48px 24px;
  }
`;

const ListItemsContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 1fr;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 425px) {
    grid-auto-rows: unset;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr;
    align-items: self-end;
  }
`;

const RegistryTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  color: ${props =>
    props.theme.primaryTextColor ? props.theme.color : "#000000"};
  font-family: ${props => props.theme.normalTextBold};
  text-transform: uppercase;
  letter-spacing: 4px;
`;



// WEBPACK FOOTER //
// ./src/components/ProductsList.js