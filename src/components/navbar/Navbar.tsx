import React, { useState } from "react";
import { images } from "../../constants/images";
import {
  NavbarContainer,
  NavLinksContainer,
  Logo,
  IconMenu,
  CustomLink,
} from "./NavbarStyles";
import styled from "styled-components";
import {
  NavbarMobileMenu,
  HiMenu,
  Hi_X,
  FramerDiv,
  MobileNavLinkUL,
  MobileNavLinkListItem,
  NavLinkListItemWrapper,
} from "./MobileNavMenuStyles";

const Navbar = (props: {}) => {
  const [toggle, setToggle] = useState(false);

  const handToggleOff = () => setToggle(false);

  const handToggleBoth = () => setToggle((prevState) => !prevState);

  const navlinks = ["home", "new", "popular", "trending", "categories"];

  const navlinksWrapped = navlinks.map((link, index) => (
    <li key={link + index}>
      <CustomLink href={`${link}`}>{link}</CustomLink>
    </li>
  ));

  const mobileNavLinksItems = navlinks.map((item) => (
    <NavLinkListItemWrapper key={item}>
      <MobileNavLinkListItem href={`#${item}`} onClick={handToggleOff}>
        {item}
      </MobileNavLinkListItem>
    </NavLinkListItemWrapper>
  ));

  return (
    <NavbarContainer>
      <Logo src={images.logo} />
      <NavLinksContainer>{navlinksWrapped}</NavLinksContainer>

      <NavbarMobileMenu>
        <IconMenu src={images.iconMenu} onClick={handToggleBoth} />

        {toggle && (
          <MotionDiv>
            <Hi_X onClick={handToggleOff} />
            <MobileNavLinkUL>{mobileNavLinksItems}</MobileNavLinkUL>
          </MotionDiv>
        )}
      </NavbarMobileMenu>
    </NavbarContainer>
  );
};

const transition = { duration: 0.85, ease: "easeOut" };

const MotionDiv = (props: { children: any }) => (
  <FramerDiv
    // TODO: whileInView on devices with a smaller width than 300px | Small case, can figure it out later
    whileInView={{ x: [300, 0] }}
    transition={transition}
  >
    {props.children}
  </FramerDiv>
);

export default Navbar;
