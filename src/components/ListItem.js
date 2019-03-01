import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./styled-components/Button";
import * as ProductItem from "./styled-components/ProductItem";
import Product from "../objects/Product";
import { Link } from "react-router-dom";
import PurchasedImage from "../assets/images/purchased.png";

class ListItem extends React.Component {
  static propTypes = {
    product: PropTypes.instanceOf(Product).isRequired,
    weddingId: PropTypes.string.isRequired
  };

  handleClick = () => {
    this.props.showProductDetail(this.props.product.id);
  };

  render() {
    const { product } = this.props;
    return (
      <div>
        <ListItemContainer>
          {product.status ? (
            <ProductItem.image
              src={product.images[0]}
              alt="itmeImage"
              noPadding
            >
              <PurchaseImg src={PurchasedImage} alt="purchased" />
            </ProductItem.image>
          ) : (
            <ProductItem.image src={product.images[0]} alt="itmeImage" />
          )}

          <ProductItem.name>{product.name}</ProductItem.name>
          <ProductItem.price>${product.price}</ProductItem.price>
          {product.status ? (
            <ProductItem.status>Purchased with love</ProductItem.status>
          ) : (
            <StyledLink
              to={`/registry/share/${this.props.weddingId}/products/${
                product.id
              }`}
            >
              <Button primary>Buy</Button>
            </StyledLink>
          )}
        </ListItemContainer>
      </div>
    );
  }
}

export default ListItem;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ListItemContainer = styled.div`
  padding: 20px 12px 28px 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  @media (max-width: 425px) {
    padding-bottom: 0;
  }
`;

const PurchaseImg = styled.div`
  width: inherit;
  height: auto;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  display: block;
  width: 100%;
  padding-bottom: ${props => (props.noPadding ? "0" : "100%")};
  position: relative;
  object-fit: cover;
  margin: 0 auto;
`;



// WEBPACK FOOTER //
// ./src/components/ListItem.js