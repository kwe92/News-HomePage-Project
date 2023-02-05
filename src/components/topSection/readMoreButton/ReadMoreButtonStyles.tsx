import styled from "styled-components";
import ThemeInterface from "../../../constants/interfaces/theme/ThemeInterface";

const StyledButton = styled.button`
  height: 2.5625rem;

  width: 47.5%;

  color: ${({ theme }: { theme: ThemeInterface }) => theme.offWhiteColor};

  background: ${({ theme }: { theme: ThemeInterface }) => theme.softRedColor};

  text-transform: uppercase;

  letter-spacing: 0.1875rem;

  border: none;

  &: hover {
    transition: all 0.3125s ease-in-out;
    background: ${({ theme }: { theme: ThemeInterface }) =>
      theme.darkGreyishBlue};
  }
`;

const ButtonBody = styled.p``;

export { StyledButton, ButtonBody };
