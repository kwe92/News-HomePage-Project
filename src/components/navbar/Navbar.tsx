import React from "react";
import { images } from "../../constants/images";
import { NavbarContainer, NavLinksContainer, Logo, IconMenu } from "./NavbarStyles";
import styled from "styled-components";
import ThemeInterface from "../../constants/interfaces/theme/ThemeInterface";

const Navbar = (props:{}) => {
    return (
        <NavbarContainer>
        <Logo src={images.logo}/>
        <NavLinksContainer>
            {navlinksWrapped}
        </NavLinksContainer>
        <IconMenu src={images.iconMenu}/>
        </NavbarContainer>
    );
};

const navlinks = ["home", "new", "popular", "trending", "categories"];

const CustomLink = styled.a`

    color: ${({ theme }: { theme:ThemeInterface }) => (theme.darkGreyishBlue)};

`;

const navlinksWrapped = navlinks.map((link, index) => (
        <li key={link + index}>
            <CustomLink href={`${link}`}>{link}</CustomLink>
        </li>
    ))

export default Navbar;