import styled from "styled-components";
import { Column } from "../../../styles/layout/Flex";

const NewsBoardContainer = styled(Column)`

    align-items: flex-start;

    justify-content: flex-start;

    height: 100%;

    width: 34.5%;

    background: #cd8b62;

`;

const NewsBoardTitle = styled.h1`

`;

const NewsBoardListTile = styled(Column)``;

const HorizontalLine = styled.div``;

export {
      NewsBoardContainer
    , NewsBoardTitle
    , NewsBoardListTile
    , HorizontalLine
};