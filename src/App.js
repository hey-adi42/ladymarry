import React, { Component } from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";

const theme = {
  coupleTitleFont: "stylish-calligraphy-demo",
  normalTextRegular: "eau-sans-book",
  normalTextBold: "eau-sans-bold",
  primaryTextColor: "#000000",
  primaryThemeColor: "#FE3E6D",
  secondaryThemeColor: "rgba(254, 62, 109, 0.4)",
  titleTextColor: "#000000",
  descriptionTextColor: "#4A4A4A",
  priceTextColor: "#D30101"
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Route path="/registry/share/:weddingId" component={HomePage} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;