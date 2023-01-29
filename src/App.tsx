import React from "react";
import AppGlobalTheme from "./indexStyles";
import Navbar from "./components/navbar/Navbar";
import { AppContainer } from "./AppStyles";
import TopSection from "./components/topSection/TopSection";

const App = (props:{}) => {
    return(
        <AppContainer>
            <AppGlobalTheme />
            <Navbar />
            <TopSection />
        </AppContainer>
       
    );
};

export default App;