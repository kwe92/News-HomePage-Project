import styled from "styled-components";
import ThemeInterface from "../../../constants/interfaces/theme/ThemeInterface";
import { Column, Row } from "../../../styles/layout/Flex";

// TODO: Finish adding color

const NewsBoardContainer = styled(Column)`
  align-items: flex-start;

  justify-content: flex-start;

  height: 100%;

  width: 32%;

  background: ${({ theme }: { theme: ThemeInterface }) =>
    theme.veryDarkBlueColor};

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 40rem;
  }
`;

const NewsBoardInnerContainer = styled(Column)`
  align-items: flex-start;
  justify-content: space-between;

  height: 100%;
  width: 100%;
  padding: 2rem;

  @media screen and (max-width: 1190px) {
    padding: 0.75rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 2rem 2rem 4rem 2rem;
  }
`;

const NewsBoardTitle = styled.h1`
  color: ${({ theme }: { theme: ThemeInterface }) => theme.softOrangeColor};
`;

const NewsBoardListTile = styled(Column)`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;
`;

const ListTileTop = styled.h3`
  color: ${({ theme }: { theme: ThemeInterface }) => theme.offWhiteColor};

  &: hover {
    color: ${({ theme }: { theme: ThemeInterface }) => theme.softRedColor};
    transition: all 0.3125s ease-in-out;
  }
`;

const ListTileBottom = styled.p`
  font-size: ${({ theme }: { theme: ThemeInterface }) => theme.bodyFontSize};

  color: ${({ theme }: { theme: ThemeInterface }) => theme.greyishBlueColor};
`;

const HorizontalLine = styled.div`
  background: ${({ theme }: { theme: ThemeInterface }) =>
    theme.greyishBlueColor};
  width: 100%;
  height: 0.0625rem;
`;

export {
  NewsBoardContainer,
  NewsBoardTitle,
  NewsBoardListTile,
  HorizontalLine,
  NewsBoardInnerContainer,
  ListTileTop,
  ListTileBottom,
};
