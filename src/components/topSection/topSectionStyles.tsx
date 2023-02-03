import styled from "styled-components";
import { images } from "../../constants/images";
import ThemeInterface from "../../constants/interfaces/theme/ThemeInterface";
import { Column, Row } from "../../styles/layout/Flex";

const TopSectionMainContainer = styled(Row)`

 width: 100%;

 height: 57.5%;

//  background: #eed7a1;

 align-items: flex-start;

 justify-content: space-between;
 
//  gap: 3%;

@media screen and (max-width:1024px){
    flex-direction: column;
    height: 300%;
    gap: 3rem;
}

`;

const ContentContainer1 = styled(Column)`

    align-items: flex-start;

    justify-content: flex-start;

    height: 100%;

    width: 66%;

    gap: 5%;

    // background: #f8efd2;

    @media screen and (max-width:1024px){
        width:100%;
        height: 40rem;
    }

`;

const TopImageContainer = styled(Row)`

    width: 100%;

    height: 65%;

    // background: #d3cdae;

    background-image: url(${images.imageWeb3Mobiile});

    background-size: cover;

    @media screen and (max-width:1024px){
        height: 100%;
    }

`;

const TopContainerImage = styled.img`

    max-width: 100%;
    
    width: 100%;

    object-fit: cover;

`;

const TopContainerBody = styled(Row)`

    align-items: flex-start;

    justify-content: space-between;

    width: 100%;

    height: 34.5%;

    gap 10%;

    // background: #bf6164;

    @media screen and (max-width:1024px){
        height: auto;
        flex-direction: column;
        gap: 2rem;
    }

`;

const ContentTitle = styled.h1`

    width: 40%;

    font-size: 2.75rem;

    font-weight: ${({ theme }: { theme: ThemeInterface }) => (theme.FontWeightHeavy)};

    word-wrap: break-word;

    @media screen and (max-width:1024px){
        width: 100%;
    }
`;

const ContentBodyContainer = styled(Column)`

    align-items: flex-start;

    justify-content: space-between;

    height: 100%;

    width: 48.5%;

    // background: orange;

    @media screen and (max-width:1024px){
        height: auto;
        width: 100%;
        gap: 2rem;
    }
    
`;

const ContentP = styled.p`

    color: ${({ theme }:{ theme:ThemeInterface }) => (theme.greyishBlueColor)};

    font-size: ${({ theme }:{ theme:ThemeInterface }) => (theme.bodyFontSize)};

`;


export {
      TopSectionMainContainer
    , ContentContainer1
    , TopImageContainer
    , TopContainerImage
    , TopContainerBody
    , ContentTitle
    , ContentBodyContainer
    , ContentP
    
}

