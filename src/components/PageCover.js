import React from "react";
import styled from "styled-components";
import CoverBackgroundImage from "../assets/images/watercolor_bg.png";
import * as RegistryAPI from "../RegistryAPI";
import Couple from "../objects/Couple";
import LoadingSpinner from "./styled-components/LoadingSpinner";

class PageCover extends React.Component {
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
      let name = "";
      if (couple.brideFirstName && couple.groomFirstName) {
        name = couple.brideFirstName + " & " + couple.groomFirstName;
      } else if (couple.brideFirstName) {
        name = couple.brideFirstName;
      } else if (couple.groomFirstName) {
        name = couple.groomFirstName;
      }
      return (
        <CoverOutter>
          <ProfileImage src={couple.countdownImg} />
          <TitleText>{name}</TitleText>

          <WeddingInfo>
            {couple.weddingDate}
            <br />
            {couple.weddingLocation}
          </WeddingInfo>
        </CoverOutter>
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

export default PageCover;

const CoverOutter = styled.div`
  height: auto;
  width: 100%;
  padding: 32px;
  background: url(${CoverBackgroundImage});
  background-size: auto;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-size: 64px;
  line-height: 1.5;
  color: ${props =>
    props.theme.primaryTextColor ? props.theme.color : "#000000"};
  font-family: ${props => props.theme.coupleTitleFont};
`;

const WeddingInfo = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props =>
    props.theme.primaryTextColor ? props.theme.color : "#000000"};
  font-size: 16px;
  font-family: ${props => props.theme.normalTextRegular};
`;



// WEBPACK FOOTER //
// ./src/components/PageCover.js