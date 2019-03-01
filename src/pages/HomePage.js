import React from "react";
import Cover from "../components/PageCover";
import ProductsList from "../components/ProductsList";
import Wrapper from "../components/styled-components/Wrapper";
import ProductDetail from "../components/ProductDetail";
import Product from "../objects/Product";
import ShippingAddress from "../objects/ShippingAddress";
import * as RegistryAPI from "../RegistryAPI";
import { Route } from "react-router-dom";

class HomePage extends React.Component {
  state = {
    products: [],
    shippingAddress: undefined
  };

  async componentDidMount() {
    try {
      const data = await RegistryAPI.getAll(this.props.match.params.weddingId);
      var products = [];
      if (data.items) {
        data.items.map(item => {
          const product = Product.createProductFromObject(item);
          products.push(product);
        });
      }
      products.sort((a, b) => {
        if (a.status && !b.status) {
          return 1;
        }
        if (!a.status && b.status) {
          return -1;
        }

        return 0;
      });

      let shippingAddress = new ShippingAddress();
      if (data.shipping_address) {
        shippingAddress = ShippingAddress.createShippingAddressFromObject(
          data.shipping_address
        );
      }
      this.setState({
        products: products,
        shippingAddress: shippingAddress
      });
    } catch (err) {
      console.log(err);
    }
  }

  updateProductStatus = productId => {
    const newProducts = this.state.products.map(p => {
      if (p.id == productId) {
        //TODO: Replace this with return value
        p.status = "Purchased";
      }
      return p;
    });
    this.setState({
      ...this.state,
      products: newProducts
    });
  };

  render() {
    return (
      <Wrapper>
        <Cover weddingId={this.props.match.params.weddingId} />
        <ProductsList
          products={this.state.products}
          weddingId={this.props.match.params.weddingId}
        />
        <Route
          path="/registry/share/:weddingId/products/:productId"
          render={({ history, match }) => (
            <ProductDetail
              product={
                this.state.products.filter(
                  product => product.id == match.params.productId
                )[0]
              }
              shippingAddress={this.state.shippingAddress}
              updateProductStatus={this.updateProductStatus}
              match={match}
              onTouchCancel={() => {
                history.push(
                  `/registry/share/${this.props.match.params.weddingId}`
                );
              }}
            />
          )}
        />
      </Wrapper>
    );
  }
}

export default HomePage;



// WEBPACK FOOTER //
// ./src/pages/HomePage.js