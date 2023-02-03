import styled from "styled-components";
import { Column } from "./styles/layout/Flex";

const AppContainer = styled(Column)`

    width: 77.5%;

    height: 87.5%;

    align-items: flex-start;

    justify-content: flex-start;

    gap: 4%;

    // background: #475c6c;

    // padding: 10rem 10rem;

    @media screen and (max-width:1024px){
        width: 85%;
        height: auto;
        gap: 1.75rem;
    }

    @media screen and (max-width:450px){
        width: 90%;
    }

`;

export {
        AppContainer
    , 
};