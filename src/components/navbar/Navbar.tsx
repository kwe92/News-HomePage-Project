import React from "react";
import { NavbarContainer, NavLinksContainer } from "./NavbarStyles";

const Navbar = (props:{}) => {

    const navlinks = ["home", "new", "popular", "trending", "categories"];

    const navlinksWrapped = navlinks.map((link, index) => (
        <li key={link + index}>
            <a href={`${link}`}>{link}</a>
        </li>
    ))
    return (
        <NavbarContainer>
        <h2 >Navbar</h2>
        <NavLinksContainer>
            {navlinksWrapped}
        </NavLinksContainer>
        </NavbarContainer>
    );
};

export default Navbar;