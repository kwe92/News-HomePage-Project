import styled from "styled-components";
import ThemeInterface from "../../../constants/interfaces/theme/ThemeInterface";
import { Column } from "../../../styles/layout/Flex";

// TODO: Finish adding color

const NewsBoardContainer = styled(Column)`

    align-items: flex-start;

    justify-content: flex-start;

    height: 100%;

    width: 34.5%;

    background: #cd8b62;

`;

const NewsBoardInnerContainer = styled(Column)`
    align-items: flex-start;
    justify-content: space-between;

    height: 100%;
    width: 100%;
    padding: 2rem;

`;

const NewsBoardTitle = styled.h1`

`;

const NewsBoardListTile = styled(Column)`

    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.75rem;

`;

const ListTileTop = styled.h3`

`;

const ListTileBottom = styled.p`

    font-size: ${({ theme }: { theme: ThemeInterface }) => (theme.bodyFontSize)};

    color: ${({ theme }: { theme: ThemeInterface }) => (theme.greyishBlueColor)};


`;




const HorizontalLine = styled.div`

    background: ${({ theme }:{ theme:ThemeInterface }) => (theme.greyishBlueColor)};
    width: 100%;
    height: 0.0625rem;

`;

export {
      NewsBoardContainer
    , NewsBoardTitle
    , NewsBoardListTile
    , HorizontalLine
    , NewsBoardInnerContainer
    , ListTileTop
    , ListTileBottom
};