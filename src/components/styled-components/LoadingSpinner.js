import styled from "styled-components";
import MDSpinner from "react-md-spinner";
import React from "react";

const LoadingSpinner = () => {
  return (
    <Spinner>
      <MDSpinner size="50" singleColor="#FE3E6D" style={{ margin: "0 auto" }} />
    </Spinner>
  );
};

export default LoadingSpinner;

const Spinner = styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
`;



// WEBPACK FOOTER //
// ./src/components/styled-components/LoadingSpinner.js