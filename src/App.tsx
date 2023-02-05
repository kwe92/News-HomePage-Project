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
    </AppContainer>
  );
};

export default App;
