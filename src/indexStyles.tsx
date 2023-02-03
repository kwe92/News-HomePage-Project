import{ createGlobalStyle } from "styled-components";
import ThemeInterface from "./constants/interfaces/theme/ThemeInterface";


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

        @media screen and (max-width:1024px){
            height: auto;
        }
    }

`;

export default AppGlobalTheme;