import styled from "styled-components";

export default styled.button`
  background-color: ${props =>
    props.primary ? props.theme.primaryThemeColor : "#FFFFFF"};
  border: ${props => (props.primary ? "none" : "1 solid")};
  border-color: ${props =>
    props.primary ? "none" : props.theme.primaryThemeColor};
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  color: ${props =>
    props.primary ? "#FFFFFF" : props.theme.primaryThemeColor};
  display: block;
  width: ${props =>
    props.detailPage ? (props.shippingInfo ? "40%" : "100%") : "80%"};
  height: 40px;
  margin: ${props => (props.detailPage ? "0 0" : "0 auto")};
  margin-left: ${props =>
    props.shippingInfo ? (props.primary ? "auto" : "0") : "auto"};

  &:hover {
    background-color: ${props =>
      props.primary ? props.theme.secondaryThemeColor : "#FFFFFF"};
    color: ${props =>
      props.primary ? "#FFFFFF" : props.theme.secondaryThemeColor};
    border-color: ${props =>
      props.primary ? "none" : props.theme.secondaryThemeColor};
  }

  @media (max-width: 425px) {
    margin: 0 auto;
    width: 80%;
  }
`;



// WEBPACK FOOTER //
// ./src/components/styled-components/Button.js