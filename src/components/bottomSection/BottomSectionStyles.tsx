import styled from "styled-components";
import { Row, Column } from "../../styles/layout/Flex";
import { images } from "../../constants/images";
import ThemeInterface from "../../constants/interfaces/theme/ThemeInterface";

const BottomSectionMainContainer = styled(Row)`
  width: 100%;

  height: 15%;

  margin-top: 2.25rem;

  align-items: flex-start;

  justify-content: flex-start;

  gap: 2%;

  // background: #a7b087;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2.25rem;
    margin-top: 1.25rem;
    padding-bottom: 3rem;
  }

  @media screen and (max-width: 1024px) {
    gap: 1.25rem;
  }
`;

const ArticleListTile = styled(Row)`
  height: 100%;
  width: 33.33%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5%;
  // background: lightblue;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const ListTileImage = styled.img`
  height: 100%;
  width: 30%;

  @media screen and (max-width: 1024px) {
    height: 12rem;
  }

  @media screen and (max-width: 450px) {
    height: 8rem;
  }
`;

const ListTileTop = styled.h1`
  color: ${({ theme }: { theme: ThemeInterface }) => theme.greyishBlueColor};
`;

const ListTileMiddle = styled.h4`
  color: ${({ theme }: { theme: ThemeInterface }) => theme.veryDarkBlueColor};
  font-weight: ${({ theme }: { theme: ThemeInterface }) =>
    theme.FontWeightHeavy};

  &: hover {
    transition: all 0.3125s ease-in-out;

    color: ${({ theme }: { theme: ThemeInterface }) => theme.softRedColor};
  }
`;

const ListTileBottom = styled.p`
  color: ${({ theme }: { theme: ThemeInterface }) => theme.greyishBlueColor};
  font-size: ${({ theme }: { theme: ThemeInterface }) => theme.bodyFontSize};
  // font-weight: ${({ theme }: { theme: ThemeInterface }) =>
    theme.FontWeightHeavy};
`;

const ListTileBodyContainer = styled(Column)`
  align-items: flex-start;

  justify-content: space-between;

  height: 100%;

  width: 70%;

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    gap: 1.25rem;
  }

  // @media screen and (max-width:450px){
  //     justify-content: space-between;
  //     gap: 0;
  // }
`;

export {
  BottomSectionMainContainer,
  ArticleListTile,
  ListTileImage,
  ListTileTop,
  ListTileMiddle,
  ListTileBottom,
  ListTileBodyContainer,
};
