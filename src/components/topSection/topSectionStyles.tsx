import styled from "styled-components";
import { images } from "../../constants/images";
import ThemeInterface from "../../constants/interfaces/theme/ThemeInterface";
import { Column, Row } from "../../styles/layout/Flex";

const TopSectionMainContainer = styled(Row)`

 width: 100%;

 height: 65%;

 background: #eed7a1;

 align-items: flex-start;

 justify-content: flex-start;
 
 gap: 3.5%;

`;

const ContentContainer1 = styled(Column)`

    align-items: flex-start;

    justify-content: flex-start;

    height: 100%;

    width: 65.5%;

    gap: 5%;

    background: #f8efd2;

`;


const ContentContainer2 = styled(Column)`

    height: 100%;

    width: 34.5%;

    background: #cd8b62;

`; 

const TopImageContainer = styled(Row)`

    width: 100%;

    height: 55%;

    background: #d3cdae;

    background-image: url(${images.imageWeb3Mobiile});

    background-size: cover;

`;

const TopContainerImage = styled.img`

    max-width: 100%;
    
    width: 100%;

    object-fit: cover;

`;

const TopContainerBody = styled(Row)`

    align-items: flex-start;

    justify-content: flex-start;

    width: 100%;

    height: 45%;

    background: #bf6164;

`;

const ContentTitle = styled.h1`

    width: 40%;

    font-size: 2.7rem;

    font-weight: ${({ theme }: { theme: ThemeInterface }) => (theme.FontWeightHeavy)};

`;

export {
      TopSectionMainContainer
    , ContentContainer1
    , ContentContainer2
    , TopImageContainer
    , TopContainerImage
    , TopContainerBody
    , ContentTitle
    
}

