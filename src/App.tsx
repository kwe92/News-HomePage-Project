import React from "react";
import AppGlobalTheme from "./indexStyles";
import Navbar from "./components/navbar/Navbar";
import { AppContainer } from "./AppStyles";
import TopSection from "./components/topSection/TopSection";
import BottomSection from "./components/bottomSection/BottomSection";
// TODO: Add created by at the bottom of the page
const App = (props: {}) => {
  return (
    <AppContainer>
      <AppGlobalTheme />
      <Navbar />
      <TopSection />
      <BottomSection />
      <div
        style={{
          //   marginTop: "0rem",
          position: "relative",
          top: 50,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        Challenge by Frontend Mentor. Coded by Kweayon Clark.
      </div>
    </AppContainer>
  );
};

export default App;
