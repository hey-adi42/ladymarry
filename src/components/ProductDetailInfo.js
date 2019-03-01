import React from "react";
import PropTypes from "prop-types";
import Button from "./styled-components/Button";
import styled from "styled-components";
import Product from "../objects/Product";
import * as ProductItem from "./styled-components/ProductItem";

class ProductDetailInfo extends React.Component {
  static propTypes = {
    product: PropTypes.instanceOf(Product).isRequired,
    page: PropTypes.object.isRequired,
    forwardToPage: PropTypes.func.isRequired
  };

  handleClick = page => {
    this.props.forwardToPage(page);
  };

  render() {
    const { product } = this.props;
    return (
      <InfoContainer>
        <ProductItem.image detailPage src={product.images[0]} alt="itemImage" />
        <DetailContainer>
          <ProductItem.name detailPage>{product.name}</ProductItem.name>
          <ProductItem.price detailPage>${product.price}</ProductItem.price>
          <ButtonsContainer>
            <Button
              primary
              detailPage
              onClick={() => {
                this.handleClick(this.props.page.ShippingInfo);
              }}
            >
              Buy
            </Button>
            <Button
              detailPage
              onClick={() => {
                this.handleClick(this.props.page.LeaveMessage);
              }}
            >
              I've bought this
            </Button>
          </ButtonsContainer>
          <ProductItem.description detailPage>
            {product.description}
          </ProductItem.description>
        </DetailContainer>
      </InfoContainer>
    );
  }
}

export default ProductDetailInfo;

const InfoContainer = styled.section`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 1fr;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    overflow: auto;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  padding-bottom: 16px;
  margin: 0 5px;

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;



// WEBPACK FOOTER //
// ./src/components/ProductDetailInfo.js