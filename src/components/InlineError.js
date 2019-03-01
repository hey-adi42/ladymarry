import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ text }) => (
  <span style={{ color: "#ae5856", fontSize: "12px", paddingTop: "8px" }}>
    {text}
  </span>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;



// WEBPACK FOOTER //
// ./src/components/InlineError.js