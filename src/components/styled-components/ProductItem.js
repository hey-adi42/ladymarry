import styled from "styled-components";
import * as Text from "./Text.js";

export const description = styled(Text.smallText)`
  width: 100%;
  height: auto;
  position: relative;
  object-fit: cover;
  margin: 0 auto;
  @media (max-width: 425px) {
    padding: 16px 24px 40px 24px;
  }
`;

export const image = styled.div`
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
  @media (max-width: 425px) {
    width: ${props => (props.detailPage ? "40%" : "80%")};
  }
`;

export const name = styled.span`
  margin: 0 auto;
  text-align: ${props => (props.detailPage ? "left" : "center")};
  color: ${props =>
    props.theme.primaryTextColor ? props.theme.primaryTextColor : "#000000"};
  font-family: ${props =>
    props.detailPage
      ? props.theme.normalTextBold
      : props.theme.normalTextRegular};
  padding-top: ${props => (props.detailPage ? "0" : "16px")};
  font-size: ${props => (props.detailPage ? "22px" : "16px")};
  text-overflow: ${props => (props.detailPage ? "" : "ellipsis")};
  overflow: ${props => (props.detailPage ? "" : "hidden")};
  white-space: ${props => (props.detailPage ? "" : "nowrap")};
  width: 100%;

  @media (max-width: 425px) {
    text-align: center;
    white-space: normal;
    font-size: ${props => (props.detailPage ? "18px" : "14px")};
  }
`;

export const price = styled.span`
  margin: ${props => (props.detailPage ? "0 0" : "0 auto")};
  text-align: ${props => (props.detailPage ? "left" : "center")};
  color: ${props =>
    props.detailPage
      ? "#000000"
      : props.theme.priceTextColor ? props.theme.priceTextColor : "red"};
  font-size: ${props =>
    props.detailPage ? "20px" : props.theme.normalTextRegular};
  font-family: ${props => props.theme.normalTextRegular};
  padding-top: ${props => (props.detailPage ? "24px" : "8px")};
  padding-bottom: ${props => (props.detailPage ? "48px" : "16px")};

  @media (max-width: 425px) {
    text-align: center;
    font-size: ${props => (props.detailPage ? "16px" : props.theme.smallText)};
  }
`;

export const status = styled.span`
  margin: ${props => (props.detailPage ? "0 0" : "0 auto")};
  text-align: ${props => (props.detailPage ? "left" : "center")};
  color: ${props => props.theme.primaryThemeColor};
  font-size: 14px;
  font-family: ${props => props.theme.normalTextBold};
  padding-top: ${props => (props.detailPage ? "24px" : "8px")};
  padding-bottom: ${props => (props.detailPage ? "48px" : "16px")};
`;



// WEBPACK FOOTER //
// ./src/components/styled-components/ProductItem.js