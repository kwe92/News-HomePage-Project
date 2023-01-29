import styled from "styled-components";
import { Column, Row } from "../../styles/layout/Flex";

const TopSectionMainContainer = styled(Row)`

 width: 100%;

 height: 62.5%;

 background: #eed7a1;

 align-items: flex-start;

 justify-content: flex-start;

gap: 5%;

`;

const ContentContainer1 = styled(Column)`

    height: 100%;

    width: 62.5%;

    background: #f8efd2;

`;


const ContentContainer2 = styled(Column)`

    height: 100%;

    width: 32.5%;

    background: #cd8b62;

`; 

export {
      TopSectionMainContainer
    , ContentContainer1
    , ContentContainer2
}

