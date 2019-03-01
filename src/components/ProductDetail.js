import React from "react";
import styled from "styled-components";
import * as RegistryAPI from "../RegistryAPI";
import Close from "../assets/images/close_btn.svg";
import Back from "../assets/images/back_btn.svg";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailShippingInfo from "./ProductDetailShippingInfo";
import ProductDetailMessage from "./ProductDetailMessage";
import ProductDetailFinalPage from "./ProductDetailFinalPage";
import Product from "../objects/Product";
import ShippingAddress from "../objects/ShippingAddress";
import LoadingSpinner from "./styled-components/LoadingSpinner";
import PropTypes from "prop-types";

class ProductDetail extends React.Component {
  static propTypes = {
    product: PropTypes.instanceOf(Product).isRequired,
    shippingAddress: PropTypes.instanceOf(ShippingAddress).isRequired,
    updateProductStatus: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    onTouchCancel: PropTypes.func.isRequired
  };

  Page = {
    ProductDetail: 1,
    ShippingInfo: 2,
    LeaveMessage: 3,
    Submitted: 4
  };

  state = {
    currentPage: this.Page.ProductDetail,
    previousPages: new Array(),
    errors: ""
  };

  updateProduct = async formData => {
    const { match } = this.props;
    if (formData) {
      delete formData["wayToGive"];
      formData["wedding_id"] = match.params.weddingId;
      formData["item_id"] = match.params.productId;
      formData["status"] = 1;
      try {
        const res = await RegistryAPI.updateProduct(formData);
        this.forwardToPage(this.Page.Submitted);
        this.props.updateProductStatus(match.params.productId);
      } catch (err) {
        console.log(err);
      }
    }
  };

  forwardToPage = page => {
    let newPrePages = this.state.previousPages.concat([this.state.currentPage]);
    this.setState({
      ...this.state,
      currentPage: page,
      previousPages: newPrePages
    });
  };

  backToPage = () => {
    let newPrePages = this.state.previousPages.slice();
    let newPage = newPrePages.pop();
    this.setState({
      currentPage: newPage,
      previousPages: newPrePages
    });
  };

  getCurrentPage = () => {
    const { product } = this.props;

    if (this.state.errors) {
      return <h3>{this.state.errors}</h3>;
    } else {
      switch (this.state.currentPage) {
        case this.Page.ProductDetail:
          return product ? (
            <ProductDetailInfo
              page={this.Page}
              product={product}
              forwardToPage={this.forwardToPage}
              backToPage={this.backToPage}
            />
          ) : (
            <LoadingSpinner />
          );
        case this.Page.ShippingInfo:
          return product ? (
            <ProductDetailShippingInfo
              page={this.Page}
              shippingAddress={
                this.props.shippingAddress || new ShippingAddress()
              }
              product={product}
              forwardToPage={this.forwardToPage}
              backToPage={this.backToPage}
            />
          ) : (
            <LoadingSpinner />
          );
        case this.Page.LeaveMessage:
          return product ? (
            <ProductDetailMessage
              page={this.Page}
              shippingAddress={this.props.shippingAddress}
              product={product}
              forwardToPage={this.forwardToPage}
              backToPage={this.backToPage}
              updateProduct={this.updateProduct}
            />
          ) : (
            <LoadingSpinner />
          );
        case this.Page.Submitted:
          return (
            <ProductDetailFinalPage
              forwardToPage={this.forwardToPage}
              backToPage={this.backToPage}
              updateProduct={this.updateProduct}
              weddingId={this.props.match.params.weddingId}
              onTouchCancel={this.props.onTouchCancel}
            />
          );
        default:
      }
    }
  };

  render() {
    return (
      <DetailPageContainer>
        <DetailPage>
          <DetailHeader>
            {this.state.previousPages.length !== 0 && (
              <BackBtn onClick={this.backToPage} />
            )}
            <CloseBtn onClick={this.props.onTouchCancel} />
          </DetailHeader>
          {this.getCurrentPage()}
        </DetailPage>
      </DetailPageContainer>
    );
  }
}

export default ProductDetail;

const DetailPageContainer = styled.div`
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DetailPage = styled.div`
  margin: 40px auto 40px auto;
  width: 80%;
  height: auto;
  max-width: 800px;
  min-height: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 40px 24px;

  @media (max-width: 425px) {
    padding: 0;
  }
`;

const DetailHeader = styled.div`
  display: flex;
  margin-bottom: 24px;

  @media (max-width: 425px) {
    padding: 12px 12px 0 12px;
    margin-bottom: 12px;
  }
`;

const CloseBtn = styled.div`
  background-image: url(${Close});
  height: 30px;
  width: 30px;
  background-size: 28px;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: auto;
`;

const BackBtn = styled.div`
  background-image: url(${Back});
  height: 30px;
  width: 30px;
  background-size: 28px;
  background-position: center;
  background-repeat: no-repeat;
`;



// WEBPACK FOOTER //
// ./src/components/ProductDetail.js