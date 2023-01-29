import React from "react";
import AppGlobalTheme from "./indexStyles";
import Navbar from "./components/navbar/Navbar";
import { AppContainer } from "./AppStyles";
import TopSection from "./components/topSection/TopSection";
import BottomSection from "./components/bottomSection/BottomSection";

const App = (props:{}) => {
    return(
        <AppContainer>
            <AppGlobalTheme />
            <Navbar />
            <TopSection />
            <BottomSection />
        </AppContainer>
       
    );
};

export default App;