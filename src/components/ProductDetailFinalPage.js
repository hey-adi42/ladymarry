import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as RegistryAPI from "../RegistryAPI";
import Couple from "../objects/Couple";
import LoadingSpinner from "./styled-components/LoadingSpinner";
import Button from "./styled-components/Button";

class ProductDetailFinalPage extends React.Component {
  state = {
    couple: undefined
  };

  async componentDidMount() {
    try {
      this.setState({
        couple: Couple.createCoupleFromObject(
          await RegistryAPI.getProfile(this.props.weddingId)
        )
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { couple } = this.state;

    if (couple) {
      return (
        <Container>
          <ProfileImage src={couple.countdownImg} />
          <TitleText>Thank you!</TitleText>
          <Button primary detailPage onClick={this.props.onTouchCancel}>
            Done
          </Button>
        </Container>
      );
    } else {
      return (
        <div style={{ width: "100%", height: "300px" }}>
          <LoadingSpinner />
        </div>
      );
    }
  }
}

export default ProductDetailFinalPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  padding: 56px;
`;

const ProfileImage = styled.img`
  margin: 0 auto;
  width: 173px;
  height: 173px;
  object-fit: cover;
  border-radius: 50%;
`;

const TitleText = styled.h1`
  text-align: center;
  font-size: 44px;
  line-height: 1.5;
  color: ${props =>
    props.theme.primaryTextColor ? props.theme.color : "#000000"};
  font-family: ${props => props.theme.normalTextRegular};

  @media (max-width: 425px) {
    font-size: 28px;
  }
`;



// WEBPACK FOOTER //
// ./src/components/ProductDetailFinalPage.js