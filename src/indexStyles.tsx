import{ createGlobalStyle } from "styled-components";
import ThemeInterface from "./constants/interfaces/theme/ThemeInterface";
import AppTheme from "./styles/theme/AppTheme";


const AppGlobalTheme = createGlobalStyle`

    * {
        margin: 0;

        padding: 0;

        box-sizing: border-box;

        scroll-behavior: smooth;
    }

    body{
        font-family: Inter;
        background-color: ${({ theme }: { theme:ThemeInterface }) => (theme.offWhiteColor)};
    }

    li {
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    main{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

`;

export default AppGlobalTheme;