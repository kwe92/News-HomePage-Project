import React from "react";
import AppGlobalTheme from "./indexStyles";
import Navbar from "./components/navbar/Navbar";
import { AppContainer } from "./AppStyles";
interface Props{

};

const App = (props:Props) => {
    return(
        <AppContainer>
            <AppGlobalTheme />
            <Navbar />
        </AppContainer>
       
    );
};

export default App;