import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";
import ThemeInterface from "../../constants/interfaces/theme/ThemeInterface";

const NavbarContainer = styled(Row)`
  justify-content: space-between;

  width: 100%;

  height: 5rem;

  // background: #8a8583;

  @media screen and (max-width: 1024px) {
    margin-top: 3rem;
  }

  @media screen and (max-width: 450px) {
    margin-top: 2rem;
  }
`;

const NavLinksContainer = styled.ul`
  display: flex;

  gap: 1.5rem;

  align-items: center;

  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.img``;

const IconMenu = styled.img`
  display: none;

  max-width: 100%;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const CustomLink = styled.a`
  color: ${({ theme }: { theme: ThemeInterface }) => theme.darkGreyishBlue};

  transition: all 0.3125s ease-in-out;

  &: hover {
    color: ${({ theme }: { theme: ThemeInterface }) => theme.softRedColor};
  }
`;

export { NavbarContainer, NavLinksContainer, Logo, IconMenu, CustomLink };
