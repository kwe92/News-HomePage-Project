import styled from "styled-components";
import { Row, Column } from "../../styles/layout/Flex";
import { images } from "../../constants/images";
import ThemeInterface from "../../constants/interfaces/theme/ThemeInterface";

const BottomSectionMainContainer = styled(Row)`

    width: 100%;

    height: 15%;

    margin-top: 1rem;

    align-items: flex-start;

    justify-content: flex-start;

    gap: 2%;

    // background: #a7b087;


`;

const ArticleListTile = styled(Row)`

    height: 100%;
    width: 33.33%;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5%;
    // background: lightblue;

`;

const ListTileImage = styled.img`

    height: 100%;
    width: 30%;

`;

const ListTileTop = styled.h1`
 color: ${({ theme }:{ theme:ThemeInterface }) => (theme.greyishBlueColor)};
`;

const ListTileMiddle = styled.h4`

color: ${({ theme }:{ theme:ThemeInterface }) => (theme.veryDarkBlueColor)};
font-weight: ${({ theme }:{ theme:ThemeInterface }) => (theme.FontWeightHeavy)};
`;

const ListTileBottom = styled.p`

color: ${({ theme }:{ theme:ThemeInterface }) => (theme.greyishBlueColor)};
font-size: ${({ theme }:{ theme:ThemeInterface }) => (theme.bodyFontSize)};
// font-weight: ${({ theme }:{ theme:ThemeInterface }) => (theme.FontWeightHeavy)};

`;

const ListTileBodyContainer = styled(Column)`

align-items: flex-start;

justify-content: space-between;

height: 100%;

width: 70%;

`;

export {
      BottomSectionMainContainer
    , ArticleListTile
    , ListTileImage
    , ListTileTop
    , ListTileMiddle
    , ListTileBottom
    , ListTileBodyContainer
}
