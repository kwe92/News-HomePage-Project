import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";

const NavbarContainer = styled(Row)`

justify-content: space-between;

width: 100%;

height: 5rem;

// background: #8a8583;

@media screen and (max-width:1024px){
  margin-top: 3rem;
}

@media screen and (max-width:450px){
  margin-top: 2rem;
}
`;

const NavLinksContainer = styled.ul`

    display: flex;

    gap: 1.5rem;

    align-items: center;

    text-transform: capitalize;

    @media screen and (max-width: 1024px){
      display: none;
    }

`;

const Logo = styled.img`

`;

const IconMenu = styled.img`

  display: none;
  @media screen and (max-width:1024px){
    display: block;
  }

`;

export { 
      NavbarContainer
    , NavLinksContainer
    , Logo
    , IconMenu

  };