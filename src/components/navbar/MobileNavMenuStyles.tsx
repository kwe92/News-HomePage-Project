import styled from "styled-components";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Row, Column } from "../../styles/layout/Flex";
import { motion } from "framer-motion";
import { images } from "../../constants/images";
import ThemeInterface from "../../constants/interfaces/theme/ThemeInterface";

const NavLinkListItem = styled.a`
  display: flex;

  flex-direction: column;

  text-transform: capitalize;

  font-weight: 500;

  transition: all 0.3125s ease-in-out;

  font-size: 1.75rem;

  color: ${({ theme }: { theme: ThemeInterface }) => theme.darkGreyishBlue};

  &: hover {
    color: ${({ theme }: { theme: ThemeInterface }) => theme.softRedColor};
  }
`;

const NavbarMobileMenu = styled(Row)`
  display: none;

  width: 3.1875rem;

  align-items: center;

  justify-content: center;

  position: relative;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const HiMenu = styled(HiMenuAlt4)`
  width: 70%;

  height: 70%;

  color: black;
`;

const Hi_X = styled(HiX)`
  font-size: 5rem;

  margin-bottom: 5.75rem;

  color: ${({ theme }: { theme: ThemeInterface }) => theme.darkGreyishBlue};

  &: hover {
    color: ${({ theme }: { theme: ThemeInterface }) => theme.softRedColor};
  }
`;

const FramerDiv = styled(motion.div)`
  display: none;

  flex-direction: column;

  position: fixed;

  top: 0;
  bottom: 0;
  right: 0;
  z-index: 5;

  // TODO: Figure out best width you like

  width: 60%;

  height: 100vh;

  background: ${({ theme }: { theme: ThemeInterface }) => theme.offWhiteColor};

  background-size: cover;

  padding: 1rem;

  justify-content: flex-end;

  align-items: flex-end;

  @media screen and (max-width: 1024px) {
    display: flex;
  }

  @media screen and (max-width: 450px) {
    width: 100vw;
  }
`;

const MobileNavLinkUL = styled.ul`

    display: flex;

    flex-direction: column;

    width: 100%;

    height: 100%;

    justify-content: flex-start;

    align-items: flex-start;

    gap 2.75rem;

`;

const MobileNavLinkListItem = styled(NavLinkListItem)`
  display: inline;
`;

const NavLinkListItemWrapper = styled.li`
  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  margin: 0rem 0.625rem;

  cursor: pointer;
`;

export {
  NavbarMobileMenu,
  HiMenu,
  Hi_X,
  FramerDiv,
  MobileNavLinkUL,
  MobileNavLinkListItem,
  NavLinkListItemWrapper,
};
