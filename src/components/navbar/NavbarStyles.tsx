import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";

const NavbarContainer = styled(Row)`

justify-content: space-between;

width: 100%;

height: 5rem;

background: yellow;

`;

const NavLinksContainer = styled.ul`

    display: flex;

    gap: 1.5rem;

    align-items: center;


`;

export { 
      NavbarContainer
    , NavLinksContainer
    ,  };