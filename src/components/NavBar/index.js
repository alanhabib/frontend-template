import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavBarElements";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Dolla
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default NavBar;
