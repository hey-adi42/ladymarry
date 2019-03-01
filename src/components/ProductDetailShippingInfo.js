import React from "react";
import PropTypes from "prop-types";
import Button from "./styled-components/Button";
import * as ProductItem from "./styled-components/ProductItem";
import styled from "styled-components";
import Product from "../objects/Product";
import ShippingAddress from "../objects/ShippingAddress";
import * as Text from "./styled-components/Text";

class ProductDetailShippingInfo extends React.Component {
  static propTypes = {
    product: PropTypes.instanceOf(Product).isRequired,
    page: PropTypes.object.isRequired,
    forwardToPage: PropTypes.func.isRequired,
    shippingAddress: PropTypes.instanceOf(ShippingAddress).isRequired
  };

  handleClick = page => {
    this.props.forwardToPage(page);
  };

  openWindow = url => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  render() {
    const { product, shippingAddress } = this.props;
    return (
      <InfoContainer>
        <ProductItem.image detailPage src={product.images[0]} alt="itemImage" />
        {/* <DetailContainer>
          <EmailTitle1>What's your email address?</EmailTitle1>
          <Text.smallText>
            We'll reserve this gift and make sure no one else tries to buy it
            until we confirm if you've bought it.
          </Text.smallText>
          <form>
            <EmailTitle2>Enter your email</EmailTitle2>
            <Text.inputText placeholder="example@example.com" type="text" />
          </form>
          <Text.smallText>
            Don't worry, we'll never share your info with any third parties.
            Read our Privacy Policy
          </Text.smallText>
        </DetailContainer> */}
        {shippingAddress.address1 ? (
          <DetailContainer>
            <AddressTitle textAlign="left">
              Want to send this gift directly to the couple? Copy this address:
            </AddressTitle>
            <AddressText>
              {shippingAddress.address1 || ""}
              <br />
              {shippingAddress.address2 || ""}
              <br />
              {`${shippingAddress.city || ""}, ${shippingAddress.state ||
                ""} ${shippingAddress.zipcode || ""}`}
              <br />
            </AddressText>
            <Text.smallText>
              Please come back to the couple's LadyMarry registry to tell us if
              you bought this, so we can help keep track of all their gifts.
            </Text.smallText>
          </DetailContainer>
        ) : (
          <DetailContainer>
            <AddressTitle textAlign="left">
              You may need to bring the gift to the weddding directly since the
              couple didn't fillout their shipping information.
            </AddressTitle>
          </DetailContainer>
        )}

        <Button
          primary
          detailPage
          shippingInfo
          onClick={() => {
            this.openWindow(product.purchaseUrl);
          }}
        >
          Buy
        </Button>

        <Button
          detailPage
          shippingInfo
          onClick={() => {
            this.handleClick(this.props.page.LeaveMessage);
          }}
        >
          I've bought this
        </Button>
      </InfoContainer>
    );
  }
}

export default ProductDetailShippingInfo;

const InfoContainer = styled.section`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    overflow: auto;
    grid-gap: 16px;
    padding-bottom: 40px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const AddressTitle = styled(Text.title2)`
  padding-top: 0;
  margin-top: 0;
  text-align: ${props => props.textAlign};

  @media (max-width: 425px) {
    padding: 0 24px 0 24px;
  }
`;

const AddressText = styled(Text.text)`
  padding-bottom: 16px;
  display: block;
`;



// WEBPACK FOOTER //
// ./src/components/ProductDetailShippingInfo.js