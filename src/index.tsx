import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme/AppTheme";

const ele = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(ele);

root.render(
    <React.StrictMode>
        <ThemeProvider theme = {Theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
)