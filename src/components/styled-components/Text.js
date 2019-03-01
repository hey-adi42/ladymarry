import styled from "styled-components";

export const title1 = styled.span`
  display: block;
  font-size: 22px;
  color: #000000;
  font-family: ${props => props.theme.normalTextBold};
  padding: 8px 0;
  vertical-align: center;
`;

export const title2 = styled.span`
  display: block;
  font-size: 18px;
  color: #000000;
  font-family: ${props => props.theme.normalTextBold};
  padding: 8px 0;
  vertical-align: center;
`;

export const title3 = styled.span`
  display: block;
  font-size: 15px;
  color: #000000;
  font-family: ${props => props.theme.normalTextBold};
  padding: 8px 0;
  vertical-align: center;
`;

export const smallText = styled.span`
  display: block;
  font-size: 12px;
  color: #b4b4b4;
  font-family: ${props => props.theme.normalTextRegular};
  padding: 8px 0;
`;

export const text = styled.span`
  font-size: 14px;
  color: #000000
  font-family: ${props => props.theme.normalTextRegular};
  padding: 8px 0;
  vertical-align: center;
`;

export const inputText = styled.input.attrs({
  padding: props => props.size || "10px"
})`
  font-size: 14px;
  width: 100%;
  max-height: 40px;
  padding: ${props => props.padding};
  name: ${props => props.name};
`;

export const textArea = styled.textarea`
  border-color: #ddd;
  padding: 10px;
  height: 100px;
  font-size: 14px;
  width: 100%;
`;



// WEBPACK FOOTER //
// ./src/components/styled-components/Text.js