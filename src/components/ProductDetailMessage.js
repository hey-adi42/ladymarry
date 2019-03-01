import React from "react";
import PropTypes from "prop-types";
import * as Text from "./styled-components/Text";
import styled from "styled-components";
import Button from "./styled-components/Button";
import * as ProductItem from "./styled-components/ProductItem";
import Product from "../objects/Product";
import Validator from "validator";
import InlineError from "./InlineError";
import { Form } from "semantic-ui-react";

class ProductDetailMessage extends React.Component {
  static propTypes = {
    product: PropTypes.instanceOf(Product).isRequired,
    page: PropTypes.object.isRequired,
    forwardToPage: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired
  };

  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      count: "1",
      wayToGive: "bringByGuest",
      carrier: "",
      tracking_number: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  submitForm = e => {
    console.log(this.state.data);
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.updateProduct(this.state.data);
    }
  };

  validate = data => {
    let errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.first_name) errors.first_name = "Can't be blank";
    if (!data.last_name) errors.last_name = "Can't be blank";
    if (!data.wayToGive) errors.wayToGive = "Can't be unselected";
    return errors;
  };

  render() {
    const { product } = this.props;
    const { data, errors } = this.state;

    return (
      <StyledForm onSubmit={this.submitForm}>
        <Title>Leave a message</Title>
        <FormContainer>
          {window.matchMedia("(max-width: 425px)").matches && (
            <InfoContainer>
              <ProductItem.image
                detailPage
                src={product.images[0]}
                alt="itemImage"
              />
              <DetailContainer>
                <ProductItem.name style={{ textAlign: "left" }}>
                  {product.name}
                </ProductItem.name>
                <ProductItem.price
                  style={{ textAlign: "left", color: "#000000", margin: 0 }}
                >
                  ${product.price}
                </ProductItem.price>
              </DetailContainer>
            </InfoContainer>
          )}
          <InputContainer>
            <Form.Field error={!!errors.first_name}>
              <Text.inputText
                type="text"
                placeholder="First Name"
                name="first_name"
                value={data.first_name}
                onChange={this.onChange}
              />
              {errors.first_name && <InlineError text={errors.first_name} />}
            </Form.Field>
            <Form.Field error={!!errors.last_name}>
              <Text.inputText
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={data.last_name}
                onChange={this.onChange}
              />
              {errors.last_name && <InlineError text={errors.last_name} />}
            </Form.Field>
            <Form.Field error={!!errors.email}>
              <Text.inputText
                type="text"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={this.onChange}
              />
              {errors.email && <InlineError text={errors.email} />}
            </Form.Field>
            <Form.Field error={!!errors.message}>
              <Text.textArea
                placeholder="Additional message(Optional)"
                name="message"
                value={data.message}
                onChange={this.onChange}
              />
              {errors.message && <InlineError text={errors.message} />}
            </Form.Field>
          </InputContainer>
          <Spacer vertical />
          <ProductContainer>
            {window.matchMedia("(min-width: 426px)").matches && (
              <InfoContainer>
                <ProductItem.image src={product.images[0]} alt="itemImage" />
                <DetailContainer>
                  <ProductItem.name
                    style={{ textAlign: "center", whiteSpace: "unset" }}
                  >
                    {product.name}
                  </ProductItem.name>
                  <ProductItem.price style={{ color: "#000000" }}>
                    ${product.price}
                  </ProductItem.price>
                </DetailContainer>
              </InfoContainer>
            )}
            <div style={{ display: "flex" }}>
              <Text.title3>How many did you buy?</Text.title3>
              <Text.inputText
                type="text"
                name="count"
                value={data.count}
                style={{
                  width: "20%",
                  textAlign: "center",
                  padding: "0",
                  marginLeft: "8px"
                }}
                onChange={this.onChange}
              />
            </div>
            <RadioBtnContainer>
              <input
                type="radio"
                name="wayToGive"
                value="bringByGuest"
                checked={data.wayToGive === "bringByGuest"}
                onChange={this.onChange}
              />
              <label htmlFor="bringByGuest">
                <Text.text style={{ padding: "0 8px" }}>
                  I'll bring the gift(s) to the wedding.
                </Text.text>
              </label>
            </RadioBtnContainer>
            <RadioBtnContainer>
              <input
                type="radio"
                name="wayToGive"
                value="ship"
                checked={data.wayToGive === "ship"}
                onChange={this.onChange}
              />
              <label htmlFor="ship">
                <Text.text style={{ padding: "0 8px" }}>
                  The gift(s) will be delivered.
                </Text.text>
              </label>
              {data.wayToGive === "ship" && (
                <ShippingInfoContainer>
                  <Text.inputText
                    type="text"
                    name="carrier"
                    placeholder="Carrier"
                    value={data.carrier}
                    onChange={this.onChange}
                  />
                  <Text.inputText
                    type="text"
                    name="tracking_number"
                    placeholder="Tracking Number"
                    value={data.tracking_number}
                    onChange={this.onChange}
                  />
                </ShippingInfoContainer>
              )}
            </RadioBtnContainer>
          </ProductContainer>
        </FormContainer>
        <StyledButton primary>Submit</StyledButton>
      </StyledForm>
    );
  }
}

export default ProductDetailMessage;

const StyledButton = styled(Button)`
  width: 30%;
  margin-top: 56px;

  @media (max-width: 425px) {
    width: 80%;
    margin: 36px auto 40px auto;
  }
`;

const StyledForm = styled(Form)`
  margin-left: 48px;
  margin-right: 48px;
  @media (max-width: 425px) {
    margin: 24px 0 0 0;
    overflow: auto;
  }
`;

const Title = styled.h2`
  @media (max-width: 425px) {
    text-align: center;
    padding-bottom: 24px;
  }
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  grid-gap: 56px;
  align-items: center;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    padding: 0 24px;
    grid-gap: 16px;
  }
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Spacer = styled.div`
  background-color: black;
  width: ${props => (props.vertical ? "0.5px" : "80%")};
  height: ${props => (props.horizontal ? "0.5px" : "80%")};
  margin: auto;
`;

const InfoContainer = styled.section`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: 1fr;
  margin-bottom: 24px;

  @media (max-width: 425px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;

  @media (max-width: 425px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    justify-content: center;
  }
`;

const RadioBtnContainer = styled.div`
  padding: 8px 0 0 0;
`;

const ShippingInfoContainer = styled.div`
  padding-top: 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: (auto, minmax(200px, 1fr));
`;



// WEBPACK FOOTER //
// ./src/components/ProductDetailMessage.js